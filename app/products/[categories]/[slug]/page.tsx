

import { prisma } from "@/data/db"
import dynamic from "next/dynamic"
import { NextResponse } from "next/server"
import { notFound } from "next/navigation"

interface ProductPageProps {
    params: {
        category: string
        slug: string
    }
}

export const revalidate = 1
const ProductDetails = dynamic(() => import('@/components/productDetails'), { ssr: true })

export default async function ProductPage({ params }: ProductPageProps) {

    const { category, slug } = await params

    if (!slug) return NextResponse.json({ error: 'No slug provided' }, { status: 404 })

    const product = await prisma.product.findUnique({
        where: { 
            slug,
            category: { name: { equals: category, mode: 'insensitive' } }
         },
        include: {
            orderItems: true,
            category: {
                select: { name: true }
            },
            reviews: { 
                include: { product: true, user: true }
            }
        }
    })

    if (!product) return notFound()

  
    const transformedProduct = {
        id: product.id,
        name: product?.name ?? "",
        slug: product?.slug ?? "",
        description: product?.description ?? "",
        price: product?.price ?? 0,
        images: product?.images ?? [],
        colors: product?.colors ?? [],
        imagesByColors: product?.imagesByColors ?? {},
        stoneType: product?.stoneType ?? "",
        stoneShape: product?.stoneShape ?? "",
        stoneWeight: product?.stoneWeight ?? "",
        material: product?.material ?? "",
        metalPurity: product?.metalPurity ?? "",
        sizes: product.sizes ?? [],
        stock: product?.stock ?? 0,
        weight: product?.weight ?? 0,
        dimensions: product?.dimensions ?? "",
        discount: product?.discount ?? 0,
        categoryId: product?.categoryId ?? "",
        category: product?.category ? { id: product?.categoryId ,  name: product?.category.name } : undefined
    }

    return (
        <div>
            <ProductDetails product={transformedProduct} />
        </div>
    )
}