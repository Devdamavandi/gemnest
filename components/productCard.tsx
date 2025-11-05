import { ProductSchema } from "@/types/zod";
import Image from "next/image";
import Link from "next/link";



const ProductCard = ({ product }: { product: ProductSchema  }) => {

    

    return ( 
        <div className="flex flex-col h-full border border-slate-100 overflow-hidden hover:scale-101 hover:shadow-xl cursor-pointer">
           {/* Product Image */}
            <div className="relative w-full aspect-square ">
                {product.images && product.images[0] ? (
                    <Link href={`/products/${product?.category?.name}/${product.slug}`}>
                        <Image
                            src={product?.images[0]}
                            alt={product.name}
                            fill
                            priority
                            className="object-cover"
                        />
                    </Link>
                ) : (
                    <Image
                        src={'/images/default-image.png'}
                        alt="placeholder image"
                        fill
                        className="object-cover"
                    />  
                )}
            </div>
            {/* Product Name & Price */}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="py-2">{product?.name}</h3>
                <p>$ {product?.price}</p>
            </div>
        </div>
     )
}
 
export default ProductCard