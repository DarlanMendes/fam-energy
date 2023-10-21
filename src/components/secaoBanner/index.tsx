import MainButton from "../mainButton";
import SocialIcon from "../socialIcon";
import whatsapp from "../../../public/whatsapp-icon.png"
import facebook from "../../../public/facebook-icon.png"
import instagram from "../../../public/instagram-icon.png"
export default function SecaoBanner() {
    return (
        <div className={`container-gradient mt-32 `}>
            <section className="flex flex-col justify-center h-screen items-start ml-16 xl:ml-32 ">
                <h1 className=" w-full md:text-6xl md:w-2/3 text  m-0 sm:text-5xl sm:w-full sm:mr-2 text-4xl">
                    Faça Parte da Nossa Família Solar
                </h1>
                <p className="lg:text-xl md:text-base text w-1/2 text-base">
                Garantia de Qualidade e Economia em Cada Painel para Você e Sua Futura Geração.
                </p>
                <div className="flex flex-col gap-2 justify-center">
                <MainButton text="Garanta Agora" />
                <div>
                    <SocialIcon link={'https://wa.me/5585986013045'} img={whatsapp}/>
                    <SocialIcon link={'https://facebook.com/famenergy'} img={facebook}/>
                    <SocialIcon link={'https://instagram.com/famenergy'} img={instagram}/>
                </div>
                </div>
               
            </section>
           
        </div>
    )
}