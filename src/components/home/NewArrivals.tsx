import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNewArrivals } from "@/lib/woocommerce/products";
import ProductCard from "@/components/product/ProductCard";
import { FASHION_IMAGES } from "@/lib/utils";
import type { WooProduct } from "@/lib/woocommerce/types";

// Fallback placeholder products with explicit verified fashion image URLs
const PLACEHOLDER_PRODUCTS: WooProduct[] = [
  {
    id: 1,
    name: "Festive Anarkali Kurta",
    slug: "festive-anarkali-kurta",
    price: "2499",
    regular_price: "3199",
    sale_price: "2499",
    on_sale: true,
    images: [
      { id: 1, src: FASHION_IMAGES.product1, name: "", alt: "Festive Anarkali Kurta" },
      { id: 2, src: FASHION_IMAGES.product5, name: "", alt: "" }
    ],
    stock_status: "instock",
    rating_count: 12,
    average_rating: "4.8",
    type: "simple",
    categories: [],
    attributes: [],
    variations: [],
    related_ids: [],
    tags: [],
    meta_data: [],
    description: "",
    short_description: "",
  },
  {
    id: 2,
    name: "Handwoven Cotton Saree",
    slug: "handwoven-cotton-saree",
    price: "3999",
    regular_price: "4999",
    sale_price: "3999",
    on_sale: true,
    images: [
      { id: 3, src: FASHION_IMAGES.product2, name: "", alt: "Handwoven Cotton Saree" },
      { id: 4, src: FASHION_IMAGES.product6, name: "", alt: "" }
    ],
    stock_status: "instock",
    rating_count: 18,
    average_rating: "4.9",
    type: "simple",
    categories: [],
    attributes: [],
    variations: [],
    related_ids: [],
    tags: [],
    meta_data: [],
    description: "",
    short_description: "",
  },
  {
    id: 3,
    name: "Floral Printed Co-ord Set",
    slug: "floral-printed-co-ord-set",
    price: "3299",
    regular_price: "3999",
    sale_price: "3299",
    on_sale: true,
    images: [
      { id: 5, src: FASHION_IMAGES.product3, name: "", alt: "Floral Printed Co-ord Set" },
      { id: 6, src: FASHION_IMAGES.product7, name: "", alt: "" }
    ],
    stock_status: "instock",
    rating_count: 24,
    average_rating: "4.7",
    type: "simple",
    categories: [],
    attributes: [],
    variations: [],
    related_ids: [],
    tags: [],
    meta_data: [],
    description: "",
    short_description: "",
  },
  {
    id: 4,
    name: "Embroidered Kurta Set",
    slug: "embroidered-kurta-set",
    price: "4499",
    regular_price: "5499",
    sale_price: "4499",
    on_sale: true,
    images: [
      { id: 7, src: FASHION_IMAGES.product4, name: "", alt: "Embroidered Kurta Set" },
      { id: 8, src: FASHION_IMAGES.product8, name: "", alt: "" }
    ],
    stock_status: "instock",
    rating_count: 15,
    average_rating: "4.9",
    type: "simple",
    categories: [],
    attributes: [],
    variations: [],
    related_ids: [],
    tags: [],
    meta_data: [],
    description: "",
    short_description: "",
  },
] as unknown as WooProduct[];

interface NewArrivalsProps {
  products?: WooProduct[];
}

export default async function NewArrivals({ products }: NewArrivalsProps) {
  let items = products;
  if (!items) {
    try {
      items = await getNewArrivals(8);
    } catch {
      items = [];
    }
  }
  const displayProducts = items.length > 0 ? items : PLACEHOLDER_PRODUCTS;

  return (
    <section className="section-py bg-[#FAFAF8]">
      <div className="container-urvi">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="section-label">Just Arrived</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-[#1A1A1A]">
              New Arrivals
            </h2>
            <p className="text-sm text-[#9A9A9A] mt-1">Fresh silhouettes, refined details.</p>
          </div>
          <Link href="/new-arrivals" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#C9A84C] transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {displayProducts.slice(0, 8).map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 4} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-10 text-center sm:hidden">
          <Link href="/new-arrivals" className="btn btn-outline">
            View All New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
}
