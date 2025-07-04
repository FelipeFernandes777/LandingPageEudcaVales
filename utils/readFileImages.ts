import fs from "node:fs";
import path from "node:path";

export function readFileImages(pathFile:string) {
    const imagePath = path.join(process.cwd(), pathFile);
    return fs.readdirSync(imagePath)
        .filter(file => /\.(jpe?g|png|svg|webp)$/i.test(file))
        // .map(file => `${process.env.BASE_URL || "https://faculdadeeducavale.com.br"}/${pathFile.split("public/")}/${file}`);
        .map(file => {
            const relativePath = path.relative("public", pathFile);
            const cleanPath = path.posix.join("/", relativePath, file);
            return `${process.env.BASE_URL || "https://faculdadeeducavale.com.br"}${cleanPath}`;
        });
}
