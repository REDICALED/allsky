import { Nav } from "@/components/Nav";
import { useEffect, useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {ReactComponent as Arrowdown} from "@/assets/arrow_down.svg";
import { motion } from "framer-motion";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useParams } from "react-router-dom";

interface ImageListItem {
  tags: string;
  images: string[];
  count: number;
  visible: number;
}

const Gallery = () => {
    const tags = useParams();
    const [visibleImages, setVisibleImages] = useState(0);
    const [maximages, setMaxImages] = useState(10);
    const [nowtag, setNowTag] = useState("");
    const [imageList, setImageList] = useState<ImageListItem[]>([]);
    const [nowlist, setNowList] = useState<string[]>([]);
    const namelist = [{tags: '1board' , text: "간판/현수막"}, 
                      {tags: '2panel' , text: "판넬/지붕"}, 
                      {tags: '3glass' , text: "유리/창호"}, 
                      {tags: '4paint' , text: "페인트/물청소"}, 
                      {tags: '5wall' , text: "외벽/실리콘"}, 
                      {tags: '6etc' , text: "기타작업"}
    ];

    useEffect(() => {
      const fetchData = async () => {
        await GetImages();
        if(tags.id !== undefined)
          await changetag(tags.id);
      };
      fetchData();
  }, [])

  useEffect(() => {
    if (imageList.length > 0 && nowtag !== "") {
      const images = imageList.find(item => item.tags === tags.id)?.images || [];
      setNowList(images);
      setMaxImages(images.length);
      setVisibleImages(imageList.find(item => item.tags === tags.id)?.visible || 0);
      console.log(maximages)
      setNowTag(namelist.find(item => item.tags === tags.id)?.text || "");
    }
  }, [imageList, tags.id]);

    const GetImages = async () => {
      const updatedImageList: ImageListItem[] = [];
      for (let i = 0; i < 6; i++) {
        let cnt = 0;
        let vis = 0;
        await fetch(`/${namelist[i].tags}/filelist.txt`)
        .then(response => response.text())
        .then(text => {
            cnt = parseInt(text.split('\n')[0], 10);
            if (cnt > 10) vis = 10;
            else vis = cnt;
            const newImageList = [];
          for (let j = 1; j < cnt + 1; j++) {
            newImageList.push(`/${namelist[i].tags}/`+ text.split('\n')[j]);
          }
          updatedImageList.push({ tags: namelist[i].tags, images: newImageList, count: cnt, visible: vis});
        }
      )
        .catch(error => {
            console.error('Error reading filelist.txt:', error);
        });
      }
      await setImageList(updatedImageList);
  }

  const changetag = async (tag: string) => {
    for (let i = 0; i < 6; i++) {
      if (namelist[i].tags === tag) {
        await setNowTag(namelist[i].text);
        const images = imageList.find(item => item.tags === tag)?.images || [];
        await setNowList(images);
        await setMaxImages(nowlist.length);
        break;
      }
    }
  }

    
    const items = Array.from({ length: visibleImages }).map((_, index) => (
        <Zoom key={index}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeInOut', duration: 0.5, y: { duration: 0.5 } }}
        >
        <img
          key={index}
          src={`${nowlist[index]}`}
          style={{ width: "100%", borderRadius: "8px" }}
          alt={`Image ${nowlist[index]}`}
          className=" lg:p-[1vw] py-2 px-2 h-[50vh] w-[30vh] object-cover"
        />
        </motion.div>
        </Zoom>

    ));
    return (
        <div className=" ">
            <Nav />
            <div className="pt-[5vh]">
            <div  className=" text-center text-2xl lg:text-2xl">
                현장 사진 갤러리 : {nowtag}
            </div>
                <hr className=" mx-auto w-1/2 h-px my-2 border-1 bg-gray-400"/>
              <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 2 , 900: 3}}
              >
                  <Masonry>
                      {items}
                  </Masonry>
              </ResponsiveMasonry>
            </div>
          {
            visibleImages < maximages &&
            <div  className=" py-[2vh] grid place-items-center">
                <button onClick={()=>{maximages - visibleImages >= 10 ? setVisibleImages(visibleImages + 10) : setVisibleImages(maximages)}}>
                  <Arrowdown className=" grid place-items-center h-[3vh]" style={{fill: 'gray'}} />
                </button>
            </div>
          }
        </div>
    );
}

export default Gallery;