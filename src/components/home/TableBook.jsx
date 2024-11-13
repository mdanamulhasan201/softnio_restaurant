import React, { useState } from 'react';
import bg from '../../assets/img/banner/bookingBanner.jfif';
import Button from '../button/Button';
import { toast } from 'react-hot-toast';

const TableBook = () => {
    // Step 1: Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        totalPeople: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.date || !formData.totalPeople) {
            setError('Please fill all required fields.');
            return;
        }

        setError('');
        setIsSubmitted(true);

        // Show toast notification
        toast.success('Booking successfully submitted!');

        console.log('Form submitted:', formData);

        // Clear the form fields
        setFormData({
            name: '',
            email: '',
            date: '',
            totalPeople: '',
            message: '',
        });
    };

    return (
        <div
            className="bg-cover bg-no-repeat w-full h-[788px]"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center">
                {/* Content Section */}
                <div className="w-full md:w-1/2 py-14">
                    <div className="mb-10">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-700"></div>
                            <p className="text-[#BD1F17] text-[16px] lg:text-[20px] font-roboto font-bold">Book Now</p>
                        </div>
                        <h1 className="text-[40px] lg:text-[62px] text-white font-bebas font-bold uppercase">
                            Book Your Table
                        </h1>
                        <p className="text-[#F7F8F9] font-roboto text-[16px]">
                            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                        </p>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 justify-center items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="col-span-1">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent border text-white outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your Name *"
                                />
                            </div>

                            <div className="col-span-1">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent border text-white outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            <div className="col-span-1">
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent border text-white outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Select Reservation Date"
                                />
                            </div>

                            <div className="col-span-1">
                                <input
                                    type="number"
                                    name="totalPeople"
                                    value={formData.totalPeople}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md bg-transparent border text-white outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Total People"
                                    min="1"
                                />
                            </div>
                        </div>

                        <div className="col-span-1">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-transparent border text-white outline-none focus:ring-2 focus:ring-red-500"
                                rows="5"
                                placeholder="Message"
                            ></textarea>
                        </div>

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <div className="col-span-1">
                            <Button text="Book Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TableBook;
