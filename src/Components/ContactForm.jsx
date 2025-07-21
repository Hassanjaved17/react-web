import React from 'react';
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
    return (
        <Fade direction="right">
            <div className='mt-10 mb-10 px-4'>
                <p className='font-bold text-center text-3xl italic mb-6'>Contact Us</p>
                <form className='w-full max-w-lg mx-auto space-y-4'>
                    <div>
                        <label className='block font-semibold mb-1'>Name</label>
                        <input
                            type="text"
                            className='w-full border border-black rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block font-semibold mb-1'>Email</label>
                        <input
                            type="email"
                            className='w-full border border-black rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    <div>
                        <label className='block font-semibold mb-1'>Message</label>
                        <textarea
                            rows="4"
                            className='w-full border border-black rounded-2xl py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        ></textarea>
                    </div>

                    <input
                        type="submit"
                        value="Send Message"
                        className='bg-[#333] text-white px-5 py-2 rounded-xl hover:bg-black transition duration-300 cursor-pointer'
                    />
                </form>
            </div>
        </Fade>
    );
};

export default ContactForm;
