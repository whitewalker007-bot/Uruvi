import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBestSellingProducts } from "@/lib/woocommerce/products";
import ProductCard from "@/components/product/ProductCard";
import type { WooProduct } from "@/lib/woocommerce/types";
import { FASHION_IMAGES } from "@/lib/utils";

const PLACEHOLDER_PRODUCTS = Array.from({ length: 4 }, (_, i) => ({
  id: i + 100,
  name: ["Hand-painted Silk Dupatta Kurta", "Premium Chanderi Saree", "Embroidered Palazzo Set", "Lucknowi Chikankari Kurta"][i],
  slug: `bestseller-${i}`,
  price: ["3499", "5999", "4299", "2999"][i],
  regular_price: ["3499", "5999", "4299", "2999"][i],
  sale_price: "",
  on_sale: false,
  images: [
    { id: i, src: [FASHION_IMAGES.product1, FASHION_IMAGES.product2, FASHION_IMAGES.product3, FASHION_IMAGES.product4][i], name: "", alt: ["Hand-painted Silk Dupatta Kurta", "Premium Chanderi Saree", "Embroidered Palazzo Set", "Lucknowi Chikankari Kurta"][i] },
    { id: i + 10, src: [FASHION_IMAGES.product5, FASHION_IMAGES.product6, FASHION_IMAGES.product7, FASHION_IMAGES.product8][i], name: "", alt: "" }
  ],
  stock_status: "instock",
  rating_count: [24, 18, 31, 15][i],
  average_rating: ["4.8", "4.7", "4.9", "4.6"][i],
  type: "simple",
  categories: [],
  attributes: [],
  variations: [],
  related_ids: [],
  tags: [],
  meta_data: [],
  description: "",
  short_description: "",
} as unknown as WooProduct));

export default async function BestSellers() {
  let products: WooProduct[] = [];
  try {
    products = await getBestSellingProducts(4);
  } catch {}
  const displayProducts = products.length > 0 ? products : PLACEHOLDER_PRODUCTS;

  return (
    <section className="section-py bg-[#F5F3EF]">
      <div className="container-uruvi">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="section-label">Favourites</span>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold text-[#1A1A1A]">
              Most Loved
            </h2>
            <p className="text-sm text-[#9A9A9A] mt-1">Pieces our customers keep coming back for.</p>
          </div>
          <Link href="/shop?sort=popularity" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#C9A84C] transition-colors">
            Shop All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {displayProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
