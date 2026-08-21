"use client";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";
import { MENS_PRODUCTS } from "@/lib/mensData";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MensSection() {
  return (
    <section className="section-py bg-[#FAFAF8] relative overflow-hidden border-t border-[#E8E4DC]">
      <div className="container-urvi">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-2">
              <Sparkles size={14} /> New Launch
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Urvi Men — Kasavu & Ethnic Combos
            </h2>
            <p className="text-sm text-[#5C5C5C] mt-2 max-w-xl">
              Discover our exclusive men's ethnic edit featuring hand-block printed cotton shirts, Theyyam artwork, and traditional Kerala Kasavu Mundus.
            </p>
          </div>
          <Link
            href="/mens"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C9A84C] transition-colors pb-1 border-b border-[#1A1A1A] hover:border-[#C9A84C] self-start md:self-auto"
          >
            Explore Men's Edit <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Main Hero Spotlight Banner Card */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[420px] bg-[#1A1A1A] group">
            <Image
              src="/images/mens/mens-combo-1.jpg"
              alt="Men's Festive Kasavu Edit"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-1">
                Handcrafted Festive Sets
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2 text-white">
                Kerala Kasavu & Shirt Combos
              </h3>
              <p className="text-xs sm:text-sm text-[#D4D4D4] mb-5 leading-relaxed">
                Classic Kerala Kasavu mundu with woven gold zari paired with vibrant printed shirts.
              </p>
              <Link
                href="/mens"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1A1A1A] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[#C9A84C] hover:text-white transition-all w-fit"
              >
                Shop Men's Collection <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Product Cards Slider/Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {MENS_PRODUCTS.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E8E4DC] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
