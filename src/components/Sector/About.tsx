import slick1 from "/main/slide/1.jpg";
import slick2 from "/main/slide/2.jpg";
import slick3 from "/main/slide/3.jpg";
import slick4 from "/main/slide/4.jpg";
import slick5 from "/main/slide/5.jpg";
import slick6 from "/main/slide/6.jpg";
import slick7 from "/main/slide/7.jpg";

import phone from "/main/phone.png";
import Slider from 'react-slick';
import { BrowserView, MobileView } from 'react-device-detect'
import {Modal} from "@/components/modal/Phonemodal";
import { useEffect, useState } from "react";

export const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [maintext, setMainText] = useState("");

    const handleButtonClick = () => {
        setIsModalOpen(true); // 버튼 클릭 시 모달 열기
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        swipe:false,

      };
      
      useEffect(() => {
        const fetchData = async () => {
            await GetImages();
        };
        fetchData();
    }, [])
    
      const GetImages = async () => {
        await fetch(`/main/slidetext.txt`)
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

        <div id="about" className={` w-full lg:h-[50vh] h-[40vh]  relative bg-slate-900`}>
            <Slider className=" opacity-60 h-full " {...settings}>
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick1} alt="slick1" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick2} alt="slick2" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick3} alt="slick3" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick4} alt="slick4" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick5} alt="slick5" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick6} alt="slick6" />
                <img className=" lg:h-[50vh] h-[40vh]  object-cover" src={slick7} alt="slick7" />

            </Slider>

            <div className=" px-2 overflow-x-auto absolute inset-0 grid place-items-center text-white ">

            <div className="lg:text-4xl lg:font-semibold md:text-2xl text-xl text-center font-semibold" style={{ whiteSpace: 'pre-line', lineHeight: '2' }}>
                {maintext}
                <div className="pt-2">
                    <BrowserView>
                        <div>
                        <button onClick={handleButtonClick} className="text-gray-900 bg-white hover:bg-gray-200 border duration-300 transition-all border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                            <h1 className=" flex lg:text-4xl md:text-2xl text-md font-semibold">전화 문의</h1>
                            <img className="pl-[1vw] lg:h-[4vh] h-[3vh] object-cover" src={phone} alt="phone" />
                        </button>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                    </BrowserView>
                    <MobileView>
                    <button  onClick={() => {document.location.href='tel:010-9208-7052'}} className=" text-gray-900 bg-white hover:bg-gray-200 border duration-300 transition-all border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                    <h1 className=" flex lg:text-4xl md:text-2xl text-md font-semibold">전화 문의</h1>
                    <img className=" pl-[2vw] lg:h-[4vh] h-[3vh] object-cover" src={phone} alt="phone" />
                    </button>
                    </MobileView>
                </div>
            </div>
            


            </div>

        </div>

        
    )
}