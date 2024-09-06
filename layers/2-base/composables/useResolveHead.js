export default function (
  { title = '', description = '', image = '' },
  other = {},
) {
  const { appHost, appName } = useUnanimConfig()
  const { scrollingDown } = useScrollStatus()
  const route = useRoute()

  // DEFAULTS
  title ||= 'Brand'
  description ||= `Brand, an expert in doing something !`
  image ||= `${appHost}/images/ogimage.png`

  useHead({
    bodyAttrs: () => {
      return scrollingDown.value ? { class: 'goingDown' } : null
    },
    // titleTemplate: (chunk) => (chunk ? `${chunk} | ${appName}` : appName),
    title,
    meta: [
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0',
      },
      {
        hid: 'format-detection',
        name: 'format-detection',
        content: 'telephone=no,date=no,address=no,email=no,url=no',
      },
      // Search Engine
      {
        hid: 'title',
        name: 'title',
        content: title,
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'image',
        name: 'image',
        content: image,
      },
      // Schema.org for Google
      {
        itemscope: '',
        itemprop: 'name',
        content: title,
      },
      {
        itemscope: '',
        itemprop: 'description',
        content: description,
      },
      {
        itemscope: '',
        itemprop: 'image',
        content: image,
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: `${appHost}${route.fullPath}`,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: appName,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [
      {
        rel: 'prefetch',
        href: 'https://www.youtube.com',
      },
      {
        rel: 'preconnect',
        crossorigin: true,
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'prefetch',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'prefetch',
        href: 'https://search.unanim.studio',
      },
      // {
      //   rel: 'prefetch',
      //   href: cmsUrl,
      // },
      {
        rel: 'dns-prefetch',
        href: 'https://www.youtube.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://search.unanim.studio',
      },
      // {
      //   rel: 'dns-prefetch',
      //   href: cmsUrl,
      // },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
        href: `${appHost}/favicon.ico`,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
        href: `${appHost}/favicon-i.ico`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${appHost}/favicon-16x16-i.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${appHost}/favicon-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${appHost}/favicon-32x32-i.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: `${appHost}/android-chrome-192x192.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: `${appHost}/android-chrome-192x192-i.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: `${appHost}/android-chrome-512x512.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: `${appHost}/android-chrome-512x512-i.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: `${appHost}/apple-touch-icon.png`,
      },
      {
        rel: 'manifest',
        href: `${appHost}/site.webmanifest`,
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: `${appHost}/safari-pinned-tab.svg`,
      },
    ],
    ...other,
  })
}
