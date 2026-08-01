import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/products";
import { ArrowRight } from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={product.href}
      className="group flex flex-col items-center"
    >
      <div className="relative mx-auto aspect-[4/3] w-[65%] overflow-hidden rounded-3xl bg-[#f5f5f4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-6 text-3xl font-bold text-[#025a6a]">
        {product.name}
      </h3>

      <p className="mt-2 text-lg text-stone-500">
        {product.category}
      </p>

      <div className="mt-5 inline-flex items-center gap-2 text-[#025a6a] font-semibold transition group-hover:gap-3">
        Learn More
        <ArrowRight size={18} />
      </div>
    </Link>
  );
}