import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { motion } from "framer-motion";
import Zoom from 'react-medium-image-zoom'
  
export const Projects = () => {    
    const items = Array.from({ length: 10 }).map((_, index) => (
      <Zoom>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <img
          key={index}
          src={`/main/images10/${index + 1}.jpg`}
          alt={`Image ${index + 1}`}
          className=" lg:p-[1vw] py-2 px-1 h-[40vw] w-full object-cover rounded-xl"
        />
        </motion.div>
        </Zoom>
    ));

    return (

        <div id="projects" className={` mb-10`}>
          <hr className=" lg:my-[2vh] my-[3vh] h-0.5 mx-[10vw] bg-gray-200" />
          <div  className=" text-center text-2xl lg:text-2xl">
                현장 작업 사진
            </div>     
            <div className=" mx-[3vw]">
              <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 2 , 900: 3}}
              >
                  <Masonry>
                      {items}
                  </Masonry>
              </ResponsiveMasonry>
            </div>
            
    </div>
        
    )
}

