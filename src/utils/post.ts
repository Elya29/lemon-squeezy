import { getCollection } from 'astro:content'
import type { CollectionEntry, ContentCollectionKey } from 'astro:content'

/**
 * Retrieves filtered posts from the specified content collection.
 * In production, it filters out draft posts.
 *
 * @async
 * @param {ContentCollectionKey} contentCollectionType
 *  The type of the content collection to filter.
 * @returns {Promise<CollectionEntry<ContentCollectionKey>[]>}
 *  A promise that resolves to the filtered posts.
 */
export async function getFilteredPosts(
  contentCollectionType: ContentCollectionKey
): Promise<CollectionEntry<ContentCollectionKey>[]> {
  return await getCollection(contentCollectionType, ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true
  })
}

/**
 * Sorts an array of posts by their publication date in descending order.
 *
 * @param {CollectionEntry<ContentCollectionKey>[]} posts - An array of posts to sort.
 * @returns {CollectionEntry<ContentCollectionKey>[]} - The sorted array of posts.
 */
export function getSortedPosts(
  posts: CollectionEntry<ContentCollectionKey>[]
): CollectionEntry<ContentCollectionKey>[] {
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
}

/**
 * Sorts an array of posts by their publication date in ascending order.
 *
 * @param {CollectionEntry<ContentCollectionKey>[]} posts - An array of posts to sort.
 * @returns {CollectionEntry<ContentCollectionKey>[]} - The sorted array of posts.
 */
export function getAscendingPosts(
  posts: CollectionEntry<ContentCollectionKey>[]
): CollectionEntry<ContentCollectionKey>[] {
  return posts.sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  )
}

/**
 * Filters posts by category then sorts by their publication date in ascending order.
 *
 * @param {CollectionEntry<ContentCollectionKey>[]} posts - An array of posts to filter and sort.
 * @returns {CollectionEntry<ContentCollectionKey>[]} - The filtered and sorted array of posts.
 */
export function getPostsByCategory(
  posts: CollectionEntry<ContentCollectionKey>[],
  category: string
): CollectionEntry<ContentCollectionKey>[] {
  const filteredPosts = posts.filter((post) => post.data.category === category)

  return filteredPosts.sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  )
}

// group by category with date ordering
export const groupByCategory = (
  posts: CollectionEntry<ContentCollectionKey>[]
) => {
  return posts.reduce(
    (groups, post) => {
      const category = post.data.category || 'Inclassable'
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(post)
      return groups
    },
    {} as Record<string, CollectionEntry<ContentCollectionKey>[]>
  )
}

// group by category in a defined order, and sort by date within each category
export const groupByOrderedCategory = (
  posts: CollectionEntry<ContentCollectionKey>[],
  categoryOrder: string[]
): Record<string, CollectionEntry<ContentCollectionKey>[]> => {
  const grouped = posts.reduce(
    (acc: Record<string, CollectionEntry<ContentCollectionKey>[]>, post) => {
      const category = post.data.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(post)
      return acc
    },
    {}
  )

  const sortedGrouped = categoryOrder.reduce(
    (
      acc: Record<string, CollectionEntry<ContentCollectionKey>[]>,
      category
    ) => {
      if (grouped[category]) {
        acc[category] = grouped[category].toSorted((a, b) => {
          return (
            new Date(a.data.pubDate).getTime() -
            new Date(b.data.pubDate).getTime()
          )
        })
      }
      return acc
    },
    {}
  )

  return sortedGrouped
}
