import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#333] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        
        <div>
          <p className="text-2xl font-semibold underline mb-4">Links</p>
          <ul className="space-y-2">
            <li className="hover:text-red-400 transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-red-400 transition duration-300 cursor-pointer">About</li>
            <li className="hover:text-red-400 transition duration-300 cursor-pointer">Services</li>
            <li className="hover:text-red-400 transition duration-300 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-semibold underline mb-4">Social Links</p>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Twitter</li>
            <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Facebook</li>
          </ul>
        </div>

        <div>
          <p className="text-2xl font-semibold underline mb-4">About</p>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores? 
            We are committed to delivering quality services with trust and dedication.
          </p>
        </div>
      </div>
      
      <div className="mt-10 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Skyper's — All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
