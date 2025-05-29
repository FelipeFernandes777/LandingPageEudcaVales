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
      <div className="w-11/12 border-t border-slate-200"></div>
      <PriceTitle>Investimento</PriceTitle>
      {priceCards.map((item, i) => (
        <PriceCard {...item} key={i} />
      ))}
    </PriceContainer>
  );
}
