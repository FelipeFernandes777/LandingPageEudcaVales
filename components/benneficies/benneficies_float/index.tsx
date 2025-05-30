import { BenneficiesFloatContainer } from "./benneficies_float_container";
import {
  BenneficiesFloatCard,
  IBenneficiesFloarCard,
} from "./benneficies_float_card";

export function BenneficiesFloat() {
  const benneficies: IBenneficiesFloarCard[] = [
    {
      img: {
        alt: "Imagem de uma barra de grafico",
        src: "/benneficies/bar-chart.svg",
      },
      text: "Melhor custo beneficio do mercado",
      i: 1,
    },
    {
      img: {
        alt: "Imagem de um certificado",
        src: "/benneficies/certificate.svg",
      },
      text: "Certificado em até 48 horas úteis",
      i: 2,
    },
    {
      img: {
        alt: "Imagem de um globo terrestre",
        src: "/benneficies/world.svg",
      },
      text: "Estude de qualquer lugar",
      i: 3,
    },
  ];

  return (
    <BenneficiesFloatContainer>
      {benneficies.map((element, i) => (
        <BenneficiesFloatCard {...element} key={i} />
      ))}
    </BenneficiesFloatContainer>
  );
}
