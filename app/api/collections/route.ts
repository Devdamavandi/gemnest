import { prisma } from "@/data/db";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        const collectionTags = await prisma.product.findMany({
            select: {
                collectionTags: true
            }
        })

        const allproductsTags = [
            ...new Set(
                collectionTags
                .flatMap((p) => p.collectionTags || [])
                .filter((tag) => tag !== null && tag !== "")
            )
        ]

               
        return NextResponse.json({collections: allproductsTags})
        
    } catch (err) {
        console.error('Failed to fetch collections', err)
        return NextResponse.json({ error: 'Failed fetching collections' }, { status: 500 })
    }
}