 
import { useCart } from "@/stores/useCart";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import { TrimText } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDeviceType } from "@/lib/deviceType";


const BasketPopover = ({ w, h }: { w: number, h: number }) => {

    const count = useCart((state) => state.items.length)
    const items = useCart((state) => state.items)
    const decreaseQuantity = useCart((state) => state.decreaseQuantity)
    const increaseQuantity = useCart((state) => state.increaseQuantity) 
    const removeItem = useCart((state) => state.removeItem)
    const ClearAll = useCart((state) => state.clearCart)

    const router = useRouter()
    const deviceType = useDeviceType()
    
    return ( 
        <Popover>
            <PopoverTrigger asChild>
                <div className={`relative cursor-pointer`} style={{ width: `${w * 4}px`, height: `${h * 4}px` }}>
                    <Image src={'/images/shoppingCart.svg'} alt="shoppping cart icon" fill priority className="object-contain"/>
                    <span className="absolute -top-3 -left-2 text-sm bg-red-500 rounded-full text-white px-2">{count !== 0 && count}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="end" sideOffset={8} className="max-h-[400px] w-[95vw] sm:w-[400px] md:w-[500px] lg:w-[600px] overflow-y-auto overflow-x-hidden">
                {count > 0 && deviceType !== 'mobile' ? (
                    <div>
                        {items && items.map((item, index) => (
                            <div key={index} className="grid grid-cols-[auto_auto_1fr_auto_auto] items-center gap-2">
                                <Image
                                    src={item.image || '/images/default-image.jpg'}
                                    alt={item.name}
                                    priority
                                    sizes="100%"
                                    width={45}
                                    height={45}
                                    className="object-cover aspect-square mt-2"
                                    />
                                {/* Increase / Decrease Quantity */}
                                <div className="flex mt-2">
                                    <button
                                        className="px-2 py-1 hover:bg-gray-300 bg-gray-50 border border-gray-200 cursor-pointer"
                                        onClick={() => decreaseQuantity(item.productId)}
                                    >
                                        -
                                    </button>
                                    <input type="number" className="w-10 text-center bg-white py-1" readOnly value={item.quantity} />
                                    <button
                                        className="px-2 py-1 hover:bg-gray-300 bg-gray-50 border border-gray-200 cursor-pointer"
                                        onClick={() => increaseQuantity(item.productId, item.stock)}
                                    >
                                        +
                                    </button>
                                </div>
                                {/* Item name */}
                                <Link href={`/products/${item.category}/${item.slug}`} className="pl-2 text-left pt-2">
                                    <p>{TrimText(item.name, 50)}</p>
                                </Link>
                                {/* Price */}
                                <div>
                                    <span>{item.price}</span>
                                </div>
                                {/* Remove item button */}
                                <button
                                    className="bg-red-500 hover:bg-red-600 transition cursor-pointer rounded-full flex items-center justify-center text-white w-4 h-4 ml-2"
                                    onClick={() => removeItem(item.productId)}
                                    >
                                    X
                                </button>
                                {/* Total line */}
                                <hr className="mt-5 border-gray-200 w-[calc(100%+30rem)]"/>
                            </div>
                        ))}
                        {/* Total Price */}
                        <div className="flex justify-between items-center pt-2">
                            <span className="font-semibold">Total: </span>
                            <span className="px-6">${items.reduce((acc, item) => acc + (item.quantity * item.price), 0)}</span>
                        </div>
                        {/* Bottom Buttons */}
                        <div className="mt-4 mb-2 flex justify-between">
                            <button className="hover:bg-rose-500 hover:text-white px-4 py-2 text-rose-500 border border-rose-500 cursor-pointer" onClick={ClearAll}>Clear All</button>
                            <button
                                className="text-slate-800 border border-slate-800 hover:bg-black hover:text-white px-4 py-2 cursor-pointer"
                                disabled={count === 0}
                                onClick={() => router.push('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                ) : count > 0 && deviceType === 'mobile' ? (
                    <div className="flex flex-col overflow-y-auto">
                        {items?.map((item, index) => (
                        <div key={index} className="">
                            {/* Name */}
                            <Link href={`/products/${item.category}/${item.slug}`} className="pl-2 mb-4 text-left"><p>{TrimText(item.name, 50)}</p></Link>
                            <div className="flex justify-between items-center gap-4 mt-2">
                                {/* Image */}
                                <Image
                                    src={item.image || '/images/default-image.jpg'}
                                    alt={item.name}
                                    priority
                                    sizes="100%"
                                    width={45}
                                    height={45}
                                    className="object-cover aspect-square"
                                    />
                                {/* Increase / Decrease Quantity */}
                                <div className="flex">
                                    <button
                                        className="px-2 py-1 hover:bg-gray-300 bg-gray-50 border border-gray-200 cursor-pointer"
                                        onClick={() => decreaseQuantity(item.productId)}
                                    >
                                        -
                                    </button>
                                    <input type="number" className="w-10 text-center bg-white py-1" readOnly value={item.quantity} />
                                    <button
                                        className="px-2 py-1 hover:bg-gray-300 bg-gray-50 border border-gray-200 cursor-pointer"
                                        onClick={() => increaseQuantity(item.productId, item.stock)}
                                    >
                                        +
                                    </button>
                                </div>
                                
                                {/* Price */}
                                <div>
                                    <span>{item.price}</span>
                                </div>
                                {/* Remove item button */}
                                <button
                                    className="bg-red-500 hover:bg-red-600 transition cursor-pointer rounded-full flex items-center justify-center text-white w-4 h-4 ml-2"
                                    onClick={() => removeItem(item.productId)}
                                    >
                                    x
                                </button>
                            </div>
                            {/* Total Line */}
                            <hr className="mt-5 border-gray-200 w-full" />
                            
                        </div>
                        ))}
                        {/* Total Price */}
                        <div className="flex justify-between items-center pt-2">
                            <span className="font-semibold">Total: </span>
                            <span className="px-6">${items.reduce((acc, item) => acc + (item.quantity * item.price), 0)}</span>
                        </div>
                        {/* Bottom Buttons */}
                        <div className="mt-4 mb-2 flex justify-between">
                            <button className="hover:bg-rose-500 hover:text-white px-4 py-2 text-rose-500 border border-rose-500 cursor-pointer" onClick={ClearAll}>Clear All</button>
                            <button
                                className="text-slate-800 border border-slate-800 hover:bg-black hover:text-white px-4 py-2 cursor-pointer"
                                disabled={count === 0}
                                onClick={() => router.push('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                ) :
                
                (
                    <div className="text-center flex flex-col justify-center">
                        <h1 className="font-semibold text-md">Shopping cart empty!</h1>
                        <p className="text-sm">No items found.</p>
                    </div>
                )}
            </PopoverContent>
        </Popover>
     )
}
 
export default BasketPopover;






