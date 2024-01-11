import servico1 from "../../../public/servico 01.jpg"
import servico2 from "../../../public/serviço 02.jpg"
import servico3 from "../../../public/serviço 03.jpg"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRef } from 'react';
export default function Carrousel() {
    const [images, setImages] = useState( [
        { id: 1, img: servico1 },
        { id: 2, img: servico2 },
        { id: 3, img: servico3 }
    ])
    



    const handleCarrousel = (translatePace: number) => {
        console.log(translatePace)
        if(translatePace===1){
            
            let arrayImages  = [...images]
            let tmp = arrayImages[0]
            for(let i=0; i<arrayImages.length -1; i++){
                arrayImages[i] = arrayImages[i+1]
                console.log(arrayImages)
            }
            arrayImages[arrayImages.length - 1] = tmp
            setImages(arrayImages)    
        }
        if(translatePace===-1){
            
            let arrayImages  = [...images]
            let tmp = arrayImages[arrayImages.length - 1]
            for(let i=arrayImages.length -1; i> 0; i--){
                arrayImages[i] = arrayImages[i-1]
                console.log(arrayImages)
            }
            arrayImages[0] = tmp
            setImages(arrayImages)    
        }
    }

    return (
        <div className="flex w-full items-center my-8 justify-center">
            <button className="text-2xl px-1" onClick={() => handleCarrousel(-1)}> ◄  </button>
            <div className="flex overflow-x-hidden h-72 ">
                <div className="flex gap-2  overflow-x-hidden h-72 " >
                    {images.map((item) => (
                        <Image src={item.img} alt="" key={item.id} className={`rounded-md object-cover h-72 w-full max-w-[316px] 
                `
                        }

                        />
                    ))}
                </div>
            </div>
            <button className="text-2xl px-1" onClick={() => handleCarrousel(+1)}>  ► </button>
        </div>
       

    )
}