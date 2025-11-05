

export async function getProduct(id: string) {

    const response = await fetch(`${process.env.API_URL}/api/products/${id}`)
    if (!response) throw new Error('Failed to fetch product')
    return response.json()
}