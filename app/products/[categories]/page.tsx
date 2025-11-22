import BreadCrumb from "@/components/breadcrumb";
import ProductCard from "@/components/productCard";
import { prisma } from "@/data/db";
import { notFound } from "next/navigation";




interface props {
    params: {
        categories: string
    }
}

const ProductsCategories = async ({ params } : props) => {

    const { categories } = params
    
    const catProducts = await prisma.category.findFirst({
        where: { name: categories },
        include: { products: true }
    })

    if (!catProducts) return notFound()

   
const safeCatProducts = catProducts?.products?.map(scp => ({
    id: scp.id,
    name: scp.name ?? "",
    slug: scp.slug ?? "",
    description: scp.description ?? "",
    images: scp.images ?? [],
    price: scp.price ?? 0,
    stock: scp.stock ?? 0,
    discount: scp.discount ?? 0,
    weight: scp.weight ?? 0,
    dimensions: scp.dimensions ?? "",
    material: scp.material ?? "", // <-- fix here
    stoneType: scp.stoneType ?? "", // if present in ProductCard
    stoneShape: scp.stoneShape ?? "", // if present in ProductCard
    stoneWeight: scp.stoneWeight ?? "", // if present in ProductCard
    colors: scp.colors ?? [], // if present
    sizes: scp.sizes ?? [], // if present
    imagesByColors: typeof scp.imagesByColors === 'object' && scp.imagesByColors !== null
        ? scp.imagesByColors as Record<string, string[]>
        : {}, // same fix as before
    categoryId: scp.categoryId ?? "",
    category: catProducts ? { id: catProducts.id, name: catProducts.name } : undefined,
    collectionTags: scp.collectionTags ?? [],
    averageRating: scp.averageRating ?? 0
}))
    
    return ( 
        <main>
            <div className="pt-10 pl-10">
                <BreadCrumb />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 pt-6">
                {safeCatProducts && safeCatProducts.map(cp => (
                    <ProductCard key={cp.id} product={cp}  />
                ))}
            </div>
        </main>  
     )
}
 
export default ProductsCategories;