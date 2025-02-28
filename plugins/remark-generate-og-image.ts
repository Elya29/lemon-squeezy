import chalk from 'chalk'
import satori from 'satori'
import sharp from 'sharp'
import { basename, dirname } from 'node:path'
import { readFileSync, writeFileSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { unescapeHTML, checkFileExistsInDir } from '../src/utils/common'
import { getCurrentFormattedTime } from '../src/utils/datetime'
import { ogImageMarkup } from './og-template/markup'
import { FEATURES } from '../src/config'

import type { SatoriOptions } from 'satori'
import type { BgType } from '../src/types'

const Inter = readFileSync('plugins/og-template/Inter-Regular-24pt.ttf')

const satoriOptions: SatoriOptions = {
  // debug: true,
  width: 1200,
  height: 630,
  fonts: [
    {
      name: 'Inter',
      weight: 400,
      style: 'normal',
      data: Inter,
    },
  ],
}

async function generateOgImage(title: string, bgType: BgType, output: string) {
  await mkdir(dirname(output), { recursive: true })

  console.log(
    `${chalk.black(getCurrentFormattedTime())} ${chalk.green(`Generating ${output}...`)}`
  )

  try {
    const node = ogImageMarkup(title, bgType)
    unescapeHTML(node)

    const svg = await satori(node, satoriOptions)

    const compressedPngBuffer = await sharp(Buffer.from(svg))
      .png({
        compressionLevel: 9,
        quality: 100,
      })
      .toBuffer()

    writeFileSync(output, compressedPngBuffer)
  } catch (e) {
    console.error(
      `${chalk.black(getCurrentFormattedTime())} ${chalk.red(`[ERROR] Failed to generate og image for '${basename(output)}.'`)}`
    )
    console.error(e)
  }
}

/**
 * Used to generate {@link https://ogp.me/ Open Graph} images.
 *
 * @see https://github.com/vfile/vfile
 */
function remarkGenerateOgImage() {
  // get config
  const ogImage = FEATURES.ogImage
  if (!(Array.isArray(ogImage) && ogImage[0])) return

  const { fallbackTitle, fallbackBgType } = ogImage[1]

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return async (_tree, file) => {
    // regenerate fallback
    if (!checkFileExistsInDir('public/og-images', 'og-image.png')) {
      await generateOgImage(
        fallbackTitle,
        fallbackBgType,
        'public/og-images/og-image.png'
      )
    }

    // check filename
    const filename = file.basename
    if (!filename || !(filename.endsWith('.md') || filename.endsWith('.mdx')))
      return

    // check draft & redirect
    const draft = file.data.astro.frontmatter.draft
    const redirect = file.data.astro.frontmatter.redirect
    if (draft || redirect) return

    // check if it need to be skipped
    const title = file.data.astro.frontmatter.title
    if (!title || !title.trim().length) return
    const ogImage = file.data.astro.frontmatter.ogImage
    if (ogImage === false) return

    // check if it has been generated
    const extname = file.extname
    const dirpath = file.dirname
    let nameWithoutExt = basename(filename, extname)
    if (nameWithoutExt === 'index') nameWithoutExt = basename(dirpath)
    if (checkFileExistsInDir('public/og-images', `${nameWithoutExt}.png`))
      return

    // check if it has been assigned & actually exists
    if (
      ogImage &&
      ogImage !== true &&
      checkFileExistsInDir('public/og-images', basename(ogImage))
    )
      return

    if (
      ogImage &&
      ogImage !== true &&
      !checkFileExistsInDir('public/og-images', basename(ogImage))
    ) {
      console.warn(
        `${chalk.black(getCurrentFormattedTime())} ${chalk.yellow(`[WARN] The '${ogImage}' specified in '${file.path}' was not found.`)}\n  ${chalk.bold('Hint:')} See ${chalk.cyan.underline('https://astro-antfustyle-theme.vercel.app/blog/about-open-graph-images/#configuring-og-images')} for more information on og image.`
      )
      return
    }

    // get bgType
    const pageBgType = file.data.astro.frontmatter.bgType
    const bgType = pageBgType || fallbackBgType

    // generate og images
    await generateOgImage(
      title.trim(),
      bgType,
      `public/og-images/${nameWithoutExt}.png`
    )
  }
}

export default remarkGenerateOgImage
