


import BreadCrumb from "@/components/breadcrumb";
import ProductCard from "@/components/productCard";
import { prisma } from "@/data/db";
import { notFound } from "next/navigation";



const ProductsPage = async () => {

    const products = await prisma.product.findMany({
        include : { 
            category: true,
        }
    })

    if (!products) return notFound()

    const safeProducts = products.map(p => ({
        id: p.id ?? "",
        name: p?.name ?? "",
        slug: p.slug ?? "",
        description: p.description ?? "",
        images: p.images ?? [], // product main images
        colors: p.colors ?? [], // product colors 
        imagesByColors: p.imagesByColors ?? {},
        price: p?.price ?? 0,
        stock: p?.stock ?? 0,
        weight: p?.weight ?? 0,
        dimensions: p?.dimensions ?? "",
        discount: p?.discount ?? 0,
        categoryId: p?.categoryId ?? "",
        category: p?.category ? { id: p?.categoryId ,  name: p?.category.name } : undefined
    }))
    
    return ( 
        <main>
            <div className="pt-10 pl-10">
                <BreadCrumb />
            </div>
            <div className="px-10 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {safeProducts && safeProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
     )
}
 
export default ProductsPage;