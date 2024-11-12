import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../button/Button';
import { FiPhoneCall } from 'react-icons/fi';

const Tab = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('about');

    // Handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Define dynamic content for each tab
    const getTabContent = (tab) => {
        switch (tab) {
            case 'about':
                return (
                    <div>
                        <h2 className="text-[40px] leading-[45px] lg:text-[55px] font-bebas lg:leading-[60px] font-heavy text-[#181818]">
                            Exceptional culinary experience and delicious food
                        </h2>
                        <p className='text-[16px] font-roboto font-regular text-[#333333] mt-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
                        </p>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <h2 className="text-[40px] leading-[45px] lg:text-[55px] font-bebas lg:leading-[60px] font-heavy text-[#181818]">
                            Exceptional culinary experience and delicious food
                        </h2>
                        <p className='text-[16px] font-roboto font-regular text-[#333333] mt-5'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati eos repudiandae eaque, nesciunt libero debitis corrupti beatae itaque molestiae impedit ullam tempore cupiditate eum voluptatibus aliquam dolor, nemo totam?
                        </p>
                    </div>
                );
            case 'contact':
                return (
                    <div>
                        <h2 className="text-[40px] leading-[45px] lg:text-[55px] font-bebas lg:leading-[60px] font-heavy text-[#181818]">
                            Exceptional culinary experience and delicious food
                        </h2>
                        <p className='text-[16px] font-roboto font-regular text-[#333333] mt-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas odio voluptatem corporis odit repellat saepe eveniet ut optio non.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Tab Buttons */}
            <div className="flex space-x-6">
                <motion.button
                    className={`py-2 px-4 text-[14px] font-roboto font-medium ${activeTab === 'about' ? 'text-white bg-red-600' : 'text-red-600'}`}
                    onClick={() => handleTabClick('about')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    initial={{ backgroundColor: "#ffffff" }}
                    animate={{
                        backgroundColor: activeTab === 'about' ? "#e53e3e" : "#ffffff",
                    }}
                    exit={{ backgroundColor: "#ffffff" }}
                >
                    About
                </motion.button>
                <motion.button
                    className={`py-2 px-4 text-[14px] font-roboto font-medium ${activeTab === 'experience' ? 'text-white bg-red-600' : 'text-red-600'}`}
                    onClick={() => handleTabClick('experience')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    initial={{ backgroundColor: "#ffffff" }}
                    animate={{
                        backgroundColor: activeTab === 'experience' ? "#e53e3e" : "#ffffff",
                    }}
                    exit={{ backgroundColor: "#ffffff" }}
                >
                    Experience
                </motion.button>
                <motion.button
                    className={`py-2 px-4 text-[14px] font-roboto font-medium ${activeTab === 'contact' ? 'text-white bg-red-600' : 'text-red-600'}`}
                    onClick={() => handleTabClick('contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    initial={{ backgroundColor: "#ffffff" }}
                    animate={{
                        backgroundColor: activeTab === 'contact' ? "#e53e3e" : "#ffffff",
                    }}
                    exit={{ backgroundColor: "#ffffff" }}
                >
                    Contact
                </motion.button>
            </div>

            <hr className="border-t-1 border-red-600 mb-5 lg:mb-10" />

            {/* Animated Tab Content with Framer Motion */}
            <div className="mt-4">
                <motion.div
                    key={activeTab} // Ensures the content animates smoothly when switching tabs
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {getTabContent(activeTab)}
                </motion.div>
            </div>

            <div className='flex items-center gap-5 mt-5 lg:mt-10'>
                <Button text="About More" />
                <div className='flex items-center gap-2'>
                    <FiPhoneCall className='text-lg text-red-600' />
                    <a href='tel:+883426739485' className='font-roboto text-lg font-heavy text-[#0A1425]'>
                        +88 3426 739 485
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Tab;
