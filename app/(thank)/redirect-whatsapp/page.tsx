import Image from "next/image";

export default function ThanksPage(){
    return (
        <div className="w-full h-screen gap-10 flex justify-center items-center flex-col">
            <div className="w-6/12 flex justify-center items-center">
                <Image
                    src="/whatsapp_icon.webp"
                    alt={"Imagem do whatsapp"}
                    width={100}
                    height={100}
                />
            </div>
            <p className="font-medium text-5xl">
                Aguarde...
            </p>
            <p className="font-medium text-3xl">
                Em breve um dos nossos consultores entrará em contato no contato informado!
            </p>
        </div>
    )
}