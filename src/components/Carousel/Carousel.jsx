import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import img1 from '../../assets/img/popularFood/burger.png';
import img2 from '../../assets/img/popularFood/pizza.png';
import img3 from '../../assets/img/popularFood/frenchFries.png';
import img4 from '../../assets/img/popularFood/cusineChicken.png';

const Carousel = () => {
    const originalData = [
        { id: 1, img: img1, title: 'Vegetables Burger', sub: "Barbecue Italian cuisine pizza", price: 10.99 },
        { id: 2, img: img2, title: 'Special Pizza', sub: 'Barbecue Italian cuisine pizza', price: 15.99 },
        { id: 3, img: img3, title: 'Special French Fries', sub: "Barbecue Italian cuisine", price: 5.99 },
        { id: 4, img: img4, title: 'Cuisine Chicken', sub: "Japanese Cuisine Chicken", price: 20.99 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(null);

    // Autoplay every 3 seconds
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

    return (
        <div className="relative p-5 overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-700"></div>
                        <p className="text-[#BD1F17] text-lg font-roboto font-heavy">Crispy, Every Bite Taste</p>
                    </div>
                    <h1 className="text-5xl mt-5 font-bebas font-heavy">POPULAR FOOD ITEMS</h1>
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
                className="flex gap-8"
                initial={false}
                animate={{ x: -currentIndex * 310 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
            >
                {originalData.concat(originalData).map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg flex flex-col items-center min-w-[275px]"
                    >
                        <img className="w-[150px] h-[150px] object-contain mb-2" src={item.img} alt={item.title} />
                        <div className="w-14 h-1 bg-[#BD1F17] mb-4"></div>
                        <h1 className="text-xl font-bebas font-heavy text-[#0A1425]">{item.title}</h1>
                        <p className="text-[#0A1425] mb-2 font-roboto text-[16px] font-normal">{item.sub}</p>
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
    );
};

export default Carousel;
