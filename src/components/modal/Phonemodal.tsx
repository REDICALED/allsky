export const Modal = (props: any) => {
    if (!props.isOpen) return null;

    return (
<div id="info-popup" tabIndex={-1} className="flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 z-50">
    <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow md:p-8">
                    <div className="mb-4 text-base text-black ">
                        <h3 className=" text-center mb-3 text-2xl font-bold text-gray-900 dark:text-white"> 전화 문의: 010-9208-7052</h3>
                        <p>
                            1톤, 2톤, 3.5톤, 5톤 차량 장비 보유 중입니다.
                        </p>
                    </div>
                    <div className="flex justify-center items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                        <div className="flex items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                            <button id="close-modal" type="button" onClick={props.onClose} className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};