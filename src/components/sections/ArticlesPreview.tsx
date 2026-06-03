import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/data/articles";

export default function ArticlesPreview() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="mb-10 text-4xl font-semibold text-slate-900">
          Ushering a New Era of Services
        </h2>

        {/* Articles Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group relative h-[260px] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Light Overlay */}
              <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/20" />

              {/* Title */}
              <div className="absolute left-4 top-4 right-4">
                <h3 className="text-2xl font-bold leading-tight text-white drop-shadow-md">
                  {article.title}
                </h3>
              </div>

              {/* Description + Arrow */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <p className="max-w-[80%] text-sm leading-snug text-white/95 drop-shadow-sm">
                  {article.description}
                </p>

                <ArrowRight
                  size={18}
                  className="
                    flex-shrink-0
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}