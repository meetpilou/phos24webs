export default function () {
  // LOCAL DEVELOPMENT
  let unanimConfig = {}
  const config = useRuntimeConfig()
  const isPreview = config.public.preview === 'true'

  if (isPreview) {
    unanimConfig = {
      appName: 'Brand',
      appHost: 'https://preview.unanim.studio/nuxt24kick',
      cmsUrl: 'https://preview.unanim.studio/api/nuxt24kick',
      meilisearchApiKey:
        'bb92f427b9716dbf34ec2f1ed94c9e24db8a14734cd905b99422c0cd50b200b3',
      meilisearchEnv: 'nuxt24kick_dev_',
      googleMapsApiKey: 'AIzaSyDaV0pTyhZFvy7jchS-SL0mZcHJ8bpBtSI',
    }
  } else {
    unanimConfig = {
      appName: window.unanimConfig?.appName || 'Brand',
      appHost: window.unanimConfig?.appHost || 'http://localhost:3000',
      cmsUrl: window.unanimConfig?.cmsUrl || 'http://localhost:8000',
      meilisearchApiKey:
        window.unanimConfig?.meilisearchApiKey ||
        'bb92f427b9716dbf34ec2f1ed94c9e24db8a14734cd905b99422c0cd50b200b3',
      meilisearchEnv: window.unanimConfig?.meilisearchEnv || 'nuxt24kick_prod_',
      googleMapsApiKey:
        window.unanimConfig?.googleMapsApiKey ||
        'AIzaSyDaV0pTyhZFvy7jchS-SL0mZcHJ8bpBtSI',
    }
  }

  if (process.env.NODE_ENV === 'development') window.unanimConfig = unanimConfig
  return unanimConfig
}
