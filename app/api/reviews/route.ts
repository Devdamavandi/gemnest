import { prisma } from "@/data/db"
import { NextResponse } from "next/server"




export async function GET() {

    try {
        const reviews = await prisma.review.findMany({
            include: {
                product: true,
                user: true
            }
        })

        if (!reviews) return NextResponse.json({ error: 'No Reviews Found in server' }, { status: 404 })

        return NextResponse.json(reviews)

    } catch (err) {
        console.error('Failed to find reviews', err)
        return NextResponse.json({ error: 'Failed in finding reviews' }, { status: 500 })
    }
}