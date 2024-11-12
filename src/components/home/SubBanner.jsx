
import bannerImg from '../../assets/img/banner/subBanner.png';
import CustomCircularProgress from '../CircularProgress/CircularProgress';
import Tab from '../Tab/Tab';
import fstdelivery from '../../assets/img/icon/Vector.png';
import dining from '../../assets/img/icon/Vector2.png'
import delivery from '../../assets/img/icon/Vector3.png'
import rightSideImg from '../../assets/img/about/rightside.png'

const SubBanner = () => {
    return (
        <div className='relative'>
            <div className="max-w-screen-xl py-10 xl:py-[120px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center lg:items-start gap-5 lg:gap-16">
                    {/* Left Side: Image with Overlayed Content */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Overlay Container */}
                        <div className="absolute top-8 left-8 bg-white z-10 rounded-2xl">
                            <div className="flex justify-between items-center">
                                {/* Custom Circular Progress */}
                                <CustomCircularProgress value={80} />
                                <p className="mr-5 text-[16px] text-gray-800 font-strong font-opensans">
                                    Market <br /> Experiences
                                </p>
                            </div>
                        </div>
                        {/* Background Image */}
                        <img className="w-full" src={bannerImg} alt="Banner" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-1/2">
                        <Tab />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8 lg:gap-20 items-start lg:items-center mt-16'>
                    <div className="flex items-center gap-3">
                        {/* Image container with background color, padding, rounded corners, and shadow */}
                        <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">
                            <img src={fstdelivery} alt="Fast Delivery" className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] " />
                        </div>

                        {/* Text content */}
                        <div>
                            <h1 className="text-[#0A1425] text-[24px] lg:text-[30px] font-bebas font-heavy">Fast Delivery</h1>
                            <p className="text-[#0A1425] text-[18px] lg:text-[20px] font-normal font-roboto">Within 30 minutes</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Image container with background color, padding, rounded corners, and shadow */}
                        <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">
                            <img src={dining} alt="absolute dining" className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px]" />
                        </div>

                        {/* Text content */}
                        <div>
                            <h1 className="text-[#0A1425] text-[24px] lg:text-[30px] font-bebas font-heavy">absolute dining</h1>
                            <p className="text-[#0A1425] text-[18px] lg:text-[20px] font-normal font-roboto">Best buffet restaurant</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* Image container with background color, padding, rounded corners, and shadow */}
                        <div className="bg-white p-4 rounded-full shadow-md flex items-center justify-center">
                            <img src={delivery} alt="pickup delivery" className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px]" />
                        </div>

                        {/* Text content */}
                        <div>
                            <h1 className="text-[#0A1425] text-[24px] lg:text-[30px] font-bebas font-heavy">pickup delivery</h1>
                            <p className="text-[#0A1425] text-[18px] lg:text-[20px] font-normal font-roboto">Grab your food order</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='hidden 2xl:block absolute top-80 right-0 w-48'>
                <img src={rightSideImg} alt="" />
            </div>

        </div>
    );
};

export default SubBanner;
