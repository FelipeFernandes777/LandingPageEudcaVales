import fs from "node:fs";
import path from "node:path";

export function readFileImages(pathFile:string) {
    const imagePath = path.join(process.cwd(), pathFile);
    return fs.readdirSync(imagePath)
        .filter(file => /\.(jpe?g|png|svg)$/i.test(file))
        .map(file => `${process.env.BASE_URL || "https://faculdadeeducavale.com.br"}/${pathFile.split("public/")}/${file}`);
}