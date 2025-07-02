export async function getProducts(limit = 10) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}`);
    const data = await res.json();
    return data;
}