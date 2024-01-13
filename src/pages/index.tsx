import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import SecaoBanner from '@/components/secaoBanner'
import Footer from '@/components/footer'
import FAQ from '@/components/faq'
import Servicos from '@/components/servicos'
import Whatsapp from '@/components/whatsapp'
import whatsapp from "../../public/whatsapp-icon.png"
import { useEffect, useState } from 'react'
import Sobre from '@/components/sobre'
import Colaboradores from '@/components/colaboradores'
import Destaques from '@/components/destaques'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[showWhatsapp, setShowWhatsapp] = useState(false)

useEffect(()=>{
  const scrollListener =()=>{
    if(window.scrollY> 90){
      setShowWhatsapp(true)
    }else{
      setShowWhatsapp(false)
    }
   
    
  }
  window.addEventListener('scroll',scrollListener);
    
  return()=>{
    window.removeEventListener('scroll',scrollListener);
  }

},[]);
  return (
    <main
      className={` overflow-x-hidden flex flex-col justify-center items-center w-screen transition ease-in-out duration-200 ${inter.className}`}
    >
    <Navbar/> 
    <SecaoBanner/>
    <Destaques/>
    <Sobre/>
    <Servicos/>
    <Colaboradores/>
    <FAQ/>
    <Footer/>
    <Whatsapp showWhatsapp={showWhatsapp} whatsapp={whatsapp}/>
    

    </main>
  )
}
