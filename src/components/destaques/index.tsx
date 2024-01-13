import promo01 from "./../../../public/promo 01.jpeg"
import promo02 from "./../../../public/promo 02.jpeg"
import promo03 from "./../../../public/promo 03.jpeg"
import promo04 from "./../../../public/promo 04.jpeg"
import promo05 from "./../../../public/promo 05.jpeg"
import promo06 from "./../../../public/promo 06.jpeg"
import promo07 from "./../../../public/promo 07.jpeg"
import promo08 from "./../../../public/promo 08.jpeg"
import promo09 from "./../../../public/promo 09.jpeg"
import promo10 from "./../../../public/promo 10.jpeg"
import promo11 from "./../../../public/promo 11.jpeg"
import promo12 from "./../../../public/promo 12.jpeg"
import promo13 from "./../../../public/promo 13.jpeg"
import promo14 from "./../../../public/promo 14.jpeg"
import promo15 from "./../../../public/promo 15.jpeg"
import promo16 from "./../../../public/promo 16.jpeg"
import promo17 from "./../../../public/promo 17.jpeg"

import Image from "next/image"
export default function Destaques() {
    const promos = [
        {id:1, promo:promo01},
        {id:2, promo:promo02},
        {id:3, promo:promo03},
        {id:4, promo:promo04},
        {id:5, promo:promo05},
        {id:6, promo:promo06},
        {id:7, promo:promo07},
        {id:8, promo:promo08},
        {id:9, promo:promo09},
        {id:10, promo:promo10},
        {id:11, promo:promo11},
        {id:12, promo:promo12},
        {id:13, promo:promo13},
        {id:14, promo:promo14},
        {id:15, promo:promo15},
        {id:16, promo:promo16},
        {id:17, promo:promo17},

    ]
    return (
        <section id="destaques" className="main-bg px-4 py-6 w-screen flex flex-col items-center">
            <h2 className="text-white font-semibold text-2xl max-w-[1000px] w-full">Nossas promoções</h2>
            <div className="flex overflow-x-scroll p-4  gap-4 max-w-[1000px]">
                {promos.map((promo)=>(
                    <Image src={promo.promo} alt="" key={promo.id} className="rounded-lg "/>
                ))}
                
            </div>
        </section>
    )
}