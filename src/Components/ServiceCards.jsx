import React from "react";
import { Fade } from "react-awesome-reveal";

const ServiceCards = () => {
  const ServiceCardsData = [
    {
      service_id: 1,
      service_title: "Service 1",
      service_description:
        "Dell Spectrum 180 Degree Rotate Special and limited Model Core i7 8th Genertion 8GB RAM 256GB SSD.",
      service_img_url: "./service1.jpg",
    },
    {
      service_id: 2,
      service_title: "Service 2",
      service_description:
        "Dell Latitude E5470 Core i5 6th Gen 14inch FHD 8GB RAM 256GB SSD.",
      service_img_url: "./service2.jpg",
    },
    {
      service_id: 3,
      service_title: "Service 3",
      service_description:
        "Dell Latitude E5480 core i7 6th Gen 14inch FHD 8GB RAM 256GB SSD.",
      service_img_url: "./service3.jpg",
    },
    {
      service_id: 4,
      service_title: "Service 4",
      service_description:
        "Lenovo Thick pad Slim Model core i4 8th Gen 8GB RAM 256GB SSD.",
      service_img_url: "./service4.jpg",
    },
    {
      service_id: 5,
      service_title: "Service 5",
      service_description:
        "Dell Ellite Book core i7 8th Gen 14inch FHD 8GB RAM 256GB SSD 4GB Graphic Card Installed.",
      service_img_url: "./service5.jpg",
    },
    {
      service_id: 6,
      service_title: "Service 6",
      service_description:
        "HP Pavilion, Elite Intel core i9 12th Generation 32GB RAM 1TB SSD.",
      service_img_url: "./service6.jpg",
    },
  ];

  return (
    <Fade duration={4000}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-10">
        {ServiceCardsData.map((service) => (
          <div
            key={service.service_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="card-img border-4 border-black rounded-t-lg overflow-hidden">
              <img
                src={service.service_img_url}
                alt={service.service_title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 text-gray-800">
              <h3 className="text-2xl font-bold mb-2">{service.service_title}</h3>
              <p className="text-sm">{service.service_description}</p>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default ServiceCards;
