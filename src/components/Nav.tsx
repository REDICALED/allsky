import { BrowserView, MobileView } from 'react-device-detect'
import modalphone from '@/assets/modalphone.png'
import {  useState } from "react";
import {Modal} from "@/components/modal/Phonemodal";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true); // 버튼 클릭 시 모달 열기
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    
    return (
    <>
            <nav className=" z-50 pt-2 bg-white border-black font-semibold fixed w-full grid grid-cols-3 text-center pb-3 lg:text-xl text-sm ">
            <Link to='/' className="group lg:h-[20px] h-[14px] ease-in-out">
            <div className={ ` hover:bg-gray-300 transition-all duration-300 mx-[1vw] `}>
                홈
            </div>
            </Link>
        
            <Link to='/Fees' className="group lg:h-[20px] h-[14px] ease-in-out ">
                <div className={ location.pathname === "/Fees" ? 'bg-gray-300 mx-[1vw] transition-all duration-300 ' : 'hover:bg-gray-300 mx-[1vw] transition-all duration-300 '}>
                    운임표
                </div>
            </Link>

            <ul className={  location.pathname.includes("Gallery") ? 'bg-gray-300 mx-[1vw] transition-all duration-300 ' : 'hover:bg-gray-300 mx-[1vw] transition-all duration-300 '}>
            <li className="group w-full relative dropdown  px-4 cursor-pointertext-base uppercase tracking-wide transition-all duration-300">
                        <div className=' w-full cursor-pointer select-none	'> 현장 갤러리</div>
                        <div className=" w-full group-hover:block dropdown-menu absolute hidden h-auto transition-all duration-300">
                        <ul className="top-0 w-full px-[1vw] bg-white shadow py-2 transition-all duration-300 select-none ">
                            <Link to='/Gallery/1board' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">간판/현수막</div></li>
                            </Link>

                            <Link to='/Gallery/2panel' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">판넬/지붕</div></li>
                            </Link>

                            <Link to='/Gallery/3glass' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">유리/창호</div></li>
                            </Link>

                            <Link to='/Gallery/4paint' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">페인트/물청소</div></li>
                            </Link>
                            
                            <Link to='/Gallery/5wall' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">외벽/실리콘</div></li>
                            </Link>

                            <Link to='/Gallery/6etc' className="group lg:h-[20px] h-[14px] ease-in-out ">
                                <li className="py-1"><div className="block text-base uppercase hover:bg-gray-300 cursor-pointer transition-all duration-300">기타작업</div></li>
                            </Link>
                        </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <MobileView>
            <button className=" z-50  fixed right-[2vw] bottom-0 bg-blue-500 transition-colors duration-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 h-[6vh] w-[6vh] mb-[5vh] rounded-full">
                <img className=" p-3 " src={modalphone}/>
            </button>
            </MobileView>


            <BrowserView>
                <div>
                <button onClick={handleButtonClick} className="  z-50  fixed right-[2vw] bottom-0 bg-blue-500 transition-colors duration-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 h-[6vh] w-[6vh] mb-[5vh] rounded-full">
                    <img className=" p-3 " src={modalphone}/>
                </button>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>

                    </BrowserView>
                    <MobileView>
                    <button onClick={() => {document.location.href='tel:010-9208-7052'}} className=" z-50  fixed right-[2vw] bottom-0 bg-blue-500 transition-colors duration-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 h-[6vh] w-[6vh] mb-[5vh] rounded-full">
                        <img className=" p-3 " src={modalphone}/>
                    </button>
                </MobileView>
    </>
    )
}