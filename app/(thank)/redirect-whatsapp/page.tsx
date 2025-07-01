"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function ThanksPage() {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const number = "553192994899";
            const message =
                "Olá vim através da Landing Page do Google e gostaria de mais informações";

            const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
                message
            )}`;

            window.location.href = url;
        }, 6000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="w-full h-screen gap-10 flex justify-center items-center flex-col">
            <div className="w-6/12 flex justify-center items-center">
                <Image
                    src="/whatsapp_icon.webp"
                    alt="Imagem do whatsapp"
                    width={100}
                    height={100}
                />
            </div>
            <p className="font-medium text-5xl">
                Aguarde...
            </p>
            <p className="font-medium text-3xl text-center px-4">
                Em breve um dos nossos consultores entrará em contato no número informado!
            </p>
        </div>
    );
}
