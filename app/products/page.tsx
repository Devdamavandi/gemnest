


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
    id: p.id,
    name: p.name ?? "",
    slug: p.slug ?? "",
    description: p.description ?? "",
    images: p.images ?? [],
    price: p.price ?? 0,
    stock: p.stock ?? 0,
    discount: p.discount ?? 0,
    weight: p.weight ?? 0,
    dimensions: p.dimensions ?? "",
    material: p.material ?? "", // <-- fix here
    stoneType: p.stoneType ?? "", // if present in ProductCard
    stoneShape: p.stoneShape ?? "", // if present in ProductCard
    stoneWeight: p.stoneWeight ?? "", // if present in ProductCard
    colors: p.colors ?? [], // if present
    sizes: p.sizes ?? [], // if present
    imagesByColors: typeof p.imagesByColors === 'object' && p.imagesByColors !== null
        ? p.imagesByColors as Record<string, string[]>
        : {}, // same fix as before
    categoryId: p.categoryId ?? "",
    category: p.category ? { id: p.category.id, name: p.category.name } : undefined,
    collectionTags: p.collectionTags ?? []
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