import { Nav } from "@/components/Nav";
import unim from '/unim.jpg'
import { motion } from "framer-motion";


const Fees = () => {
    
    return (
        <div className=" ">
            <Nav />
            <div  className=" pt-[5vh] text-center text-2xl lg:text-2xl">
                운임표
            </div>            
                <hr className=" mx-auto w-1/2 h-px my-2 border-1 bg-gray-400"/>
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
                >
            <div  className="grid place-items-center ">
                <img className="  max-h-[65vh] object-contain m-2" src={unim}/>
            </div>
            </motion.div>
        </div>
    );
}

export default Fees;