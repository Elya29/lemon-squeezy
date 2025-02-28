import { html } from 'satori-html'
import backgroundBase64 from './base64'
import type { BgType } from '../../src/types'

export const ogImageMarkup = (title: string, bgType?: BgType) => {
  const background = bgType ?? 'unicorn'
  if (!['plum', 'dot', 'rose', 'particle', 'unicorn'].includes(background))
    throw new Error(
      "The value of 'bgType' must be one of the following: 'plum', 'dot', 'rose', 'particle', 'unicorn'."
    )

  return html`<div
    tw="relative flex justify-center items-center w-full h-full"
    style="font-family: 'Inter'"
  >
    <img
      tw="absolute inset-0 w-full h-full"
      src=${backgroundBase64[background]}
      alt="open graph"
    />

    <div tw="flex items-center justify-start w-full px-18" style="gap: 20px">
      <div tw="flex flex-col" style="gap: 10px">
        <div tw="text-[#292929] text-3.1rem leading-relaxed mr-18">
          ${title}
        </div>
      </div>
    </div>
  </div>`
}
