import Link from "next/link";

export default function PoliticaDeCookies() {
  return (
    <article className="w-full bg-white text-black p-6 md:p-12 rounded-none md:rounded-2xl shadow-lg h-auto min-h-[545px]">
      <div className="max-w-5xl mx-auto border border-[var(--light-green-color)] p-4 shadow-lg rounded-2xl h-[400px] flex justify-center flex-col">
        <h2 className="text-3xl font-bold text-green mb-6">
          Política de Cookies
        </h2>
        <p className="mb-4">
          Esta Política de Cookies explica o que são cookies, como os
          utilizamos, os tipos que usamos, ou seja, as informações que coletamos
          usando cookies e como essas informações são usadas.
        </p>
        <p className="mb-4">
          Cookies são pequenos arquivos de texto que são armazenados no seu
          dispositivo quando você visita um site. Eles ajudam o site a lembrar
          informações sobre sua visita, como idioma preferido e outras
          configurações.
        </p>
        <p className="mb-4">
          Utilizamos cookies para melhorar sua experiência de navegação,
          entender como o site está sendo utilizado e oferecer conteúdo
          personalizado.
        </p>
        <p>
          Ao continuar navegando em nosso site, você concorda com o uso de
          cookies, conforme descrito nesta política. Você pode, a qualquer
          momento, alterar as configurações do seu navegador para bloquear ou
          alertar sobre a utilização de cookies.
        </p>
      </div>
      <button className="w-64 p-2  text-[var(--green-color)] bg-white border border-[var(--green-color)] rounded-xl flex items-center justify-center hover:bg-[var(--light-green-color)]/30 transition-colors ease-in duration-150 self-center place-self-center mt-10">
        <Link href={"/"}>
          Voltar para pagina principal
        </Link>
      </button>
    </article>
  );
}
