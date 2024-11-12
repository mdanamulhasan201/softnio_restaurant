import { Link } from "react-router-dom";
import rightImg from '../../assets/img/banner/image1.png';

// Banner Component
const Banner = () => {
  return (
    <div
      className="w-full md:h-screen flex lg:items-center relative" 
      style={{
        background: 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)',
        paddingTop: '80px', 
      }}
    >
      <div className="max-w-screen-xl py-5 md:py-0 mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left Content */}
        <div className="w-full z-30 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 uppercase tracking-wider leading-snug">
            <span>Taste the authentic</span>
            <br />
            saudi cuisine
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white mb-6">
            Among the best Saudi chefs in the world, serving you something beyond flavor.
          </p>
          <Link
            to="/menu"
            className="bg-[#FEBF00] text-[#0A1425] py-3 px-8 font-bold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Explore Menu
          </Link>
        </div>

        {/* Right Image with Circular Badge */}
        <div className="w-full relative flex justify-center mt-6 md:mt-0">
          <img
            src={rightImg}
            alt="Saudi Cuisine"
            className="w-full h-auto object-cover"
          />

          {/* Circular "Today Offer" Badge */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-0 md:-right-1 xl:-right-8 bg-[#FEBF00] text-[#0A1425] font-bold w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg">
            <div className="border-2 border-dashed border-[#A61D13] w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center">
              <span className="text-center text-xl sm:text-2xl md:text-3xl font-bebas font-heavy">
                Today<br />Offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
