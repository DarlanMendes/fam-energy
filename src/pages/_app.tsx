import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
        <title>FAM Energy - Implantando mais energia na sua família</title>
        <meta name="description" content="A Fam Energy oferece serviços de instalações elétricas em Fortaleza, garantindo soluções eficientes e seguras para residências e empresas. Nossos profissionais altamente qualificados realizam desde instalações simples até projetos complexos, prezando pela excelência, segurança e satisfação do cliente. Entre em contato para transformar sua energia em confiança com a Fam Energy." />
        <meta name="keywords" content="instalações elétricas, Fortaleza, energia solar, eletricista, residencial, comercial, segurança elétrica, serviços elétricos" />      
  </Head>
  <Component {...pageProps} />
  </>
 
}
