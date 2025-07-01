import Link from "next/link";
export default function ConcentimentPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-5 border-t border-gray-200">
            <article className="w-6/12 bg-white text-black p-6 md:p-12 rounded-none md:rounded-2xl shadow-lg h-auto min-h-[545px] overflow-auto max-h-[600px] border-gray-200 border">
                <h2 className="text-3xl font-bold text-green mb-6">Termos de Consentimento</h2>
                <p className="mb-4">
                    Ao preencher este formulário, você concorda com a coleta e o uso dos seus dados pessoais (como nome, telefone e e-mail) exclusivamente para fins de contato, envio de informações e comunicações relacionadas aos nossos serviços.
                </p>
                <p className="mb-4">
                    Comprometemo-nos a tratar seus dados com segurança, respeitando sua privacidade e seguindo as diretrizes da Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018). Seus dados não serão compartilhados com terceiros sem sua autorização.
                </p>
                <p className="mb-4">
                    Você poderá, a qualquer momento, solicitar a atualização, correção ou exclusão dos seus dados entrando em contato conosco.
                </p>
                <p>
                    Ao marcar a opção de consentimento, você declara que leu, compreendeu e concorda com os termos aqui descritos.
                </p>
            </article>
            <button className="w-64 p-2  text-[var(--green-color)] bg-white border border-[var(--green-color)] rounded-xl flex items-center justify-center hover:bg-[var(--light-green-color)]/30 transition-colors ease-in duration-150">
                <Link href={"/"}>
                    Voltar para página principal
                </Link>
            </button>
        </div>
    )
}
