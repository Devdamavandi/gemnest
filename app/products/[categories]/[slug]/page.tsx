

import { prisma } from "@/data/db"
import { NextResponse } from "next/server"
import { notFound } from "next/navigation"
import ProductDetails from "@/components/productDetails";

export const revalidate = 1

export default async function ProductPage({ params }: { params: { categories: string; slug: string } }) {


    const { categories, slug } = await params

    if (!slug) notFound()

    const product = await prisma.product.findUnique({
        where: { 
            slug,
            category: { name: { equals: categories, mode: 'insensitive' } }
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
        name: product.name ?? "",
        slug: product.slug ?? "",
        description: product.description ?? "",
        price: product.price ?? 0,
        images: product.images ?? [],
        colors: product.colors ?? [],
        imagesByColors: typeof product.imagesByColors === 'object' && product.imagesByColors !== null
            ? product.imagesByColors as Record<string, string[]>
            : {}
        ,
        stoneType: product.stoneType ?? "",
        stoneShape: product.stoneShape ?? "",
        stoneWeight: product.stoneWeight ?? "",
        material: product.material ?? "",
        metalPurity: product.metalPurity ?? "",
        sizes: product.sizes ?? [],
        stock: product.stock ?? 0,
        weight: product.weight ?? 0,
        dimensions: product.dimensions ?? "",
        discount: product.discount ?? 0,
        categoryId: product.categoryId ?? "",
        shippingInfo: product.shippingInfo ?? "",
        category: product.category ? { id: product.categoryId, name: product.category.name } : undefined
    }

    return (
        <div>
            <ProductDetails product={transformedProduct} />
        </div>
    )
}

