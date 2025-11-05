

'use client'
import Capitalize from "@/lib/capitalize";
import { ProductSchema } from "@/types/zod";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const CollectionsComponent = ({ collectionName }: { collectionName: string }) => {
    const [collection, setCollection] = useState<ProductSchema[] | null>(null)

    // fetch Collection Data
    useEffect(() => {

        const fetchCollection = async () => {
            const res = await fetch(`/api/collections/show?name=${collectionName}`, { cache: 'no-store' })
            if (!res.ok) throw new Error('Could not fetch colection from server')
            const data = await res.json()
            setCollection(Array.isArray(data) ? data : [data])
        }
        fetchCollection()
    }, [collectionName])

    if (!collection) return <p>Loading...</p>

    // Flatten All Collections into one list
    const allCollections = collection.flatMap(col => col || [])

    return ( 
        <div className="max-w-7xl mx-auto py-10 px-4">
            {collection.length > 1 ? (
                <h1 className="text-2xl font-semibold mb-8">All Collections</h1>
            ) : (
                <h1 className="text-2xl font-semibold mb-8">
                    {Capitalize(collectionName).replace("-", " ")} Collection
                </h1>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {allCollections && allCollections.map((col) => (
                    <div key={col.id} className="flex flex-col h-full border border-slate-100 overflow-hidden hover:scale-105 hover:shadow-xl cursor-pointer">
                        {/* Product Image */}
                        <div className="relative w-full aspect-square">
                            {col.images && col.images[0] && (
                                <Link href={`/products/${col?.category?.name}/${col.slug}`}>
                                    <Image
                                        src={col?.images[0]}
                                        alt={col.name}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </Link>
                            )}
                        </div>
                        {/* Product Name && Price */}
                        <div className="p-2 flex flex-1 flex-col justify-between">
                            <h3 className="py-2">{col?.name}</h3>
                            <span>$ {col?.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default CollectionsComponent;