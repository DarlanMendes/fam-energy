


interface Props {
    questions: {
        title: string,
        response: string
    }[]
}
function ExpandableList(props: Props) {
    return (
        <section className="flex flex-col p-4" id="Dúvidas">

            {props.questions && props.questions.map((question, index) => (
                <div className="flex flex-col items-start" key={index}>
                    
                        <button className="peer px-4 py-4  w-full text-slate-700 flex justify-between items-center" >
                            {question.title} <span className="text-red-500 font-bold text-2xl">&#8250;</span>
                        </button>

                    

                   
                    <span className="hidden p-4 px-6 transition bg-orange-400 text-white  rounded-lg ease-in-out delay-1000 peer-focus:block">
                        {question?.response}
                    </span>

                </div>


            ))}

        </section>
    )
}


export default function FAQ() {
    const questions = [{ title: "O que são painéis fotovoltaicos e como funcionam?", response: " Os painéis fotovoltaicos são dispositivos que convertem a luz solar em energia elétrica. Compostos por células fotovoltaicas, esses painéis absorvem a luz do sol e a transformam em corrente elétrica contínua. Essa energia pode ser usada imediatamente ou armazenada em baterias para uso posterior." },
    { title: "Quais são os benefícios da instalação de painéis fotovoltaicos?", response: "A instalação de painéis fotovoltaicos oferece uma série de benefícios. Além de reduzir a conta de energia, os painéis solares são uma fonte de energia limpa e sustentável, reduzindo a pegada de carbono. Eles requerem pouca manutenção e podem até gerar créditos de energia em excesso que podem ser vendidos de volta à rede." },
    { title: "Quanto tempo leva para instalar painéis solares em minha residência/empresa?", response: "O tempo de instalação pode variar com base no tamanho do sistema e na complexidade da instalação. Em média, a instalação de painéis solares residenciais pode levar de alguns dias a algumas semanas, dependendo do projeto específico." },
    { title: "Os painéis solares funcionam em dias nublados ou chuvosos?", response: "Sim, os painéis solares funcionam mesmo em condições de luz difusa, como dias nublados ou chuvosos. Embora sua eficiência possa ser reduzida, os painéis fotovoltaicos ainda podem gerar energia, mesmo quando a luz solar direta é limitada." },
    { title: "Qual é a vida útil dos painéis solares?", response: "Os painéis solares são duráveis e tipicamente vêm com garantias de desempenho que variam de 20 a 25 anos. No entanto, muitos sistemas continuam a produzir energia útil por muito mais tempo, com uma degradação mínima no desempenho ao longo dos anos." },
    { title: "Quais são os passos para a instalação de painéis solares em minha propriedade?", response: "O processo geralmente inclui uma avaliação do local, projeto do sistema, obtenção de licenças, instalação dos painéis, inspeções e conexão à rede elétrica. Nossa equipe orientará você em cada etapa, desde a avaliação inicial até a ativação do sistema." }
    ]
    return (
        <div className="bg- w-screen flex flex-col justify-center p-8 ">
            <h1 className="text-xl font-semibold">FAQ</h1>
            <ExpandableList questions={questions} />
        </div>
    )
}