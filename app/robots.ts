import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: ["*"],
            allow: "/",
            disallow: "/private"
        },
        host: "faculdadeeducavale",
        sitemap: "https://faculdadeeducavale.com.br/sitemap.xml"
    }
}