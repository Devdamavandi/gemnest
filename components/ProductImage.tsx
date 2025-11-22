import { ProductSchema } from "@/types/zod";
import Image from "next/image";
import { useState } from "react";



const ProductImage = ({ product, admin } : { product: ProductSchema, admin: boolean }) => {
    const [selectedImage, setSelectedImage] = useState('')

    const validImages = product?.images.filter((img: string): img is string => typeof img === "string" && img.trim() !== "") || []
    const mainImage = selectedImage || validImages[0] || "/images/default-image.png"
    
    return ( 
        <div>
            {admin ? (
                <div className="max-w-2xl flex flex-col gap-">
                    
                    {/* Bigger Image */}
                    <div className="relative h-[340px]">
                        <Image
                            src={mainImage}
                            alt="Image"
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>


                    {/* Tiny Images */}
                    <div className="flex py-4 w-full overflow-y-auto">
                        {validImages && validImages?.map((img: string, index: number) => (
                            <Image
                                key={index}
                                src={img}
                                alt={product.name}
                                width={62}
                                height={62}
                                onClick={() => setSelectedImage(img)}
                                className={`object-cover cursor-pointer border ${selectedImage === img && 'border-black'}`}
                                priority
                            />
                        ))}
                    </div>
                    
                    
                </div>
            ): (
                <div className="max-w-4xl flex gap-4">
                    {/* tiny Images */}
                    <div className="flex flex-col overflow-auto">
                        {validImages && validImages?.map((img: string, index: number) => (
                            <Image
                                key={index}
                                src={img}
                                alt={product.name}
                                width={62}
                                height={62}
                                onClick={() => setSelectedImage(img)}
                                className={`object-cover cursor-pointer border ${selectedImage === img && 'border-black'}`}
                                priority
                            />
                        ))}
                    </div>

                    {/* Bigger Image */}
                    <div className="relative w-[450px] h-[450px]">
                        <Image
                            src={mainImage}
                            alt="Image"
                            fill
                            priority
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
     )
}
 
export default ProductImage;