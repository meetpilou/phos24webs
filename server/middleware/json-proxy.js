import { createReadStream } from 'fs'
import { join } from 'path'

export default defineEventHandler((event) => {
  const { req, res } = event.node

  if (req.url.startsWith('/json/')) {
    const filePath = join(process.cwd(), 'public', req.url)

    try {
      return sendStream(event, createReadStream(filePath), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      res.statusCode = 404
      return { error: 'File not found' }
    }
  }
})
