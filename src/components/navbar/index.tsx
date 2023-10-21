import Image from 'next/image'
interface NavbarItemProps{
    text:string;
}
function NavbarItem({ text }:NavbarItemProps) {
    
    return (
        <li className={`list-none hover:opacity-75 transition-opacity cursor-pointer`}>
           <a className='no-underline text' href={`#${text}`}> {text}</a>
        </li>
    )
}
export default function Navbar() {
    const listaSecoes = ['Início', 'Serviços', 'Produtos', 'Testemunhos']

    return (
        <div className={`flex gap-2 main-bg text w-screen justify-around items-center py-4 fixed top-0`}>
            <Image src='/fam logo.png' alt='' width={60} height={60} />

            <ul className={`flex gap-8 main-bg text`}>
                {listaSecoes.map((secao, index) => (
                    <NavbarItem key ={index} text={secao}/>
))}
            </ul>
        </div>
    )
}
