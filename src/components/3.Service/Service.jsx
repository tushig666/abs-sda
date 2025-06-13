import React from "react";
import "./Service.css";

const Service = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Building responsive and modern websites using the latest technologies.",
    },
    {
      icon: "fa-solid fa-mobile-alt",
      title: "Mobile App Development",
      description: "Creating user-friendly mobile applications for both Android and iOS platforms.",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Cloud Services",
      description: "Offering cloud solutions for scalable and secure data management.",
    },
  ];
  return (
    <section id="service" className="service">
      <h2 className="service-title">Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service_item" key={index}>
            <div className="service_item_content">
              <img src={`https://via.placeholder.com/100?text=${service.title}`} alt={service.title} className="service_image" />
              <h3 className="service_item_title">{service.title}</h3>
              <p className="service_item_description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Service;