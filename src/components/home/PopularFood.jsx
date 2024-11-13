import Carousel from "../Carousel/Carousel";
import sideImg from '../../assets/img/popularFood/sideimg.png';

const PopularFood = () => {
    return (
        <div className="bg-[#FBF7F2] relative">
            <div className="max-w-screen-xl mx-auto px-6 py-20">
                <Carousel />
            </div>

            <div className="hidden 2xl:block absolute bottom-20 w-48">
                <img className="w-full" src={sideImg} alt="" />
            </div>

        </div>
    );
};

export default PopularFood;