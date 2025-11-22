
'use client'

import { ProductSchema, ReveiewSchema } from "@/types/zod";
import ProductImage from "./ProductImage";
import BreadCrumb from "./breadcrumb";
import Image from "next/image";
import { Key, useEffect, useState } from "react";
// import MouseTracker from "@/lib/mouseTracker";
import { dm_serif_display, poppins, quattrocento } from "@/lib/fonts";
import { useCart } from "@/stores/useCart";
import ProductCard from "./productCard";
import Link from "next/link";
import { TrimText } from "@/lib/utils";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useDeviceType } from "@/lib/deviceType";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

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

    const deviceType = useDeviceType()

    // Fetch related products
    const [relatedProducts, setRelatedProducts] = useState<ProductSchema[]>([])
    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const res = await fetch(`/api/related-products?category=${product?.category?.name}`, { cache: 'no-store' })
            if (!res.ok) throw new Error('couldnt fetch related products from the server')
            const data = await res.json()
        console.log("Related PRoducts are: ", relatedProducts)
            setRelatedProducts(Array.isArray(data) ? data : [data])
        }
        fetchRelatedProducts()
    }, [])

    return ( 
        <div className="p-4 md:p-10 flex flex-col">
            <BreadCrumb/>

            {/* Top Half Section */}
            <div className="flex flex-col md:flex-row mt-8 gap-6 md:gap-0">
                {(deviceType === 'mobile' || deviceType === 'min-tablet') && <span className={`text-3xl ${dm_serif_display.className}`}>{product.name}</span>}
                {/* High-quality Images + Zoom */}
                <div className="w-full md:w-1/2">
                    {deviceType === "mobile" || deviceType === "min-tablet" ? (
                        <ProductImage product={displayedProduct} admin />
                    ) : (
                        <ProductImage product={displayedProduct} admin={false} />
                    )}
                </div>
                {/* Product Specifications */}
                <div className="w-full md:w-3/4 flex flex-col space-y-1">
                    {/* Name */}
                    <span className={`text-3xl ${dm_serif_display.className} hidden md:block`}>{product.name}</span>
                    {/* Category */}
                    <div className="pt-4 flex items-center gap-1">
                        <p className={`${poppins.className} font-light`}>category:</p>
                        <span className={`${quattrocento.className}`}>{product.category?.name}</span>
                    </div>
                    {/* Price */}
                    <div className={`pt-1 ${quattrocento.className}`}>${product?.price}</div>
                    {/* Colors */}
                    <div className="flex gap-2 pt-4">
                        {product?.colors?.map((c: string | number, i: number) => {

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
                        {product.sizes && product.sizes.map((s: string, i: number) => {
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
                    <div className="flex flex-col md:flex md:gap-6">
                        <span className={`flex gap-1 items-center ${quattrocento.className} ${product?.stoneType?.length === 0 && 'hidden'}`}>
                            <span className={`${poppins.className} font-light text-slate-600 `}>stone type:</span> 
                            {product.stoneType}
                        </span>
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
                {deviceType !== "mobile" && deviceType !== "min-tablet" ? (
                   <>
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
                            {product?.reviews?.map((review: ReveiewSchema) => (
                                <div key={review.id} className="mt-4">
                                    <div className="flex items-center gap-2 ">
                                        <Image src={`/images/users/11.jpg`} alt="user Samantha Image" width={38} height={38} priority className="object-cover rounded-full mb-2" />
                                        <h1 className="leading-8">{review?.user?.name}</h1>
                                    </div>
                                    <span className=" text-gray-600">{review?.comment}</span>
                                    {/* Review rating */}
                                    <div className="flex items-center gap-1 mt-2">
                                        <div className="flex text-gray-600 space-x-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={`${ i < product?.averageRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300" }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                   </>
                ) : (
                    <>
                        <div className="mt-4">
                            {/* Mobile View Description */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="description">
                                    <AccordionTrigger>Description</AccordionTrigger>
                                    <AccordionContent>
                                        <p>{product?.description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            {/* Mobile View Shipping & return Info */}
                            <Accordion type="single" collapsible>
                                <AccordionItem value="shipping">
                                    <AccordionTrigger>Shipping & Return Info</AccordionTrigger>
                                    <AccordionContent>
                                        <p>{product?.shippingInfo}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            {/* Mobile View Reviews */}
                            <div className="mt-10 flex flex-col gap-2">
                                <h1 className="text-lg">Reviews</h1>
                                {product?.reviews?.map((review: ReveiewSchema) => (
                                    <div key={review.id} className="mt-4">
                                        <div className="flex items-center gap-2 ">
                                            <Image src={`/images/users/11.jpg`} alt="user Samantha Image" width={38} height={38} priority className="object-cover rounded-full mb-2" />
                                            <h1 className="leading-tight">{review?.user?.name}</h1>
                                        </div>
                                        <span className="leading-tight text-gray-600 text-justify">{review?.comment}</span>
                                        {/* Review rating */}
                                        <div className="flex items-center gap-1 mt-2">
                                            <div className="flex text-gray-600 space-x-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={`${ i < product?.averageRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300" }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {/* Related products */}
                <div className="w-full my-10">
                    <Carousel className="w-full">
                        <CarouselContent>
                            {relatedProducts?.map((related) => (
                                <CarouselItem key={related?.id} className="flex flex-col basis-[250px] md:basis-[300px] lg:basis-[340px]">
                                    <Link href={`/products/${related?.category?.name}/${related?.slug}`} className="flex flex-col gap-2 justify-center h-72 md:h-auto w-full overflow-hidden">
                                        <Image src={`${related?.images?.[0] ?? ""}`} alt="" width={300} height={340} className="object-cover border border-gray-100 h-full" />
                                        <span className={`${poppins.className} font-extralight`}>{TrimText(related?.name, 25)}</span>
                                    </Link>
                                    <span className={`${poppins.className} font-extralight`}>${related?.price}</span>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex absolute lg:left-[-60px] top-1/2 -translate-y-1/2 size-16 cursor-pointer transition-all duration-200 "/>
                        <CarouselNext className="hidden md:flex absolute lg:right-[-60px] top-1/2 -translate-y-1/2 size-16 cursor-pointer transition-all duration-200" />
                    </Carousel>
                </div>
            </div>
        </div>    
     )
}
 
export default ProductDetails;


