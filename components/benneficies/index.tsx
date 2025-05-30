import { BenneficiesCard } from "./benneficies_card";
import { BenneficiesContainer } from "./benneficies_container";
import { BenneficiesTitle } from "./benneficies_title";
import { BenneficiesFloat } from "./benneficies_float";

export default function Benneficies() {
  const beneficios: BenneficiesCard[] = [
    {
      img: {
        alt: "Imagem de um porquinho de poupança",
        src: "/benneficies/economia.jpg",
      },
      description:
        "Pós-graduação que cabe no seu bolso: invista em sua carreira com mensalidades acessíveis, sem taxas escondidas e com o melhor custo-benefício do mercado!",
      title: "Economia",
    },
    {
      img: {
        alt: "Imagem de um certificado ",
        src: "/benneficies/certificado.jpg",
      },
      description:
        "Certificado digital pronto em até 48 horas úteis: rápido, seguro e reconhecido para valorizar o seu currículo sem demora!",
      title: "Certificado",
    },
    {
      img: {
        alt: "Imagem de uma pessoa estudando na frente de um computador",
        src: "/benneficies/estudo.jpg",
      },
      description:
        "Estude onde e quando quiser: nossa pós-graduação é 100% EAD, com total flexibilidade para você aprender no seu ritmo, sem abrir mão da qualidade!",
      title: "Flexibilidade",
    },
  ];

  return (
    <BenneficiesContainer>
      <BenneficiesFloat />
      <div className="w-11/12 flex  flex-col gap-4 items-center justify-center min-sm:hidden">
        <BenneficiesTitle title="Vantagens de estudar na EducaVales" />
        {beneficios.map((element, i) => (
          <BenneficiesCard key={i} {...element} />
        ))}
      </div>
    </BenneficiesContainer>
  );
}
