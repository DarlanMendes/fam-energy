type Props = {
    list: string[]
    title: string
}
function FooterPart(props: Props) {
    return (
        <div className="mt-4 px-8">

            <label className="font-bold">
                {props.title}
                <ul className=" py-3 flex flex-col gap-3  sm:justify-center font-medium ">
                    {props.list && props.list.map((item, index) => (
                        <li key={index} className=" px-4 rounded-md hover:opacity-40 hover:bg-amber-700 ">
                            {item}
                        </li>
                    ))}
                </ul>
            </label>
        </div>

    )
}
function Address(){
    return(
    <div className=" pt-3 px-8 pb-12">
       <label className="font-bold flex flex-col pl-2 gap-2">
       Sede Fortaleza:
       <p className="font-medium" >
        Rua Papi Júnior, 1010
       </p>
       <p className="font-medium">
        Bairro: Rodolfo Teófilo
       </p>
       <p className="font-medium">
       60430-235
       </p>
        </label>


    </div>)
}

export default function Footer() {
    const listSite = ["Início", "Serviços", "Produtos", "Testemunhos"]
    const listRede = ["Facebook", "Instagram", "Whatsapp", "E-mail"]
    return (
        <footer className="flex flex-col gap-12 main-bg w-screen justify-center text-white lg:px-24 md:flex-row lg:items-center xl:w-screen pl-2">
            <FooterPart title="Site:" list={listSite} />
            <hr className="w-2/3 m-auto sm:hidden"/>
            <FooterPart title="Nossas Redes" list={listRede} />
            <hr className="w-2/3 m-auto sm:hidden"/>
            <Address/>
        </footer>
    )
}