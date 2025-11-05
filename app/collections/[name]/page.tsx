

'use client'

import CollectionsComponent from "@/components/CollectionsComponent"
import { use } from "react"


interface Props {
    params: Promise<{ name: string }>
}

const CollectionsPage = ({ params }: Props) => {

    const { name } = use(params)

    return (
        <div className="w-full min-h-screen">
            <CollectionsComponent collectionName={name} />
        </div>
    )
}


export default CollectionsPage 