import { GoMail } from "react-icons/go";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";
import background from '../../assets/img/footer/bg.png';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Partial Blur Effect with Gradient Overlay */}
            <div className="absolute inset-0  bg-black/80"></div>

            {/* Content Wrapper */}
            <div className="relative max-w-screen-xl mx-auto px-6 py-24 ">
                <h1 className="font-bebas text-[40px] lg:text-[62px] text-center text-white">
                    We’re ready to give you the best dining experiences
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-14">
                    {/* Opening Hours */}
                    <div className="flex flex-col items-center gap-3 text-white">
                        <IoTimeOutline className="text-2xl text-[#FEBF00]" />
                        <h1 className="font-bebas text-[24px] uppercase">Opening hours</h1>
                        <div className="text-center">
                            <h2 className="text-[16px] font-roboto">Monday - Sunday</h2>
                            <h2 className="text-[16px] font-roboto">9:00 AM to 11:30 PM</h2>
                        </div>
                    </div>

                    {/* Let's Talk */}
                    <div className="flex flex-col items-center gap-3 text-white">
                        <PiPhoneCall className="text-2xl text-[#FEBF00]" />
                        <h1 className="font-bebas text-[24px] uppercase">Let's Talk</h1>
                        <div className="text-center">
                            <h2 className="text-[16px] font-roboto">
                                Phone:
                                <a
                                    href="tel:+18002224545"
                                    className=" hover:underline"
                                >
                                    1-800-222-4545
                                </a>
                            </h2>
                            <h2 className="text-[16px] font-roboto">
                                Fax:
                                <a
                                    href="tel:+18002224545"
                                    className=" hover:underline"
                                >
                                    1-800-222-4545
                                </a>
                            </h2>


                        </div>
                    </div>

                    {/* Book a Table */}
                    <div className="flex flex-col items-center gap-3 text-white">
                        <GoMail className="text-2xl text-[#FEBF00]" />
                        <h1 className="font-bebas text-[24px] uppercase">Book a Table</h1>
                        <div className="text-center">

                            <h2 className="text-[16px] font-roboto">
                                Email:
                                <a
                                    href="mailto: demo@website.com"
                                    className="ms-1 hover:underline"
                                >
                                    demo@website.com
                                </a>
                            </h2>
                            <h2 className="text-[16px] font-roboto">
                                Support:
                                <a
                                    href="mailto:support@website.com"
                                    className="ms-1 hover:underline"
                                >
                                    support@website.com
                                </a>
                            </h2>

                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center gap-3 text-white">
                        <IoLocationOutline className="text-2xl text-[#FEBF00]" />
                        <h1 className="font-bebas text-[24px] uppercase">Our Address</h1>
                        <div className="text-center">
                            <h2 className="text-[16px] font-roboto">123 Street New York City, United</h2>
                            <h2 className="text-[16px] font-roboto">States of America.</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="flex items-center gap-4 text-white">
                        <div className="border p-3 rounded-full">
                            <FaFacebook />
                        </div>
                        <div className="border p-3 rounded-full">
                            <FaSquareXTwitter />
                        </div>
                        <div className="border p-3 rounded-full">
                            <FaInstagramSquare />
                        </div>
                        <div className="border p-3 rounded-full">
                            <FaLinkedin />
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="text-white font-roboto font-heavy text-[21px]">© 2023 All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
