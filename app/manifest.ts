import type { MetadataRoute } from 'next';

export default function manifest ():MetadataRoute.Manifest {
    return {
        name: "LandingPage Educavale",
        short_name: "LP Educavale",
        start_url: "/",
        description: "Landing page educacional para venda de cursos de pós-graduação.",
        background_color: "#FFFFFF",
        theme_color: "#1a73e8",
        display: "standalone",
        icons: [
            {
                src: "/favicon16.png",
                sizes: "16x16",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/favicon32.png",
                sizes: "32x32",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/logo.png",
                sizes: "50x50",
                type: "image/png",
                purpose: "maskable"
            }
        ]
    }
}