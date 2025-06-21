import { products } from '@/lib/data';

export async function GET() {
  return Response.json(products);
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = {
    id: Date.now().toString(),
    ...body,
  };
  products.push(newProduct);
  return Response.json({ message: 'Product added', product: newProduct }, { status: 201 });
}
