
import Image, { StaticImageData } from "next/image";
interface SocialIconProps {
    link: string;
    img: StaticImageData;
}
export default function SocialIcon({ link, img }: SocialIconProps) {
    return (
        <a href={`${link}`}>
            <Image src={img} alt="" width={68} height={68} />
        </a>
    )

}