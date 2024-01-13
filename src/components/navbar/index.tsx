import Image from 'next/image'
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
interface NavbarItemProps {
    text: string;
    handleHamburguer:()=>void
}

function NavbarItem({ text ,handleHamburguer}: NavbarItemProps) {

    return (
        <li className={`list-none hover:opacity-75 transition-opacity cursor-pointer`}>
            <a className='no-underline text' href={`#${text}`} onClick={handleHamburguer}> {text}</a>
        </li>
    )
}
export default function Navbar() {
    const listaSecoes = ['Início', 'Serviços', 'Produtos','Dúvidas','Testemunhos']
    const hamburguerRef = useRef(null)
    const handleHamburguer=()=>{
        //@ts-ignore
        if(hamburguerRef.current){hamburguerRef.current.checked =false}
    }

    return (
        // <IconContext.Provider value={{ color: "white", className: "text-lg text-white flex sm:hidden focus:bg-red-500" }} >

        
        <div className={`flex gap-2 main-bg text w-screen justify-around items-center py-4 fixed top-0 `}>
            <Image src='/fam logo.png' alt='' width={60} height={60} />

            <ul className={` gap-8 main-bg text-white hidden sm:flex`}>
                {listaSecoes.map((secao, index) => (
                    <NavbarItem key={index} text={secao} handleHamburguer={handleHamburguer}/>
                ))}
            </ul>
            <input type='checkbox'id="menuNav"className='peer/hamburguer hidden' ref={hamburguerRef} />
              <label htmlFor="menuNav">
              <GiHamburgerMenu className="text-lg text-white flex sm:hidden "/>
              </label>
              

            

            <div className='z-8 fixed right-[100vw] top-0 gap-8 pt-4 h-screen main-bg flex items-start shadow peer-checked/hamburguer:translate-x-[100vw] '>
                <ul className={` text-white flex flex-1 flex-col gap-4 px-4 pt-8`}>
                    {listaSecoes.map((secao, index) => (
                        <NavbarItem key={index} text={secao}  handleHamburguer={handleHamburguer}/>
                    ))}
                   
                </ul>
                <button className='px-4 text-white ' onClick={handleHamburguer}> X </button>
            </div>


        </div>
        // </IconContext.Provider>
    )
}
