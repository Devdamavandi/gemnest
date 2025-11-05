
'use client'

import { ProductSchema } from "@/types/zod";
import ProductImage from "./ProductImage";
import BreadCrumb from "./breadcrumb";
import Image from "next/image";
import { useEffect, useState } from "react";
import MouseTracker from "@/lib/mouseTracker";
import { antic_didone, cinzel, cormorant, dm_serif_display, inter, liber_baskerville, open_sans, playfairDisplay, poppins, prata, quattrocento, raleway, roboto } from "@/lib/fonts";

interface ProductProps {
    product: ProductSchema
}

const ProductDetails = ({product}: ProductProps) => {

    // for handling each product color's image
    const [displayedProduct, setDisplayedProduct] = useState(product)

    // for storing the selected size
    const [selectedSize, setSelectedSize] = useState("")

    const imagesByColors = product.imagesByColors ?? {}


    const { x, y } = MouseTracker()



    return ( 
        <div className="p-10 flex flex-col">
            <BreadCrumb/>

            {/* Top Half Section */}
            <div className="flex mt-8">
                {/* High-quality Images + Zoom */}
                <div className="flex-2">
                    <ProductImage product={displayedProduct} admin={false} />
                </div>
                <div className="flex-3">
                    {/* Name */}
                    <span className={`text-3xl ${dm_serif_display.className}`}>{product.name}</span>
                    {/* Category */}
                    <div className="pt-4 flex items-center gap-1">
                        <p className={`${poppins.className} font-light`}>category:</p>
                        <span className={`${quattrocento.className}`}>{product.category?.name}</span>
                    </div>
                    {/* Price */}
                    <div className={`pt-1 ${quattrocento.className}`}>${product?.price}</div>
                    {/* Colors */}
                    <div className="flex gap-2 pt-4">
                        {product?.colors?.map((c, i) => {

                            if (!c) return null

                            const colorThumb = product.imagesByColors?.[c]?.[0]
                            
                            return (
                            // Color images
                            <Image 
                                key={i} 
                                src={colorThumb ?? "/images/default-image.jpg"} 
                                alt={`image ${i + 1}`} 
                                width={64} 
                                height={64}
                                onClick={() => setDisplayedProduct({
                                    ...product,
                                    images: imagesByColors[c ?? ""] ?? []
                                })}
                                className="cursor-pointer hover:shadow"
                            />

                        )})}
                    </div>
                    {/* Sizes */}
                    <div className="flex items-center mt-6">
                        <p className={`${poppins.className} font-light text-slate-600 mr-1`}>sizes:</p>
                        {product.sizes && product.sizes.map((s, i) => {
                            return (
                                <div key={i} 
                                    className={`rounded-full px-2 cursor-pointer border ${quattrocento.className} ${selectedSize === s.trim() ? 'border-black': 'border-gray-50'}`} 
                                    onClick={() => setSelectedSize(s.trim())}
                                >
                                    {s}
                                </div>
                            )})}
                    </div>
                    {/* Metal/Material details - IF Available */}
                    <div className={`${quattrocento.className} flex items-center gap-1`}>
                        <span className={`${poppins.className} text-slate-600 font-light  ${product?.material?.length === 0 && 'hidden'}`}>material:</span>
                        <span>{product?.material}</span>
                    </div>
                    {/* Stone details (type, shape, carat) - IF Available */}
                    <div className="flex gap-6">
                        <span className={`flex gap-1 items-center ${quattrocento.className} ${product?.stoneType?.length === 0 && 'hidden'}`}><span className={`${poppins.className} font-light text-slate-600 `}>stone type:</span> {product.stoneType}</span>
                        <span className={`flex gap-1 items-center ${quattrocento.className} ${product?.stoneShape?.length === 0 && 'hidden'}`}><span className={`${poppins.className} font-light text-slate-600 `}>stone shape:</span> {product.stoneShape}</span>
                        <span className={`flex gap-1 items-center ${quattrocento.className} ${product?.stoneWeight?.length === 0 && 'hidden'}`}><span className={`${poppins.className} font-light text-slate-600 `}>stone weight:</span> {product.stoneWeight}</span>
                    </div>
                    {/* Dimensions */}
                    <div className={`${product?.dimensions?.length === 0 && 'hidden'} ${quattrocento.className}`}>
                        <span className={` text-slate-600 font-light ${poppins.className}`}>dimensions:</span> {product?.dimensions}
                    </div>
                    {/* Quantity */}
                    <div></div>
                    {/* Add to Cart */}
                    <div></div>
                </div>
            </div>

            {/* Bottom Half Section */}
            <div>
                {/* Description */}
                <div className={`${product?.description.length === 0 && 'hidden'} flex flex-col mt-4`}>
                    <span className={`${poppins.className} `}>Description:</span>
                    <div className={`${poppins.className} font-light`}>{product?.description}</div>
                </div>
                {/* Shipping & return info */}
                <div></div>
                {/* Reviews */}
                <div></div>
                {/* Related products */}
                <div></div>
            </div>
        </div>    
     )
}
 
export default ProductDetails;


