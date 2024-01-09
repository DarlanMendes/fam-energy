import Image, { StaticImageData } from "next/image"
import fotoRoberto from "../../../public/Roberto Nunes.jpeg"
import fotoBeth from "../../../public/Beth Pinheiro.jpeg"
import fotoCarlos from "../../../public/Carlos Augusto.jpg"
import fotoRyvana from "../../../public/ryvana loiola.jpg"
import fotoPedro from "../../../public/Pedro Anibal.jpg"
import fotoElisabete from "./../../../public/Elisabete Costa.jpg"
interface Colaborador {
    colaborador: {
        id: number,
        nome: string,
        descricao: string,
        avatar: StaticImageData,
        telefone?:string
    }
}
function Card({ colaborador }: Colaborador) {
    
    return (
        <article className="shadow p-4 flex w-[80vw] rounded-sm items-stretch gap-4 bg-white
         md:flex-col md:max-w-[300px] flex-wrap md:pt-0 md:px-0 ">

            <Image
                src={colaborador.avatar}
                alt={`foto de perfil do(a) colaborador(a) ${colaborador.nome}`}

                className=" rounded-full h-24 w-24 object-cover md:rounded-none md:w-full md:h-72"
            />
            <div className="px-4 md:flex flex-col gap-2">
                <h3 className="font-bold md:text-xl"> {colaborador.nome}</h3>
                <p className="text-slate-500 md:text-lg">{colaborador.descricao}</p>
                {colaborador.telefone&&
                <a href={`https://wa.me/55${colaborador.telefone.replace(/[-()]/g,"")}`}>Whatsapp: <br/>{colaborador.telefone}</a>}
            </div>

        </article>

    )
}


export default function Colaboradores() {
    const colaboradores = [
        { id: 1, nome: "Roberto Nunes", descricao: "Função: Vendedor",  avatar: fotoRoberto , telefone:'(85)98872-0094'},
        { id: 2, nome: "Beth Pinheiro", descricao: "Função: Vendedora",  avatar: fotoBeth , telefone:'(85)98156-8769'},
        { id: 3, nome: "Carlos Augusto", descricao: "Função: Diretor Técnico",  avatar: fotoCarlos , telefone:'(85)99854-4599'},
        { id: 4, nome: "Ryvana Loiola", descricao: "Função: Jurídico Administrativo",  avatar: fotoRyvana , telefone:'(85)99697-9680'},
        { id: 5, nome: "Pedro Anibal", descricao: "Função: Diretor Comercial",  avatar: fotoPedro, telefone:'(85)99750-9213'},
        { id: 6, nome: "Elisabete Costa", descricao: "Função: Engenheira",  avatar: fotoElisabete},


    ]
    return (
        <section className="w-screen flex flex-col items-center bg-slate-100 pb-8">
            <h2 className="w-[90vw] my-8 text-xl font-semibold max-w-2xl lg:max-w-4xl">Nossos Colaboradores</h2>
            <div className="flex flex-col items-center gap-4 md:flex-row w-[90vw] lg:max-w-[1100px] flex-wrap md:justify-center md:items-start">
            {colaboradores.map((colaborador) => (
                <Card colaborador={colaborador} key={colaborador.id} />
            ))}
            </div>
            


        </section>
    )
}