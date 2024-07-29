import { motion } from "framer-motion"
import engineer from "@/assets/engineer.png"
import kcmark from "@/assets/kcmark.png"
import lift from "@/assets/lift_green.png"
import { useEffect, useState } from "react"


export const BcKim = () => {

    const [maintext, setMainText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            await GetImages();
        };
        fetchData();
    }, [])

    const GetImages = async () => {
        await fetch(`/main/maintext.txt`)
        .then(response => response.text())
        .then(text => {
            setMainText(text);
            console.log(maintext);
        })
        .catch(error => {
            console.error('Error reading sub.txt:', error);
        });
    }

    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        
        <div className=" grid-cols-3  grid place-items-center px-[1vw] py-[2vh]">
            
            <div className="grid place-items-center ">
                <img className=" lg:h-[24vh] h-[10vh] pt-[1vh]" src={engineer}/>
                <p className=" text-center font-semibold text-black text-xs lg:text-xl h-[5vh] pt-[3vh]"> 친절한 베테랑 경력 </p>
            </div>
            <div className="grid place-items-center">
                <img className=" lg:h-[24vh] h-[10vh] pt-[1vh]" src={kcmark}/>
                <p className=" text-center font-semibold text-black text-xs lg:text-xl h-[5vh] pt-[3vh]"> KCS인증 안전 차량</p>
            </div>
            <div className="grid place-items-center">
                <img className=" lg:h-[24vh] h-[10vh] pt-[1vh]" src={lift}/>
                <p className=" text-center font-semibold text-black text-xs lg:text-xl h-[5vh] pt-[3vh]"> 1톤,2.5톤,3.5톤,5톤</p>
            </div>
        </div>
        <hr className=" lg:my-[2vh] my-[3vh] h-0.5 mx-[10vw] bg-gray-200" />
        <div className="mx-[10vw] transform-none  ">
            <div className="py-3">
            <p className=" font-normal text-base lg:text-2xl mb-2"> {maintext} </p>
            <p className=" font-normal text-sm lg:text-2xl mb-2"> 전화 문의: 010-9208-7052 </p>
            <p id="BcKim" className=" font-extralight text-sm lg:text-2xl mb-2"> 전자세금 신용카드 가능 </p>
        </div>
        </div>

        </motion.div>
    )
}