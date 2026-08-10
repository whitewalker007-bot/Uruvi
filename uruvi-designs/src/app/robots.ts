import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXTAUTH_URL || "https://uruvi.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/account/*", "/api/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
