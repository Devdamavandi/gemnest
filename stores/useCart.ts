

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartItem = {
    productId: string
    name: string
    price: number
    quantity: number
    stock: number
    image: string
    slug: string
    category: string
}



type CartState = {
    items: CartItem[]
    addItem: (item: CartItem, quantity: number) => void
    removeItem: (productId: string) => void
    clearCart: () => void
    increaseQuantity: (productId: string, stock: number) => void
    decreaseQuantity: (productId: string) => void
}


export const useCart = create<CartState>() (
    persist(
        (set) => ({
            items: [],


            addItem: (item, quantity = 1) => 
                set((state) => {
                    const existing = state.items.find((i) => i.productId === item.productId)
                    if (existing) {
                        // Updaet quantity but dont excedd stock
                        return {
                            items: state.items.map((i) => 
                                i.productId === item.productId
                                    ? { ...i, quantity: Math.min(i.quantity + item.quantity) }
                                    : i
                            ),
                        }
                    }
                    return { items: [...state.items, {...item, quantity: Math.min(quantity, item.stock)}] }
                }),

            
            removeItem: (productId) => 
                set((state) => ({
                    items: state.items.filter((i) => i.productId !== productId)
                })),

            clearCart: () => set({ items: [] }),

            increaseQuantity: (productId) => 
                set((state) => ({
                    items: state.items.map((i) => 
                        i.productId === productId && i.quantity < i.stock
                            ? {...i, quantity: i.quantity + 1}
                            : i
                    ),
                })),

            decreaseQuantity: (productId) => 
                set((state) => ({
                    items: state.items.map((i) => 
                        i.productId === productId && i.quantity > 1
                            ? {...i, quantity: i.quantity - 1}
                            : i
                    ),
                })),
        }),

        {
            name: "cart-storage", // unique name for storage
        }
    )
)