import { prisma } from "@/data/db"
import { NextResponse } from "next/server"



export async function GET(req: Request) {

    const { searchParams } = new URL(req.url)
    const name = searchParams.get("name")

    if (!name) return NextResponse.json({ error: 'No such a collection exist' }, { status: 404 })

    if (name === "all") {
        const allCollections = await prisma.product.findMany()
        return NextResponse.json(allCollections)
    }

    const collection = await prisma.product.findFirst({
        where: { collectionTags: { equals: name, mode: 'insensitive' } },
        include: { category: true }
    })

    if (!collection) return NextResponse.json({ error: 'Collection Not Found' }, { status: 404 })

    return NextResponse.json(collection)

}