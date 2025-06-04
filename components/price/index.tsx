import { IPriceCard, PriceCard } from "./price_card";
import { PriceContainer } from "./price_container";
import { PriceTitle } from "./price_title";

export default function Price() {
  const priceCards: IPriceCard[] = [
    {
      img: {
        alt: "Imagem do pix",
        src: "/pix.svg",
      },
      benneficie: [
        {
          benneficies: "Matrícula isenta",
        },
        {
          benneficies: "Programa de indicação",
        },
        {
          benneficies: "Ceritificado em até 48 horas uteis",
        },
        {
          benneficies: "+1 Pós Graduação Bonûs",
        },
        {
          benneficies: "Suporte personalizado",
        },
      ],
      flag: "TOTAL",
      price: "R$ 390,00",
      title: "PIX",
    },
    {
      img: {
        alt: "Imagem de um cartão de credito",
        src: "/cartao.svg",
      },
      benneficie: [
        {
          benneficies: "Matrícula isenta",
        },
        {
          benneficies: "Programa de indicação",
        },
        {
          benneficies: "Ceritificado em até 48 horas uteis",
        },
        {
          benneficies: "+1 Pós Graduação Bonûs",
        },
        {
          benneficies: "Suporte personalizado",
        },
      ],
      flag: "Parcela",
      price: "12x R$ 27,50",
      title: "CARTÃO",
    },
  ];

  return (
    <PriceContainer>
      <div className="w-11/12 border-t border-[var(--green-color)]"></div>
      <PriceTitle>Investimento</PriceTitle>
      <div className="w-full h-auto flex gap-4 p-4 max-sm:flex-col max-sm:p-0 items-center justify-center lg:justify-evenly">
        {priceCards.map((item, i) => (
          <PriceCard {...item} key={i} />
        ))}
      </div>
    </PriceContainer>
  );
}
