import React from 'react'
import { Fade } from "react-awesome-reveal";

const AboutSection = () => {
  return (
    <>
      <div className="about-section grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20 md:px-10 md:py-44">
        <Fade direction='left'>
          <div className="about-image">
            <img src="./about-img.png" alt="Aptech Pakistan Overview" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </Fade>

        <Fade direction='right'>
          <div className="about-text text-gray-800">
            <h2 className='font-bold text-3xl mb-4'>Aptech Pakistan</h2>
            <p className="leading-relaxed text-justify">
              Welcome to Aptech Pakistan, the premier institute for technical education in the country. We are dedicated to providing students with the knowledge and skills they need to succeed in the ever-evolving world of technology.
            </p>

            <p className='mt-4 leading-relaxed text-justify'>
              Our programs are designed to provide students with a rigorous and challenging learning experience. Our instructors are highly experienced and use the latest teaching methods and technologies to ensure the best possible learning experience.
            </p>
          </div>
        </Fade>
      </div>
    </>
  )
}

export default AboutSection;
