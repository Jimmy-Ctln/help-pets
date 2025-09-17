import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

export async function POST(req: Request) {
  const data = await req.formData()
  const file = data.get('file')
  const folder = data.get('folder')

  if (!file || !(file instanceof File)) {
    throw new Error('No valid file provided for upload.')
  }

  if (!folder) {
    throw new Error('folder is empty')
  }

  let transformation

  if (folder === 'avatars') {
    transformation = [
      { width: 300, height: 300, crop: 'fill', quality: 'auto', fetch_format: 'auto' },
    ]
  } else if (folder === 'shelters-background') {
    transformation = [{ width: 1200, quality: 'auto', fetch_format: 'auto' }]
  } else if (folder === 'selters-picture') {
    transformation = [
      { width: 500, height: 350, crop: 'fill', quality: 'auto', fetch_format: 'auto' },
    ]
  } else if (folder === 'animals-pictures') {
    transformation = [{ width: 500, quality: 'auto', fetch_format: 'auto' }]
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const base64 = buffer.toString('base64')
  const dataUri = `data:${file.type};base64,${base64}`

  const upload = await cloudinary.uploader.upload(dataUri, {
    folder: folder.toString(),
    transformation: transformation,
  })

  return Response.json({ url: upload.secure_url })
}
