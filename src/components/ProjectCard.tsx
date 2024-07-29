import { motion } from "framer-motion";
import MotionCard from "@/components/hr/MotionCard.tsx";
import { useEffect, useState } from "react";
import { ReactComponent as ArrowSVG} from "@/assets/arrow.svg";

export const ProjectCard = ({ title, date, img, description, stack, num }: { title: string, date: string, img:string, description: JSX.Element, stack: Array<string>, num: number}) => {
    
    const [, SetColorstyle] =  useState("hover:text-t0-bg from-t0-text to-t0-text");
    const [buttonstyle, Setbuttonstyle] =  useState("hover:text-t0-bg hover:bg-t0-text");
    const [fillsvg, Setfillsvg] =  useState("fill-t0-text group-hover:fill-t0-bg");
    const [, Setcardstyle] =  useState("text-t0-text bg-t0-bg");
    const [descard, SetDesCard] =  useState(false);

    useEffect(() => {
        if (num === 0) {
            SetColorstyle("hover:text-t0-bg from-t0-text to-t0-text")
            Setbuttonstyle("hover:text-t0-bg hover:bg-t0-text")
            Setfillsvg("fill-t0-text group-hover:fill-t0-bg")
            Setcardstyle("text-t0-text bg-t0-bg")
        }
        else if (num === 1) {
            SetColorstyle("hover:text-t1-bg from-t1-text to-t1-text")
            Setbuttonstyle("hover:text-t1-bg hover:bg-t1-text")
            Setfillsvg("fill-t1-text group-hover:fill-t1-bg")
            Setcardstyle("text-t1-text bg-t1-bg")

        }
        else if (num === 2) {
            SetColorstyle("hover:text-t2-bg from-t2-text to-t2-text")
            Setbuttonstyle("hover:text-t2-bg hover:bg-t2-text")
            Setfillsvg("fill-t2-text group-hover:fill-t2-bg")
            Setcardstyle("text-t2-text bg-t2-bg")
        }
        else if (num === 3) {
            SetColorstyle("hover:text-t3-bg from-t3-text to-t3-text")
            Setbuttonstyle("hover:text-t3-bg hover:bg-t3-text")
            Setfillsvg("fill-t3-text group-hover:fill-t3-bg")
            Setcardstyle("text-t3-text bg-t3-bg")
            
        }
        else if (num === 4) {
            SetColorstyle("hover:text-t4-bg from-t4-text to-t4-text")
            Setbuttonstyle("hover:text-t4-bg hover:bg-t4-text")
            Setfillsvg("fill-t4-text group-hover:fill-t4-bg")
            Setcardstyle("text-t4-text bg-t4-bg")
        }
    }, [num]);

    return (
        <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <div  className=" border-b-2 space-y-[2px] h-full">
            <MotionCard num={(-1)**1} rowcol={0}>
                <h1 className=" text-2xl font-extrabold "> {title} </h1>
            </MotionCard>            
            <MotionCard num={(-1)**(2)} rowcol={0}>
            <hr className=" mx-auto w-1/2 h-1 my-2 border-1"/>
            </MotionCard>
            
            <MotionCard num={(-1)**(2)} rowcol={1}>
            <h1 className=" text-2xl text-md pb-1 font-semibold "> {date} </h1>
            </MotionCard>

            <div className="grid place-items-center lg:flex "> 
                <img src={img} className=" lg:ml-10 px-2 lg:h-[30vh] md:h-[30vh] sm:h-[20vh] object-contain"/>
                <div className={descard ? `flex-1 text-center items-center w-full lg:pl-[10vw]  lg:h-[40vh] md:h-[30vh] sm:h-[20vh]  ` : `flex-1 text-center items-center w-full lg:pl-[10vw]  lg:h-[40vh] md:h-[30vh] sm:h-[20vh] grid place-items-center` }>
                    {
                        descard && <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type:'spring', stiffness: 200 , duration: 0.5  }}
                        className={` lg:h-[36vh] md:h-[20vh] h-[15vh] border-y-2 border-l-2 p-2 m-1 overflow-y-auto -mr-[20vw] pr-[20vw] `}
                        >
                        <div className=" grid place-items-center">
                        <div className=" lg:mt-10">
                            {description}
                        </div>
                        <div className=" lg:text-sm text-xs ">
                        {stack.map((item, ) => (
                        <>
                            <button className={` hover:transition-colors hover:duration-200 font-extrabold mt-3 bg-none border-2 ${buttonstyle} rounded-lg m-1 p-1`}>{item}</button>
                        </>
                        ))}
                        </div>
                        </div>
                        </motion.div>
                    }
                {!descard && 

                <div className=" grid place-items-center">
                <button onClick={()=>{ SetDesCard(!descard)}} className= {`${buttonstyle} ${fillsvg} hover:transition-colors hover:duration-200 group border-2 mx-auto lg:mt-10 lg:w-[20vw] w-[25vw] md:mt-1 sm:mt-10 flex justify-end`}>
                    <ArrowSVG className={`  ${fillsvg} hover:transition-colors hover:duration-200 transition-colors duration-200 lg:w-20 w-10 mr-2 `}/>
                </button>
                </div>
                }
                </div>
            </div>
        </div>
        
        </motion.div>
    );
};
