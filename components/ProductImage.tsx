import { ProductSchema } from "@/types/zod";
import Image from "next/image";
import { useState } from "react";



const ProductImage = ({ product, admin } : { product: ProductSchema, admin: boolean }) => {
    const [selectedImage, setSelectedImage] = useState('')

    const validImages = product?.images.filter(img => img && img.trim() !== "") || []
    const mainImage = selectedImage || validImages[0] || "/images/default-image.png"
    
    return ( 
        <div>
            {admin ? (
                <div className="max-w-3xl flex flex-col gap-4">
                    
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


                    {/* Tiny Images */}
                    <div className="flex">
                        {validImages && validImages?.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={product.name}
                                width={62}
                                height={62}
                                onClick={() => setSelectedImage(img)}
                                className={`object-cover cursor-pointer border-1 ${selectedImage === img && 'border-black'}`}
                            />
                        ))}
                    </div>
                    
                    
                </div>
            ): (
                <div className="max-w-4xl flex gap-4">
                    {/* tiny Images */}
                    <div className="flex flex-col">
                        {validImages && validImages?.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={product.name}
                                width={62}
                                height={62}
                                onClick={() => setSelectedImage(img)}
                                className={`object-cover cursor-pointer border-1 ${selectedImage === img && 'border-black'}`}
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