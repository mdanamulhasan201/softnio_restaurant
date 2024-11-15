import { Fragment } from "react";
import Banner from "../components/home/Banner";
import CustomerReview from "../components/home/CustomerReview";
import PopularFood from "../components/home/PopularFood";
import SubBanner from "../components/home/SubBanner";
import TableBook from "../components/home/TableBook";


const Home = () => {
    return (
        <Fragment >
            <Banner />
            <SubBanner />
            <PopularFood/>
            <TableBook/>
            <CustomerReview/>
        </Fragment>
    );
};

export default Home;