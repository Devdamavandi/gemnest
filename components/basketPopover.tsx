 
import { useCart } from "@/stores/useCart";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import { TrimText } from "@/lib/utils";
import { useRouter } from "next/navigation";



const BasketPopover = () => {

    const count = useCart((state) => state.items.length)
    const items = useCart((state) => state.items)
    const decreaseQuantity = useCart((state) => state.decreaseQuantity)
    const increaseQuantity = useCart((state) => state.increaseQuantity) 
    const removeItem = useCart((state) => state.removeItem)
    const ClearAll = useCart((state) => state.clearCart)

    const router = useRouter()
    
    return ( 
        <Popover>
            <PopoverTrigger asChild>
                <div className="relative cursor-pointer w-9 h-10">
                    <Image src={'/images/shoppingCart.svg'} alt="shoppping cart icon" fill priority />
                    <span className="absolute text-red-500">{count !== 0 && count}</span>
                </div>
            </PopoverTrigger>
            <PopoverContent>
                {count > 0 ? (
                    <div className="overflow-y-scroll">
                        {items && items.map((item, index) => (
                            <div key={index} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-2 py-2">
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
                                <div>
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
                                <p>{TrimText(item.name, 50)}</p>
                                {/* Remove item button */}
                                <button
                                    className="bg-red-500 hover:bg-red-600 transition cursor-pointer rounded-full flex items-center justify-center text-white w-4 h-4 ml-2"
                                    onClick={() => removeItem(item.productId)}
                                >
                                    x
                                </button>
                                {/* Total line */}
                                <hr className="mt-5 border-gray-200 w-[calc(100%+30rem)]"/>
                            </div>
                        ))}
                        {/* Bottom Buttons */}
                        <div className="mt-4 flex justify-between">
                            <button className="hover:bg-rose-500 hover:text-white px-4 py-2 text-rose-500 border border-rose-500 cursor-pointer" onClick={ClearAll}>Clear All</button>
                            <button
                                className="text-slate-800 border border-slate-800 hover:bg-slate-800 hover:text-white px-4 py-2 cursor-pointer"
                                disabled={count === 0}
                                onClick={() => router.push('/checkout')}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                ) : (
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