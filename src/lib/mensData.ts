import type { WooProduct } from "@/lib/woocommerce/types";

export const MENS_PRODUCTS: WooProduct[] = [
  {
    id: 1001,
    name: "Maroon Floral Block Print Shirt & Kasavu Mundu Combo Set",
    slug: "maroon-floral-kasavu-mundu-shirt-combo",
    permalink: "/products/maroon-floral-kasavu-mundu-shirt-combo",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: `
      <p>Step into traditional luxury with our <strong>Maroon Floral Block Print Shirt & Kasavu Mundu Combo Set</strong>.</p>
      <p>This premium ensemble features a hand-block printed maroon cotton shirt with vibrant yellow and green floral motifs, paired with an authentic Kerala Kasavu Mundu adorned with a handwoven matching floral border and fine gold zari woven edging.</p>
      <ul>
        <li><strong>Shirt Fabric:</strong> 100% Breathable Premium Cotton</li>
        <li><strong>Mundu Fabric:</strong> Handloom Kasavu Cotton with Golden Zari & Printed Border</li>
        <li><strong>Collar Type:</strong> Classic Shirt Collar</li>
        <li><strong>Sleeve Type:</strong> Full Sleeves / Rolled Sleeve style</li>
        <li><strong>Occasion:</strong> Onam, Vishu, Weddings, Temple Visits & Festive Gatherings</li>
        <li><strong>Care Instructions:</strong> Gentle Hand Wash / Dry Clean Recommended</li>
      </ul>
    `,
    short_description: "Hand-block printed maroon floral cotton shirt paired with a matching floral border Kerala Kasavu Mundu with fine gold zari.",
    sku: "URV-MEN-001",
    price: "2499",
    regular_price: "2999",
    sale_price: "2499",
    on_sale: true,
    purchasable: true,
    total_sales: 38,
    virtual: false,
    downloadable: false,
    manage_stock: true,
    stock_quantity: 25,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    weight: "0.7",
    categories: [
      { id: 10, name: "Men's Collection", slug: "mens" },
      { id: 11, name: "Kasavu Combo Sets", slug: "kasavu-combos" }
    ],
    tags: [
      { id: 101, name: "Onam", slug: "onam" },
      { id: 102, name: "Kasavu", slug: "kasavu" },
      { id: 103, name: "Festive", slug: "festive" }
    ],
    images: [
      { id: 10011, src: "/images/mens/mens-combo-1.jpg", name: "Maroon Floral Set", alt: "Maroon Floral Block Print Shirt & Kasavu Mundu Combo Set" },
      { id: 10012, src: "/images/mens/mens-combo-5.jpg", name: "Leaf Print Set", alt: "Maroon Ethnic Wear View" }
    ],
    attributes: [
      { id: 1, name: "Size", position: 0, visible: true, variation: true, options: ["S", "M", "L", "XL", "XXL", "3XL"] },
      { id: 2, name: "Set Contains", position: 1, visible: true, variation: false, options: ["1 Shirt + 1 Kasavu Mundu (Double Dhotis)"] }
    ],
    variations: [],
    average_rating: "4.9",
    rating_count: 18,
    related_ids: [1002, 1003, 1004, 1005],
    meta_data: []
  },
  {
    id: 1002,
    name: "Scarlet Lotus Line-Art Shirt & Matchingkasavu Mundu Set",
    slug: "scarlet-lotus-kasavu-mundu-shirt-set",
    permalink: "/products/scarlet-lotus-kasavu-mundu-shirt-set",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: `
      <p>Elevate your festive look with the exquisite <strong>Scarlet Lotus Line-Art Shirt & Kasavu Mundu Set</strong>.</p>
      <p>Crafted for elegance, this set showcases a bold scarlet red shirt printed with delicate lotus line-art motifs, accompanied by a traditional Kerala Kasavu tissue mundu finished with a rich red floral border and golden zari.</p>
      <ul>
        <li><strong>Shirt Fabric:</strong> Soft Premium Cotton Linen Blend</li>
        <li><strong>Mundu Fabric:</strong> Authentic Kerala Kasavu Tissue Cotton with Red Woven Border</li>
        <li><strong>Collar:</strong> Contemporary Mandarin / Shirt Collar</li>
        <li><strong>Occasion:</strong> Weddings, Engagements, Onam & Festive Celebrations</li>
        <li><strong>Care Instructions:</strong> Dry Clean Only</li>
      </ul>
    `,
    short_description: "Bold scarlet red shirt with lotus line-art pattern & matching red floral border Kerala Kasavu Mundu with gold zari.",
    sku: "URV-MEN-002",
    price: "2699",
    regular_price: "3199",
    sale_price: "2699",
    on_sale: true,
    purchasable: true,
    total_sales: 45,
    virtual: false,
    downloadable: false,
    manage_stock: true,
    stock_quantity: 20,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    weight: "0.7",
    categories: [
      { id: 10, name: "Men's Collection", slug: "mens" },
      { id: 11, name: "Kasavu Combo Sets", slug: "kasavu-combos" }
    ],
    tags: [
      { id: 101, name: "Wedding", slug: "wedding" },
      { id: 102, name: "Lotus Art", slug: "lotus-art" }
    ],
    images: [
      { id: 10021, src: "/images/mens/mens-combo-2.jpg", name: "Scarlet Lotus Set", alt: "Scarlet Lotus Line-Art Shirt & Kasavu Mundu Set" },
      { id: 10022, src: "/images/mens/mens-combo-1.jpg", name: "Floral Combo View", alt: "Kasavu Mundu View" }
    ],
    attributes: [
      { id: 1, name: "Size", position: 0, visible: true, variation: true, options: ["S", "M", "L", "XL", "XXL", "3XL"] },
      { id: 2, name: "Set Contains", position: 1, visible: true, variation: false, options: ["1 Shirt + 1 Kasavu Mundu"] }
    ],
    variations: [],
    average_rating: "5.0",
    rating_count: 22,
    related_ids: [1001, 1003, 1004, 1005],
    meta_data: []
  },
  {
    id: 1003,
    name: "Tiger Stripe Accent White Linen Shirt & Kasavu Mundu Set",
    slug: "tiger-print-linen-shirt-kasavu-mundu-set",
    permalink: "/products/tiger-print-linen-shirt-kasavu-mundu-set",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: `
      <p>Unleash modern royal heritage with the <strong>Tiger Stripe Accent White Linen Shirt & Kasavu Mundu Set</strong>.</p>
      <p>Featuring a crisp ivory-white linen shirt accentuated with a handcrafted tiger-print chest panel and collar, matched flawlessly to a gold zari Kasavu Mundu carrying a woven tiger-motif border accent.</p>
      <ul>
        <li><strong>Shirt Fabric:</strong> Pure Linen Blend (Cool & Lightweight)</li>
        <li><strong>Mundu Fabric:</strong> Fine Kasavu Cotton with Gold Zari & Tiger Motif Border</li>
        <li><strong>Buttons:</strong> Custom Black Contrast Buttons</li>
        <li><strong>Occasion:</strong> Grand Celebrations, Royal Weddings & Cultural Festivities</li>
        <li><strong>Care Instructions:</strong> Dry Clean Recommended</li>
      </ul>
    `,
    short_description: "Pristine white linen shirt with tiger-stripe print collar & chest panel, paired with a matching tiger-motif Kasavu Mundu.",
    sku: "URV-MEN-003",
    price: "2899",
    regular_price: "3499",
    sale_price: "2899",
    on_sale: true,
    purchasable: true,
    total_sales: 29,
    virtual: false,
    downloadable: false,
    manage_stock: true,
    stock_quantity: 18,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    weight: "0.75",
    categories: [
      { id: 10, name: "Men's Collection", slug: "mens" },
      { id: 12, name: "Designer Linen Edit", slug: "designer-linen" }
    ],
    tags: [
      { id: 104, name: "Linen", slug: "linen" },
      { id: 105, name: "Tiger Print", slug: "tiger-print" }
    ],
    images: [
      { id: 10031, src: "/images/mens/mens-combo-3.jpg", name: "Tiger Accent Set", alt: "Tiger Stripe Accent White Linen Shirt & Kasavu Mundu Set" }
    ],
    attributes: [
      { id: 1, name: "Size", position: 0, visible: true, variation: true, options: ["S", "M", "L", "XL", "XXL", "3XL"] },
      { id: 2, name: "Set Contains", position: 1, visible: true, variation: false, options: ["1 Designer Linen Shirt + 1 Kasavu Mundu"] }
    ],
    variations: [],
    average_rating: "4.8",
    rating_count: 14,
    related_ids: [1001, 1002, 1004, 1005],
    meta_data: []
  },
  {
    id: 1004,
    name: "Midnight Black Theyyam Art Kurta & Graphic Mundu Set",
    slug: "black-theyyam-art-kurta-graphic-mundu-set",
    permalink: "/products/black-theyyam-art-kurta-graphic-mundu-set",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: `
      <p>A masterpiece of Kerala heritage art: the <strong>Midnight Black Theyyam Art Kurta & Graphic Mundu Set</strong>.</p>
      <p>This striking black short kurta features vibrant traditional Theyyam / Kathakali artwork printed on the chest, paired with a matching midnight black cotton mundu detailing terracotta orange geometric border stripes.</p>
      <ul>
        <li><strong>Kurta Fabric:</strong> 100% Fine Handloom Cotton</li>
        <li><strong>Mundu Fabric:</strong> Soft Cotton Mundu with Terracotta Orange Striped Border</li>
        <li><strong>Collar:</strong> Mandarin Collar with Placket Buttons</li>
        <li><strong>Artwork:</strong> Hand-rendered Traditional Theyyam Folk Art Print</li>
        <li><strong>Occasion:</strong> Temple Festivals, Cultural Events, Ethnic Evenings & Parties</li>
        <li><strong>Care Instructions:</strong> Hand Wash Separately in Cold Water</li>
      </ul>
    `,
    short_description: "Midnight black cotton short kurta featuring vibrant Theyyam traditional artwork, paired with an orange graphic border black mundu.",
    sku: "URV-MEN-004",
    price: "3199",
    regular_price: "3799",
    sale_price: "3199",
    on_sale: true,
    purchasable: true,
    total_sales: 52,
    virtual: false,
    downloadable: false,
    manage_stock: true,
    stock_quantity: 15,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    weight: "0.8",
    categories: [
      { id: 10, name: "Men's Collection", slug: "mens" },
      { id: 13, name: "Heritage Art Series", slug: "heritage-art" }
    ],
    tags: [
      { id: 106, name: "Theyyam", slug: "theyyam" },
      { id: 107, name: "Black Kurta", slug: "black-kurta" }
    ],
    images: [
      { id: 10041, src: "/images/mens/mens-combo-4.jpg", name: "Theyyam Art Set", alt: "Midnight Black Theyyam Art Kurta & Graphic Mundu Set" }
    ],
    attributes: [
      { id: 1, name: "Size", position: 0, visible: true, variation: true, options: ["S", "M", "L", "XL", "XXL", "3XL"] },
      { id: 2, name: "Set Contains", position: 1, visible: true, variation: false, options: ["1 Art Short Kurta + 1 Graphic Border Mundu"] }
    ],
    variations: [],
    average_rating: "4.9",
    rating_count: 31,
    related_ids: [1001, 1002, 1003, 1005],
    meta_data: []
  },
  {
    id: 1005,
    name: "Maroon Leaf Print Shirt & Classic Gold Kasavu Mundu Set",
    slug: "maroon-leaf-print-shirt-gold-kasavu-set",
    permalink: "/products/maroon-leaf-print-shirt-gold-kasavu-set",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: `
      <p>Experience timeless charm with the <strong>Maroon Leaf Print Shirt & Classic Gold Kasavu Mundu Set</strong>.</p>
      <p>Crafted with a deep maroon shirt ornamented with subtle black leaf block prints, paired with a pristine ivory Kerala Kasavu Mundu featuring a broad, lustrous golden zari border.</p>
      <ul>
        <li><strong>Shirt Fabric:</strong> Pure Soft Cotton</li>
        <li><strong>Mundu Fabric:</strong> Traditional Kerala Fine Kasavu Cotton Dhotis with Gold Zari</li>
        <li><strong>Collar:</strong> Formal Shirt Collar</li>
        <li><strong>Occasion:</strong> Festive Occasions, Pooja Ceremonies & Family Functions</li>
        <li><strong>Care Instructions:</strong> Machine Wash Cold / Gentle Cycle</li>
      </ul>
    `,
    short_description: "Deep maroon shirt with black leaf block print, accompanied by a traditional ivory Kerala Kasavu Mundu with broad gold zari.",
    sku: "URV-MEN-005",
    price: "2399",
    regular_price: "2799",
    sale_price: "2399",
    on_sale: true,
    purchasable: true,
    total_sales: 34,
    virtual: false,
    downloadable: false,
    manage_stock: true,
    stock_quantity: 30,
    stock_status: "instock",
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    weight: "0.7",
    categories: [
      { id: 10, name: "Men's Collection", slug: "mens" },
      { id: 11, name: "Kasavu Combo Sets", slug: "kasavu-combos" }
    ],
    tags: [
      { id: 101, name: "Festive", slug: "festive" },
      { id: 108, name: "Block Print", slug: "block-print" }
    ],
    images: [
      { id: 10051, src: "/images/mens/mens-combo-5.jpg", name: "Maroon Leaf Set", alt: "Maroon Leaf Print Shirt & Classic Gold Kasavu Mundu Set" },
      { id: 10052, src: "/images/mens/mens-combo-1.jpg", name: "Floral Combo View", alt: "Kasavu Mundu View" }
    ],
    attributes: [
      { id: 1, name: "Size", position: 0, visible: true, variation: true, options: ["S", "M", "L", "XL", "XXL", "3XL"] },
      { id: 2, name: "Set Contains", position: 1, visible: true, variation: false, options: ["1 Block Print Shirt + 1 Gold Kasavu Mundu"] }
    ],
    variations: [],
    average_rating: "4.8",
    rating_count: 19,
    related_ids: [1001, 1002, 1003, 1004],
    meta_data: []
  }
];
