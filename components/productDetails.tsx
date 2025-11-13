
'use client'

import { ProductSchema, ReveiewSchema } from "@/types/zod";
import ProductImage from "./ProductImage";
import BreadCrumb from "./breadcrumb";
import Image from "next/image";
import { useEffect, useState } from "react";
// import MouseTracker from "@/lib/mouseTracker";
import { dm_serif_display, poppins, quattrocento } from "@/lib/fonts";
import { useCart } from "@/stores/useCart";
import ProductCard from "./productCard";
import Link from "next/link";
import { TrimText } from "@/lib/utils";

interface ProductProps {
    product: ProductSchema
}

const ProductDetails = ({product}: ProductProps) => {

    // for handling each product color's image
    const [displayedProduct, setDisplayedProduct] = useState(product)

    // for storing the selected size
    const [selectedSize, setSelectedSize] = useState("")

    const imagesByColors = product.imagesByColors ?? {}

    const addItem = useCart((state) => state.addItem)
    const decreaseQuantity = useCart((state) => state.decreaseQuantity)
    const increaseQuantity = useCart((state) => state.increaseQuantity)
    const items = useCart((state) => state.items)


    // const { x, y } = MouseTracker()

    const handleAddToCart = () => {
        addItem({
            productId: product?.id ?? "",
            name: product?.name,
            price: product?.price,
            quantity: 1,
            stock: product?.stock,
            image: product?.images[0] ?? "",
            slug: product?.slug,
            category: product?.category?.name ?? ""
        }, 1)
    }


    // Fetch Reviews
    const [reviews, setReviews] = useState<ReveiewSchema[]>([])
    useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch('/api/reviews', { cache: 'no-store' })
            if (!res.ok) throw new Error('Couldnt fetch reviews from Server')
            const data = await res.json()
            setReviews(Array.isArray(data) ? data : [data])
        }
        fetchReviews()
        console.log("reviews: ", reviews)
    }, [])

    // Fetch related products
    const [relatedProducts, setRelatedProducts] = useState<ProductSchema[]>([])
    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const res = await fetch(`/api/related-products?category=${product?.category?.name}`, { cache: 'no-store' })
            if (!res.ok) throw new Error('couldnt fetch related products from the server')
            const data = await res.json()
            setRelatedProducts(Array.isArray(data) ? data : [data])
        }
        fetchRelatedProducts()
    }, [])

    return ( 
        <div className="p-10 flex flex-col">
            <BreadCrumb/>

            {/* Top Half Section */}
            <div className="flex mt-8">
                {/* High-quality Images + Zoom */}
                <div className="flex-2">
                    <ProductImage product={displayedProduct} admin={false} />
                </div>
                {/* Product Specifications */}
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
                    <div className="flex items-center gap-2 h-8 max-w-32 mt-10">
                        <button 
                            className="flex items-center justify-center px-1 w-8 h-8 text-xl border border-gray-200/80 hover:bg-gray-50 cursor-pointer"
                            onClick={() => product?.id && decreaseQuantity(product?.id)}
                            >
                                ー
                        </button>
                        <input 
                            type="number" 
                            readOnly 
                            className="w-full h-8 border border-gray-200/80 text-center text-sm" 
                            value={
                                items.find(item => 
                                    item.productId === product?.id
                                )?.quantity ?? 0
                            }    
                        />
                        <button 
                            className="flex items-start justify-center px-2 w-8 h-8 text-xl border border-gray-200/80 hover:bg-gray-50 cursor-pointer"
                            onClick={() => product?.id && increaseQuantity(product?.id, product?.stock)}
                            >
                            +
                        </button>
                    </div>
                    {/* Add to Cart */}
                    <div className="mt-4 max-w-md">
                        <button
                            className="px-2 py-4 w-full bg-black hover:bg-transparent hover:border hover:border-black hover:text-black cursor-pointer text-white"
                            onClick={handleAddToCart}
                        >Add to Cart</button>
                    </div>
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
                <div className="bg-yellow-500">
                    <span>{product.shippingInfo}</span>
                </div>
                <hr className="w-full mx-auto px-10 my-6 text-gray-400" />
                {/* Reviews */}
                <div className="mt-10 flex flex-col gap-2">
                    <h1 className="text-lg">Reviews</h1>
                    {reviews?.map((review) => (
                        <div key={review.id} className="mt-4">
                            <div className="flex items-center gap-2 ">
                                <Image src={`/images/users/11.jpg`} alt="user Samantha Image" width={38} height={38} priority className="object-cover rounded-full" />
                                <h1 className="leading-tight">{review?.user?.name}</h1>
                            </div>
                            <span className="ml-12 leading-tight text-gray-600">{review?.comment}</span>
                        </div>
                    ))}
                </div>
                {/* Related products */}
                <div className="flex gap-4 max-w-7xl justify-center items-center mx-auto overflow-x-auto h-fit mt-20">
                    {relatedProducts?.map((related) => (
                        <div key={related?.id} className="h-full">
                            <Link href={`/products/${related?.category?.name}/${related?.slug}`} className="flex flex-col gap-2">
                                <Image src={`${related?.images?.[0] ?? ""}`} alt="" width={300} height={340} className="object-cover border border-gray-100" />
                                <span>{TrimText(related?.name, 25)}</span>
                            </Link>
                            <span>${related?.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>    
     )
}
 
export default ProductDetails;


