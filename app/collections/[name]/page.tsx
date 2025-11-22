

'use client'

import CollectionsComponent from "@/components/CollectionsComponent"
import { useParams } from "next/navigation"
import { use } from "react"




const CollectionsPage = () => {

    const params = useParams()
    // Its Needed to force the name to a string Becasue The Component expects a string
    const name = Array.isArray(params.name) ? params.name[0] : params.name || ""

    return (
        <div className="w-full min-h-screen">
            <CollectionsComponent collectionName={name} />
        </div>
    )
}


export default CollectionsPage 