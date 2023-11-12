import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import SecaoBanner from '@/components/secaoBanner'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const action=()=>{
    console.log('Olá')
  }
  return (
    <main
      className={` overflow-x-hidden flex flex-col justify-center items-center w-screen ${inter.className}`}
    >
    <Navbar/> 
    <SecaoBanner/>
    <Footer/>
    

    </main>
  )
}
