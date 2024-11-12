import { Link } from "react-router-dom";
import rightImg from '../../assets/img/banner/image1.png';
import flower from '../../assets/img/banner/Vector.png'
import Button from "../button/Button";
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
        <div className="w-full z-30  mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 uppercase tracking-wider leading-snug">
            <span>Taste the authentic</span>
            <br />
            saudi cuisine
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white mb-6">
            Among the best Saudi chefs in the world, serving you something beyond flavor.
          </p>
          <Link to='/'>
            <Button text="Explore menu " />
          </Link>
        </div>

        {/* Right Image with Circular Badge */}
        <div className="w-full relative flex justify-center mt-6 md:mt-0">
          <img
            src={rightImg}
            alt="Saudi Cuisine"
            className="w-full h-auto object-cover z-10"
          />

          {/* Circular "Today Offer" Badge */}
          <div className="absolute z-10 bottom-3 right-5 md:-bottom-3 md:-right-5 xl:-bottom-1 xl:-right-8 bg-[#FEBF00] text-[#0A1425] font-bold w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg">
            <div className="border-2 border-dashed border-[#A61D13] w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center">
              <span className="text-center text-sm sm:text-lg md:text-xl font-bebas font-heavy ">
                Today<br />Offer
              </span>
            </div>
          </div>

          <div className="absolute w-10 -top-6 right-0 xl:-top-9 xl:-right-7 lg:w-11">
            <img src={flower} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
