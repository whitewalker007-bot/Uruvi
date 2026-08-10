import Link from "next/link";
import Image from "next/image";
import { FASHION_IMAGES } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1A1A1A]" style={{ minHeight: "90vh" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={FASHION_IMAGES.hero1}
          alt="Uruvi Designs — Everyday Elegance"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-uruvi h-full flex items-center" style={{ minHeight: "90vh" }}>
        <div className="max-w-xl py-20">
          {/* Label */}
          <p className="text-[0.625rem] font-semibold tracking-[0.22em] uppercase text-[#C9A84C] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            New Collection 2026
          </p>

          {/* Headline */}
          <h1 className="font-serif text-white mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            <span className="block overflow-hidden">
              <span className="block animate-fade-up opacity-0" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
                Everyday
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-fade-up opacity-0 italic text-[#E8CC7A]" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                Elegance,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-fade-up opacity-0" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
                Reimagined
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-[1rem] leading-relaxed mb-10 max-w-[38ch] animate-fade-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            Contemporary silhouettes rooted in the timeless spirit of Indian style.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.95s", animationFillMode: "forwards" }}>
            <Link href="/new-arrivals" className="btn btn-white">
              Shop New Arrivals
            </Link>
            <Link href="/collections" className="btn btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}>
              Explore Collections
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-[0.5625rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
