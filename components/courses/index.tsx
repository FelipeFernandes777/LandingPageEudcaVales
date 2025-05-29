import { CoursesCard, ICourseCard } from "./courses_card";
import { CoursesCardSection } from "./courses_card_section";
import { CoursesContainer } from "./courses_container";
import { CoursesTitle } from "./courses_title";

export default function Courses() {
  const listCourses: ICourseCard[] = [
    {
      title: "Direito",
      description:
        "Forma profissionais para atuar na aplicação e interpretação das leis, com foco em áreas como Direito Civil, Penal e Constitucional, preparando para carreiras jurídicas e do setor público.",
      img: {
        alt: "Imagem de uma estatua segurando uma balança",
        src: "/courses/direito.jpg",
      },
    },
    {
      title: "Jurídica",
      description:
        "Capacita profissionais para atuar na promoção, prevenção e cuidado com a saúde, com foco no bem-estar físico, mental e social da população.",
      img: {
        alt: "Imagem de um medidor de batidas do coração",
        src: "/courses/saudeE.jpg",
      },
    },
    {
      title: "Educação",
      description:
        "Forma profissionais para atuar no ensino e na formação de indivíduos, com foco no desenvolvimento pedagógico, inclusão e melhoria da aprendizagem.",
      img: {
        alt: "Imagem de uma sala de aula com pessoas assistindo a aula",
        src: "/courses/educacao.jpg",
      },
    },
    {
      title: "MBA",
      description:
        "Voltado para profissionais que buscam aprimorar habilidades em gestão, liderança e estratégia, preparando para cargos de liderança no mercado corporativo.",
      img: {
        alt: "Imagem de um homem de terno de braços cruzados",
        src: "/courses/ceo.jpg",
      },
    },
    {
      title: "Serviço Social",
      description:
        "Forma profissionais para atuar na garantia de direitos e no enfrentamento das desigualdades sociais, promovendo o bem-estar e a inclusão social.",
      img: {
        alt: "Imagem de 2 mãos se apertando",
        src: "/courses/servico-social.jpg",
      },
    },
    {
      title: "Tecnologia",
      description:
        "Prepara profissionais para desenvolver soluções inovadoras em computação, dados e sistemas, com foco em inovação, automação e transformação digital.",
      img: {
        alt: "Imagem de um computador com codigo",
        src: "/courses/tecnologia.jpg",
      },
    },
    {
      title: "Comunicação",
      description:
        "Forma profissionais para atuar na mediação de informações, com foco em estratégias de linguagem, mídia, marketing e relacionamento com o público.",
      img: {
        alt: "Imagem de uma pessoa palestrando",
        src: "/courses/comunicacao.jpg",
      },
    },
  ];

  return (
    <CoursesContainer>
      <CoursesTitle title="Áreas mais procuradas" />
      <CoursesCardSection>
        {listCourses.map((courses, i) => (
          <CoursesCard key={i} {...courses} />
        ))}
      </CoursesCardSection>
    </CoursesContainer>
  );
}
