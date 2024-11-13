import Banner from "../components/home/Banner";
import CustomerReview from "../components/home/CustomerReview";
import PopularFood from "../components/home/PopularFood";
import SubBanner from "../components/home/SubBanner";
import TableBook from "../components/home/TableBook";


const Home = () => {
    return (
        <div >
            <Banner />
            <SubBanner />
            <PopularFood/>
            <TableBook/>
            <CustomerReview/>
        </div>
    );
};

export default Home;