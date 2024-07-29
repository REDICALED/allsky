import { motion } from "framer-motion"
import {ReactComponent as LogoSVG} from "@/assets/42_logo.svg";
import {ReactComponent as FrontSVG} from "@/assets/front.svg";
import { useState, useEffect } from "react";


export const Archive = (props:any) => {
    
    const [buttonstyle, Setbuttonstyle] =  useState("hover:text-t0-bg hover:bg-t0-text");
    const [fillsvg, Setfillsvg] =  useState("fill-t0-text group-hover:fill-t0-bg");
    const [, Setcardstyle] =  useState("text-t0-bg bg-t0-text");
    const [, SetColorstyle] =  useState("hover:text-t0-bg from-t0-text to-t0-text");


    useEffect(() => {
        if (props.num === 0) {
            SetColorstyle("hover:text-t0-bg from-t0-text to-t0-text")
            Setbuttonstyle("hover:text-t0-bg hover:bg-t0-text")
            Setfillsvg("fill-t0-text group-hover:fill-t0-bg")
            Setcardstyle("text-t0-bg bg-t0-text")
        }
        else if (props.num === 1) {
            SetColorstyle("hover:text-t1-bg from-t1-text to-t1-text")
            Setbuttonstyle("hover:text-t1-bg hover:bg-t1-text")
            Setfillsvg("fill-t1-text group-hover:fill-t1-bg")
            Setcardstyle("text-t1-bg bg-t1-text")

        }
        else if (props.num === 2) {
            SetColorstyle("hover:text-t2-bg from-t2-text to-t2-text")
            Setbuttonstyle("hover:text-t2-bg hover:bg-t2-text")
            Setfillsvg("fill-t2-text group-hover:fill-t2-bg")
            Setcardstyle("text-t2-bg bg-t2-text")
        }
        else if (props.num === 3) {
            SetColorstyle("hover:text-t3-bg from-t3-text to-t3-text")
            Setbuttonstyle("hover:text-t3-bg hover:bg-t3-text")
            Setfillsvg("fill-t3-text group-hover:fill-t3-bg")
            Setcardstyle("text-t3-bg bg-t3-text")
            
        }
        else if (props.num === 4) {
            SetColorstyle("hover:text-t4-bg from-t4-text to-t4-text")
            Setbuttonstyle("hover:text-t4-bg hover:bg-t4-text")
            Setfillsvg("fill-t4-text group-hover:fill-t4-bg")
            Setcardstyle("text-t4-bg bg-t4-text")
        }
    }, [props.num]);
    
    return (
        
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }} 
        >
        <h1 id="archive" className=" my-10 text-center text-4xl">Archive</h1>
        <hr className=" h-0.5 mx-[10vw] bg-black" />
        <div className="mx-[10vw] transform-none  ">
            <div className="py-3 ">
                    <a target="_blank" className={` ${buttonstyle} ${fillsvg} hover:transition-colors hover:duration-200 group justify-between items-center border border-spacing-10 p-4 mt-10 mb-3 flex font-semibold lg:text-2xl text-xl `} href="https://crystalline-dinner-293.notion.site/bb095a18b4a44d7d889711f78e6d1f73?v=4704f2eddda94a27aca2d932b32097b1&pvs=4">
                        <div> 42 과정 학습 노션 </div>
                        <LogoSVG className={`${fillsvg} duration-500 ml-[10vw] h-[6vh]`}/>
                    </a>
                    <a target="_blank" className={` ${buttonstyle} ${fillsvg} hover:transition-colors hover:duration-200 group justify-between items-center border border-spacing-10 p-4 mt-10 mb-3 flex font-semibold lg:text-2xl text-xl `} href="https://crystalline-dinner-293.notion.site/2ee2c89a642b495eafac875dd2dd85ef?v=9859d4c44e724bc583dc0dd89ebe118d&pvs=4">
                        <div>프론트엔드 학습 노션 </div>
                        <FrontSVG className={` ${fillsvg} duration-500 ml-[10vw] h-[6vh]`}/>
                    </a>
            </div>
        </div>
        </motion.div>
    )
}
