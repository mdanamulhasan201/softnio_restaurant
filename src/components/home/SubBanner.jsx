import React from 'react';
import bannerImg from '../../assets/img/banner/subBanner.png';
import CustomCircularProgress from '../CircularProgress/CircularProgress';

const SubBanner = () => {
    return (
        <div className='bg-red-50'>
            <div className='max-w-screen-xl py-[120px] mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    {/* Left Side: Image with Overlayed Content */}
                    <div className='w-full md:w-1/2 relative'>
                        {/* Overlay Container */}
                        <div className='absolute top-8 left-8 bg-white z-10 rounded-2xl'>
                            <div className='flex justify-between items-center'>
                                {/* Custom Circular Progress */}
                                <CustomCircularProgress value={80} />
                                <p className='mr-5 text-gray-800 font-strong font-opensans'>Market <br /> Experiences</p>
                            </div>
                        </div>
                        {/* Background Image */}
                        <img className='w-full' src={bannerImg} alt="Banner" />
                    </div>

                    {/* Right Side: Content */}
                    <div className='w-full md:w-1/2'>
                        <p>This is content</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;
