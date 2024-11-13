import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../../assets/img/customersay/Video.png';
import customerImg from '../../assets/img/customersay/Image.png';
import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import leftImg from '../../assets/img/customersay/221.png'
import rightImg from '../../assets/img/customersay/12.png'
import icons from '../../assets/img/customersay/Vector.svg'

const CustomerReview = () => {
    const originalData = [
        { id: 1, img: img1, name: 'Khalid Al Dawsry', location: 'Jeddah, Saudi', customerImg: customerImg, dis: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it." },
        { id: 2, img: img1, name: 'Anamul Hasan', location: 'Bangladesh', customerImg: customerImg, dis: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it." },
        { id: 3, img: img1, name: 'Roy Ranbir', location: 'Jeddah, Saudi', customerImg: customerImg, dis: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % originalData.length);
        setActiveButton("next");
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? originalData.length - 1 : prevIndex - 1
        );
        setActiveButton("prev");
    };
    const handlePlayClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            <div className="max-w-screen-xl mx-auto px-6 py-16">
                <div className="relative p-5 overflow-hidden">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-red-700"></div>
                                <p className="text-[#BD1F17] text-lg font-roboto font-heavy">Crispy, Every Bite Taste</p>
                            </div>
                            <h1 className="text-5xl mt-3 font-bebas font-heavy uppercase">What Some of my Customers Say</h1>
                        </div>
                        <div className="hidden md:flex gap-4">
                            {/* Previous Button */}
                            <button
                                onClick={goToPrev}
                                className={`shadow-lg bg-white rounded-full p-2 ${activeButton === "prev" ? "text-red-700" : "text-gray-700"
                                    }`}
                            >
                                <RiArrowLeftSLine className="text-2xl" />
                            </button>
                            {/* Next Button */}
                            <button
                                onClick={goToNext}
                                className={`shadow-lg bg-white rounded-full p-2 ${activeButton === "next" ? "text-red-700" : "text-gray-700"
                                    }`}
                            >
                                <RiArrowRightSLine className="text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Items */}
                    <motion.div
                        className="flex gap-[20px]"
                        initial={false}
                        animate={{ x: -currentIndex * 100 + '%' }}
                        transition={{ ease: "easeOut", duration: 0.8 }}
                    >
                        {originalData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#FEBF00] flex flex-col items-center min-w-full relative"
                            >
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div className="md:w-1/2 w-full p-10 md:p-20 flex flex-col justify-between h-full order-2 md:order-1">
                                        <p className="text-[#0A1425] mb-2 font-roboto text-[18px] md:text-[20px] font-normal">
                                            “{item.dis}
                                        </p>

                                        <div className="mt-auto flex justify-between items-center pt-5">
                                            <div>
                                                <h1 className="text-[18px] font-bebas font-heavy text-[#0A1425]">
                                                    {item.name}
                                                </h1>
                                                <p className="text-[#333333] font-roboto font-normal text-[14px]">
                                                    {item.location}
                                                </p>
                                            </div>
                                            <img src={customerImg} alt="" />
                                        </div>

                                        <div className="flex justify-end items-end mt-2">
                                            <div className="w-10 h-1 bg-red-700 "></div>
                                        </div>
                                        <hr className="border-t-1 border-[#0A1425]" />
                                    </div>

                                    {/* Right side */}
                                    <div className="md:w-1/2 w-full relative flex items-center justify-center order-1 md:order-2">
                                        <img className="w-full" src={item.img} alt={item.name} />
                                        <div
                                            className="absolute z-10 flex items-center justify-center bg-[#FFC900] rounded-full p-3 cursor-pointer"
                                            onClick={handlePlayClick}
                                        >
                                            <FaPlay className="text-black text-xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute left-0 bottom-5 md:bottom-10 w-[24px] md:w-[39px]">
                                    <img className="w-full" src={icons} alt="" />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <div className="flex gap-4 justify-center mt-5 md:hidden">
                        {/* Previous Button */}
                        <button
                            onClick={goToPrev}
                            className={`shadow-lg bg-white rounded-full p-2 ${activeButton === "prev" ? "text-red-700" : "text-gray-700"
                                }`}
                        >
                            <RiArrowLeftSLine className="text-2xl" />
                        </button>
                        {/* Next Button */}
                        <button
                            onClick={goToNext}
                            className={`shadow-lg bg-white rounded-full p-2 ${activeButton === "next" ? "text-red-700" : "text-gray-700"
                                }`}
                        >
                            <RiArrowRightSLine className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* Modal with Framer Motion */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white p-6 rounded-lg relative max-w-lg w-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 text-gray-700"
                                >
                                    <RxCross2 className="text-xl" />
                                </button>
                                <h2 className="text-2xl font-bold mb-4">Video Player</h2>
                                <p className="text-gray-600">Video content goes here...</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* right side image  */}
            <div className="hidden 2xl:block absolute top-24 left-0">
                <img src={leftImg} alt="" />
            </div>

            {/* right side image  */}
            <div className="hidden 2xl:block absolute bottom-0 right-0">
                <img src={rightImg} alt="" />
            </div>
        </div>
    );
};

export default CustomerReview;
