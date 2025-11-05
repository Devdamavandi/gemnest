

    'use client'

    import Capitalize from "@/lib/capitalize"
    import { CategorySchema } from "@/types/zod"
    import { useEffect, useState } from "react"
import ProductCard from "./productCard"


    const CategoryProductsPage = ({categoryName}: { categoryName: string }) => {
        const [categories, setCategories] = useState<CategorySchema[] | null>(null)

       

        // fetch the category products
        useEffect(() => {
            const fetchCategory = async () => {
                const res = await fetch(`/api/categories?name=${categoryName}`, { cache: 'no-store' })
                if (!res.ok) throw new Error('could not fetch category from server')
                const data = await res.json()
                setCategories(Array.isArray(data) ? data : [data])
            }
            fetchCategory()
        }, [categoryName])

        if (!categories) return <p>Loading...</p>

        // Flatten all products into one list
        const allProducts = categories.flatMap(cat => cat.products || [])

        return ( 
            <div className="max-w-7xl mx-auto py-10 px-4">
                {categories.length > 1 ? (
                    <h1 className="text-2xl font-semibold mb-8">All Categories</h1>
                ) : (
                    <h1 className="text-2xl font-semibold mb-8">
                        {Capitalize(categories[0]?.name)} Category
                    </h1>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {allProducts && allProducts.map((product) => (
                    <div key={product.id} className="mb-16">
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
    
export default CategoryProductsPage;


