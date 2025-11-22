

import { z } from 'zod'

// I Used z.lazy to reference later schemas like categorySchema or reviewSchema
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productSchema: z.ZodType<any> = z.lazy(() =>
    z.object({
    id: z.string().optional(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    price: z.number(),
    stock: z.number(),
    sizes: z.array(z.string()),
    colors: z.array(z.string().optional()),
    images: z.array(z.string().optional()),
    material: z.string().optional(),
    stoneType: z.string().optional(),   // e.g., “diamond”, “sapphire”, “emerald”
    stoneShape: z.string().optional(),  // e.g., “round”, “princess”, “oval”
    stoneWeight: z.string().optional(), // e.g., “0.5 carat”
    metalPurity: z.string().optional(),
    imagesByColors: z.record(
        z.string(),
        z.array(z.string())
    ).optional(),
    weight: z.number().optional(),
    dimensions: z.string().optional(),
    discount: z.number(),
    categoryId: z.string().optional(),
    category: categorySchema.optional(),
    collectionTags: z.array(z.string().optional()),
    shippingInfo: z.string().optional(),
    reviews: reviewSchema,
    averageRating: z.number().int()
    })
)


export const categorySchema = z.lazy(() =>
    z.object({
    id: z.string(),
    name: z.string(),
    products: z.array(productSchema).optional()
})
)

export const userSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    image: z.string().optional(),
    role: z.string().optional(),
    reviews: z.array(z.string()).optional(),
    wishlist: z.array(z.string()).optional(),
    addresses: z.array(z.string()).optional(),
    orders: z.array(z.string()).optional(),
    carts: z.array(z.string()).optional()
})

export const reviewSchema = z.lazy(() => 
    z.object({
    id: z.string(),
    rating: z.number(),
    comment: z.string().optional(),
    user: userSchema,
    userId: z.string(),
    product: productSchema,
    productId: z.string()
})
)

export type ProductSchema = z.infer<typeof productSchema>
export type CategorySchema = z.infer<typeof categorySchema>
export type UserSchema = z.infer<typeof userSchema>
export type ReveiewSchema = z.infer<typeof reviewSchema>









