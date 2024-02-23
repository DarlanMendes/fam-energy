import MainButton from "../mainButton";
import SocialIcon from "../socialIcon";
import whatsapp from "../../../public/whatsapp-icon.png"
import facebook from "../../../public/facebook-icon.png"
import instagram from "../../../public/instagram-icon.png"
export default function SecaoBanner() {
    return (
        <div className={`container-gradient flex flex-col `}>
            <section className="flex flex-col h-screen items-center justify-center ">
                <h1 className=" w-full  text-white text-4xl text-center font-semibold  m-0 md:text-5xl xl:">
                    Faça Parte da Nossa 
                </h1>
                <h1 className="w-full text-white text-4xl font-semibold text-center md:text-5xl">
                    Família Solar</h1>
                <p className="  text-white text-base px-12 text-center my-6 md:px-32 lg:w-2/3 ">
                Garantia de Qualidade e Economia em Cada Painel para Você e Sua Futura Geração.
                </p>
                <div className="flex flex-col gap-2 w-full items-center justify-center">
                <MainButton text="Garanta Agora" />
                <div className="flex justify-center">
                    <SocialIcon link={'https://wa.me/5585997509213'} img={whatsapp}/>
                    <SocialIcon link={'https://facebook.com/famenergy'} img={facebook}/>
                    <SocialIcon link={'https://instagram.com/fam_energy_'} img={instagram}/>
                </div>
                </div>
               
            </section>
           
        </div>
    )
}