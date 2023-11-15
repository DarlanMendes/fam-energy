import Image, { StaticImageData } from "next/image"

interface Whatsapp {
    whatsapp: StaticImageData
    showWhatsapp: boolean
}
export default function Whatsapp({ whatsapp, showWhatsapp }: Whatsapp) {


    return (
        <div className="fixed z-2 top-[86vh] right-[10vw] animate-bounce" style={showWhatsapp ? { display: "block" } : { display: "none" }}>
            <a href="https://wa.me/5585997509213">
            <Image src={whatsapp} alt="" width={68} height={68} />
            </a>
           
        </div>

    )
}