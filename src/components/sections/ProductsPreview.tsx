import { products } from "@/lib/data/products";
import ProductCard from "../products/ProductCard";

export default function ProductsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#000000]">
          Our Products
        </h2>

        <p className="mt-4 max-w-2xl text-md text-[#91A2BA]">
          Discover Ribionic's intelligent business platforms designed to
          simplify operations and help organizations scale with confidence.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}