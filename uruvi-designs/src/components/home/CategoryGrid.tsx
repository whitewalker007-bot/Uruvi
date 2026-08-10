"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FASHION_IMAGES } from "@/lib/utils";

const CATEGORIES = [
  { label: "Dresses", slug: "dresses", image: FASHION_IMAGES.category1 },
  { label: "Kurtas", slug: "kurtas", image: FASHION_IMAGES.category2 },
  { label: "Kurta Sets", slug: "kurta-sets", image: FASHION_IMAGES.collection1 },
  { label: "Sarees", slug: "sarees", image: FASHION_IMAGES.category3 },
  { label: "Co-ord Sets", slug: "co-ord-sets", image: FASHION_IMAGES.collection2 },
  { label: "Tops", slug: "tops", image: FASHION_IMAGES.category4 },
  { label: "Bottom Wear", slug: "bottom-wear", image: FASHION_IMAGES.collection3 },
  { label: "Occasion Wear", slug: "occasion-wear", image: FASHION_IMAGES.product1 },
];

export default function CategoryGrid() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section className="section-py bg-[#F5F3EF]">
      <div className="container-uruvi">
        <div className="section-header">
          <span className="section-label">Browse</span>
          <h2 className="section-title">Shop By Category</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="group relative overflow-hidden block aspect-square bg-[#EDE9E0]"
            >
              {!failedImages[cat.slug] ? (
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={() => setFailedImages((prev) => ({ ...prev, [cat.slug]: true }))}
                />
              ) : (
                <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center p-4 text-center">
                  <span className="font-serif text-white text-lg font-semibold">{cat.label}</span>
                </div>
              )}

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="font-serif text-white text-lg font-semibold leading-tight">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
