import Banner from "../components/home/Banner";
import PopularFood from "../components/home/PopularFood";
import SubBanner from "../components/home/SubBanner";


const Home = () => {
    return (
        <div >
            <Banner />
            <SubBanner />
            <PopularFood/>
        </div>
    );
};

export default Home;