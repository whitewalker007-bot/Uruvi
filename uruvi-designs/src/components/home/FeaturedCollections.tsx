import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FASHION_IMAGES } from "@/lib/utils";

const COLLECTIONS = [
  {
    title: "New Arrivals",
    desc: "The freshest silhouettes from our latest drop",
    href: "/new-arrivals",
    image: FASHION_IMAGES.collection1,
    tag: "NEW",
  },
  {
    title: "Festive Edit",
    desc: "Designed to make every celebration extraordinary",
    href: "/collections/festive",
    image: FASHION_IMAGES.collection2,
    tag: "FESTIVE",
  },
  {
    title: "Everyday Elegance",
    desc: "Effortless pieces for every day, every mood",
    href: "/collections/everyday",
    image: FASHION_IMAGES.collection3,
    tag: "EVERYDAY",
  },
  {
    title: "Signature Collection",
    desc: "Our most distinctive, most-loved designs",
    href: "/collections/signature",
    image: FASHION_IMAGES.collection4,
    tag: "SIGNATURE",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="section-py bg-[#FAFAF8]">
      <div className="container-uruvi">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Collections</span>
          <h2 className="section-title">Curated For You</h2>
          <p className="section-subtitle">
            Discover thoughtfully selected pieces designed to become part of your signature style.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLLECTIONS.map((col, i) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Image */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 overlay-bottom" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span className="text-[0.5625rem] font-semibold tracking-[0.18em] uppercase text-[#C9A84C] block mb-2">
                  {col.tag}
                </span>
                <h3 className="font-serif text-white text-xl mb-1 leading-tight">
                  {col.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed mb-3 max-w-[22ch]">
                  {col.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white border-b border-white/40 pb-0.5 group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-colors">
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
