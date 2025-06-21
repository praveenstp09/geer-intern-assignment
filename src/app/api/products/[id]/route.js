import { products } from "@/lib/data";

export async function GET(req, { params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req, { params }) {
  const index = products.findIndex((p) => p.id === params.id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }
  products.splice(index, 1);
  return new Response(JSON.stringify({ message: "Product deleted" }), {
    status: 200,
  });
}
