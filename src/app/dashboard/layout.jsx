export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-500 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Seller Panel</h2>
        <nav className="space-y-3">
          <a href="/dashboard/products" className="block hover:underline">All Products</a>
          <a href="/dashboard/products/add" className="block hover:underline">Add Product</a>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
