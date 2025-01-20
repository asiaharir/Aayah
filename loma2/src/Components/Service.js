import React from "react";
import "./Service.css";
import serviceImage1 from "./assets/f0517.jpg";
import serviceImage2 from "./assets/5fe.jpg";
import serviceImage3 from "./assets/2e51.jpg";
import serviceImage4 from "./assets/65.jpg";
import serviceImage5 from "./assets/7cd.jpg";
import serviceImage6 from "./assets/4b.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Branding",
      description: "Branding is the process of creating a unique identity for a business, product, or service that sets it apart from competitors",
      // adminDate: "By Admin - Jan 10, 2025",
      image: serviceImage1,
    },
    {
      id: 2,
      title: "Social media marketing",
      description: " is the practice of using social media platforms to promote a brand, product, or service.",
      // adminDate: "By Admin - Jan 8, 2025",
      image: serviceImage2,
    },
    {
      id: 3,
      title: "Analytics $ Reporting",
      description: " involve gathering, analyzing, and interpreting data to assess the effectiveness of marketing efforts, particularly in digital marketing.",
      // adminDate: "By Admin - Jan 5, 2025",
      image: serviceImage3,
    },
    {
      id: 4,
      title: "Video Production",
      description: "refers to the process of creating video content, from conceptualization and scripting to filming, editing, and post-production.",
      // adminDate: "By Admin - Jan 3, 2025",
      image: serviceImage4,
    },
    {
      id: 5,
      title: "Merketing consultant",
      description: " is a professional who provides expert advice and strategies to businesses to help them improve their marketing efforts.",
      // adminDate: "By Admin - Jan 1, 2025",
      image: serviceImage5,
    },
    {
      id: 6,
      title: "Digital Adverstising Campaigns",
      description: "are marketing efforts conducted through digital platforms to promote a product, service, or brand to a targeted audience",
      // adminDate: "By Admin - Dec 30, 2024",
      image: serviceImage6,
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="admin-date">{service.adminDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Service.css";

// const Services = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     // Fetch the services from the API
//     axios.get("http://localhost:8000/api/services/")  // Adjust the URL according to your API endpoint
//       .then(response => {
//         setServices(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the services:", error);
//       });
//   }, []);

//   return (
//     <section id="services" className="services">
//       <h2>Our Services</h2>
//       <div className="services-container">
//         {services.length > 0 ? (
//           services.map((service) => (
//             <div key={service.id} className="service-card">
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="service-image"
//               />
//               <div className="service-info">
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//                 <p className="price">{service.price}</p>
//                 <p className="admin-date">{service.admin_date}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading services...</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services;
