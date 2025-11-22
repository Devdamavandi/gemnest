




'use client'

import { raleway } from "@/lib/fonts"
import Image from "next/image"
import  Link  from "next/link"
import { useEffect, useState } from "react"


const AllCollections = () => {

    const [collecions, setCollections] = useState<string[]>([])

    useEffect(() => {
        const fetchCollections = async () => {
            const res = await fetch('/api/collections', { cache: 'no-store' })
            if (!res.ok) throw new Error('Couldnt fetch Collections from the server')
            const data = await res.json()
            setCollections(data.collections)
        }
        fetchCollections()
    }, [])

    useEffect(() => {
        console.log("Collections", collecions)
    }, [collecions])
    
    return (
        <div className="grid items-center min-h-screen mx-10 my-14 text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
            {collecions?.map((c) => (
                <Link key={c} href={`/collections/${c}`} className="cursor-pointer space-y-2">
                    <div className="relative w-full aspect-video">
                        <Image src={`/images/collections/${c}.jpg`} alt="default image" fill priority className="object-cover"/>
                    </div>
                    <span className={raleway.className}>{c}</span>
                </Link>
            ))}
        </div>
    )
}


export default AllCollections 