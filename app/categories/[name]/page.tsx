


'use client'

import CategoryProductsPage from "@/components/categoryProducts";
import { use } from "react";

interface Props {
    params: Promise<{  name: string }>
}

const CategoriesPage = ({ params }: Props) => {

    const { name } = use(params) // Unwraps params
    
    return ( 
        <div className="w-full min-h-screen">
            <CategoryProductsPage categoryName={name}/>
        </div>
     )
}
 
export default CategoriesPage;