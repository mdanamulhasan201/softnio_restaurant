import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/shared/Navbar";
import Footer from "../assets/components/shared/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;