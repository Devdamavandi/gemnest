import { prisma } from "@/data/db"
import { NextResponse } from "next/server"



export async function GET(req: Request) {

    const { searchParams } = new URL(req.url)
    const name = searchParams.get("name")

    if (!name) return NextResponse.json({ error: 'No such a collection exist' }, { status: 404 })

    // Select All products in All Collections
    if (name === "all") {
        const allCollections = await prisma.product.findMany()
        return NextResponse.json(allCollections)
    }

    // Select Women Collections
    if (name.toLowerCase() === "women") {
        const WomenCollections = await prisma.product.findMany({
            where: { 
                gender: 'WOMEN', 
                collectionTags:  { has: "weddingbands" }
            },
            include: { category: true }
        })
        return NextResponse.json(WomenCollections)
    }
    // Select Men Collections
    if (name.toLowerCase() === "men") {
        const MenCollections = await prisma.product.findMany({
            where: { 
                gender: 'MEN', 
                collectionTags:  { has: "weddingbands" }
            },
            include: { category: true }
        })
        return NextResponse.json(MenCollections)
    }
    // Select Couples Collections
    if (name.toLowerCase() === "couples") {
        const couplesCollection = await prisma.product.findMany({
            where: { 
                category: { name: 'rings' },
                collectionTags:  { has: "couples" }
            },
            include: { category: true }
        })
        return NextResponse.json(couplesCollection)
    }
    // Select Eternity Collections
    if (name.toLowerCase() === "eternity") {
        const eternityCollection = await prisma.product.findMany({
            where: { 
                category: { name: 'rings' },
                collectionTags:  { has: "eternityrings" }
            },
            include: { category: true }
        })
        return NextResponse.json(eternityCollection)
    }
    // Select Three Stone
    if (name.toLowerCase() === "three-stone") {
        const threeStoneSettings = await prisma.product.findMany({
            where: { 
                category: { name: 'rings' },
                ringSetting:  { equals: "three-stone", mode: 'insensitive' }
            },
            include: { category: true }
        })
        return NextResponse.json(threeStoneSettings)
    }

    const collection = await prisma.product.findMany({
        where: { collectionTags: { has: name } },
        include: { category: true }
    })

    if (!collection) return NextResponse.json({ error: 'Collection Not Found' }, { status: 404 })

    return NextResponse.json(collection)

}