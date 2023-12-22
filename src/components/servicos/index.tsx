
interface Servico {
    servico: {
        tittle: string,
        subtittle: string,
        content: string
    }
}

function CardServico({ servico }: Servico) {
    return (
        <aside className="p-4 m-4 shadow-md bg-white rounded-md max-w-xs ">
            <header className="py-4">
                <h1 className=" text-2xl"><strong>{servico.tittle}</strong></h1>
                <span className="text-sm text-gray-500">{servico.subtittle}</span>
            </header>

            <div className="flex flex-col-reverse ">
                <button className=" peer ml-auto mr-0 focus:opacity-0 text-gray-400 focus:h-0">Ler Mais</button>
                <p className="hidden ml-auto mr-0 peer-focus:flex text-gray-400">Ler menos</p>

                <p className="p-2   line-clamp-5 overflow-hidden peer-focus:line-clamp-none peer-focus:h-full text-gray-700">{servico.content}</p>

            </div>


        </aside>
    )
}




export default function Servico() {
    const servicos = [
        {
            tittle: "Instalação de Energia Fotovoltaica: ",
            subtittle: "Transforme sua Energia Solar em Realidade",
            content: "Na seção de Instalação, nossa equipe altamente qualificada e experiente está pronta para levar sua transição para a energia solar a novos patamares. Utilizando tecnologia de ponta, garantimos instalações eficientes e seguras, adaptadas às especificidades de sua propriedade. Cada projeto é tratado com cuidado, desde a avaliação inicial até a execução, garantindo que sua instalação fotovoltaica seja otimizada para fornecer o máximo de energia limpa e renovável."
        },
        {
            tittle: "Homologação:",
            subtittle: " Garantindo Conformidade e Segurança",
            content: "Na etapa de Homologação, nos dedicamos a assegurar que sua instalação de energia fotovoltaica cumpra todas as normativas e regulamentações vigentes. Trabalhamos em estreita colaboração com as autoridades competentes para garantir que seu sistema atenda a todas as exigências legais e padrões de segurança. Deixe-nos cuidar do processo de homologação para que você possa desfrutar dos benefícios de sua fonte de energia sustentável com tranquilidade."
        },
        {
            tittle: "Manutenção: ",
            subtittle: "Maximizando a Eficiência ao Longo do Tempo",
            content: "Nossa equipe de especialistas em Manutenção está comprometida em garantir que seu sistema de energia fotovoltaica opere com eficiência máxima ao longo do tempo. Realizamos inspeções regulares, diagnósticos precisos e manutenção preventiva para identificar e corrigir quaisquer problemas potenciais antes que afetem o desempenho do seu sistema. Conte conosco para manter sua instalação em pleno funcionamento, prolongando sua vida útil e maximizando o retorno sobre seu investimento em energia solar. Ao escolher nossos serviços de instalação de energia fotovoltaica, você está optando por um caminho sustentável e economicamente vantajoso. Estamos comprometidos em fornecer soluções personalizadas, desde a concepção até a manutenção, para que você possa desfrutar dos benefícios da energia solar de maneira contínua e sem preocupações. Faça a transição para um futuro mais sustentável conosco."
        },

    ]
    return (
        <main className="bg-orange-200 w-full flex justify-center overflow-x-hidden" id="Serviços">
            <div className="max-w-[1000px]">
                <header className="p-6 lg:pl-12">
                    <h1 className="text-3xl"><strong>Nossos serviços</strong> </h1>
                    <span className="text-gray-700"> Serviços sob medida</span>
                </header>
                <section className="flex justify-center flex-col lg:flex-row ">
                    {servicos.map((servico, index) => (
                        <CardServico servico={servico} key={index}/>
                    ))}

                </section>

            </div>

        </main>
    )
}