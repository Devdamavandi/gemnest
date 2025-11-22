import { prisma } from "@/data/db"
import { NextResponse } from "next/server"




export async function GET(req: Request) {

    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")

    if (!category) return NextResponse.json({ error: 'Misssing category' }, { status: 400 })

    const related = await prisma.product.findMany({
        where: { 
            category: { name: category }
        },
        include: { category: true }
    })

    if (!related) return NextResponse.json({ error: 'No related products found!' }, { status: 404 })

    return NextResponse.json(related)
}