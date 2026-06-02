import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const client = await clientPromise
    const db = client.db("linkshort")
    const collection = db.collection("url")

    if (!body.url || !body.shorturl) {
      return Response.json({ success: false, error: true, message: 'Missing URL or short URL.' }, { status: 400 })
    }

    const doc = await collection.findOne({ shorturl: body.shorturl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' }, { status: 409 })
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
  } catch (error) {
    console.error('API generate error:', error)
    return Response.json({ success: false, error: true, message: 'Server error while generating URL.' }, { status: 500 })
  }
}
