import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FASHION_IMAGES } from "@/lib/utils";

const ALL_COLLECTIONS = [
  {
    title: "New Collection 2026",
    slug: "new",
    desc: "The newest silhouettes and freshest color palettes of the season.",
    image: FASHION_IMAGES.collection1,
    count: 18,
  },
  {
    title: "Festive Edit",
    slug: "festive",
    desc: "Opulent fabrics, subtle metallic embroideries, and celebratory grace.",
    image: FASHION_IMAGES.collection2,
    count: 24,
  },
  {
    title: "Everyday Edit",
    slug: "everyday",
    desc: "Soft breathable handloom cottons and relaxed tailoring for daily luxury.",
    image: FASHION_IMAGES.collection3,
    count: 32,
  },
  {
    title: "Occasion Wear",
    slug: "occasion",
    desc: "Statement pieces crafted for weddings, receptions, and memorable evenings.",
    image: FASHION_IMAGES.collection4,
    count: 15,
  },
  {
    title: "Signature Collection",
    slug: "signature",
    desc: "Our iconic, timeless designs that define the Urvi visual identity.",
    image: FASHION_IMAGES.editorial,
    count: 12,
  },
];

export default function CollectionsPage() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen py-12">
      <div className="container-urvi">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#9A9A9A] mb-6">
          <Link href="/" className="hover:text-[#1A1A1A]">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-medium">Collections</span>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Curated Edits</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-4">
            Collections
          </h1>
          <p className="text-sm text-[#5C5C5C] leading-relaxed">
            Discover thoughtfully curated edits designed around moments, celebrations, and daily elegance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_COLLECTIONS.map((col) => (
            <Link
              key={col.slug}
              href={`/collections/${col.slug}`}
              className="group block bg-[#F5F3EF] overflow-hidden border border-[#E8E4DC] hover:border-[#C9A84C] transition-colors"
            >
              <div className="relative aspect-collection overflow-hidden">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 right-4 bg-[#1A1A1A]/80 text-white text-[10px] uppercase font-semibold px-2.5 py-1">
                  {col.count} Styles
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] group-hover:text-[#C9A84C] transition-colors mb-2">
                  {col.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-4">
                  {col.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#C9A84C]">
                  Explore Edit <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
