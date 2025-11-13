
'use client'

import Capitalize from "@/lib/capitalize"
import { dm_serif_display, poppins } from "@/lib/fonts"
import { CategorySchema } from "@/types/zod"
import Link from "next/link"
import { useEffect, useState } from 'react'



const CategoriesPage = () => {

    const [categroies, setCategories] = useState<CategorySchema[] | null>(null)

    useEffect(() => {
        const fetchCatgories = async () => {
            const res = await fetch(`/api/categories?name=all`, { cache: 'no-store' })
            if (!res.ok) throw new Error('Could not fetch category from server')
            const data = await res.json()
            setCategories(Array.isArray(data) ? data : [data])
        }
        fetchCatgories()
    }, [])

    if (!categroies) return <p>Loading...</p>
    
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h1 className={`my-4 text-xl ${poppins.className}`}>All Categories</h1>
            <div className="grid grid-cols-3 gap-4">
                {categroies && categroies?.map(cat => (
                    <div key={cat?.id} className="p-6 shadow text-2xl">
                        <Link href={`/categories/${cat.products}`} className={dm_serif_display.className}>{Capitalize(cat?.name)}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default CategoriesPage