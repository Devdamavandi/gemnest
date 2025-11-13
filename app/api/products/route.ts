import { prisma } from "@/data/db";
import { NextResponse } from "next/server";






export async function GET() {

    try {
            const products = await prisma.product.findMany({
                include: { category: true }
            })
        
            if (!products) return NextResponse.json({ error: 'No products found!' }, { status: 404 })
        
            return NextResponse.json(products)
    } catch (err) {
        console.log('failed to fetch products', err)
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}