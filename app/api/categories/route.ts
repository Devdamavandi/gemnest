import { prisma } from "@/data/db"
import { NextResponse } from "next/server"



export async function GET(req: Request) {

    const { searchParams } = new URL(req.url)
    const name = searchParams.get("name")

    console.log("Category Name: ", name)

    if (!name) return NextResponse.json({ error: 'No Such a category found' }, { status: 404 })

    if (name === "all") {
        const allCategoryProducts = await prisma.category.findMany({
            include: {
                products: true
            }
        })
        return NextResponse.json(allCategoryProducts)
    }


    const selectCategory = await prisma.category.findFirst({
        where: { name: { equals: name, mode: 'insensitive' } },
        include: {
            products: {
                include: {
                    category: true
                }
            }
        }
    })



    if (!selectCategory) return NextResponse.json({ error: 'category not found' }, { status: 404 })

    return NextResponse.json(selectCategory)
}