import {MetadataRoute} from "next";
import {readFileImages} from "@/utils/readFileImages";

export default function sitemap():MetadataRoute.Sitemap {

    const imagesBase = readFileImages("public")
    const imagesForm = readFileImages ("public/form")
    const imagesCourses = readFileImages ("public/courses")
    const imagesBenefices = readFileImages ("public/benefices")
    const imagesBanner = readFileImages("public/banner")

    return [
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://faculdadeeducavale.com.br/politica-privacidade",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://faculdadeeducavale.com.br/politica-cookie",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 1
        },
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 0.8,
            images: imagesBase
        },
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 0.8,
            images: imagesForm
        },
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 0.8,
            images: imagesCourses
        },
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 0.8,
            images: imagesBenefices
        },
        {
            url: "https://faculdadeeducavale.com.br",
            changeFrequency: "weekly",
            lastModified: new Date(),
            priority: 0.8,
            images: imagesBanner
        },
    ]
}