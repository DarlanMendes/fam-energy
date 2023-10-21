import { useRouter } from "next/router"
interface action{
    action:()=>void | string;
}
interface mainButtonProps {
    text: string;
    onClickHandler?:()=>void
    link?: string;
    externalLink?:boolean;
}
export default function MainButton({ text, onClickHandler, link, externalLink }: mainButtonProps) {
    const router = useRouter()

    const handleClick=()=>{
        if(link){
           if(externalLink){
            window.location.href=`${link}`
           }else{
            router.push(`/${link}`)
           }
        }else{
            onClickHandler&&onClickHandler()
        }
    }

    return (
        <button 
        className={`bg-blue-600 text-white py-3 rounded-xl border-0`}
        onClick={()=>{handleClick()}}>
            {text}
        </button>
    )
}