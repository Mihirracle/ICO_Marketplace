// import React from "react";

// const Service = () => {
//   const services = [
//     {
//       title: "Secure Storage",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon1.png"
//     },
//     {
//       title: "Mobile App",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon2.png"
//     },
//     {
//       title: "Exchange Service",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon3.png"
//     },
//     {
//       title: "Investment Project",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon4.png"
//     },
//     {
//       title: "Credit Card Use",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon5.png"
//     },
//     {
//       title: "Planning",
//       description:
//         "Secure your data with our encrypted storage service.",
//         icon: "/assets/images/service_icon6.png"
        
//     },
//   ];
//   return (
//     <section id="service" className="small_pb">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
//             <div className="title_default_light title_border text-center">
//               <h4
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Meet Our Solution for you
//               </h4>
//               <p
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, quasi, repellendus ipsa cumque, illum nobis 
//                 adipisci harum ipsum quaerat odit 
//                 aspernatur excepturi et. Iusto, quidem 
//                 cupiditate? In dicta beatae eos?
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {services.map((service, i) => (
//             <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
//               <div
//                 className="box_wrap text-center animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay={`0.${i + 1}s`}
//               >
//                 <img src={service.icon} alt={service.title} className="service_icon" />
//                 <h4>{service.title}</h4>
//                 <p>{service.description}</p>
//               </div>
//               </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;

import React from "react";

const Service = () => {
  const services = [
    {
      title: "Secure Storage",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon1.png"
    },
    {
      title: "Mobile App",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon2.png"
    },
    {
      title: "Exchange Service",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon3.png"
    },
    {
      title: "Investment Project",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon4.png"
    },
    {
      title: "Credit Card Use",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon5.png"
    },
    {
      title: "Planning",
      description:
        "Secure your data with our encrypted storage service.",
      icon: "/assets/images/service_icon6.png"
    },
  ];
  return (
    <section id="service" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet Our Solution for you
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, quasi, repellendus ipsa cumque, illum nobis 
                adipisci harum ipsum quaerat odit 
                aspernatur excepturi et. Iusto, quidem 
                cupiditate? In dicta beatae eos?
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 1}s`}
              >
                <img src={service.icon} alt={service.title} className="service_icon" />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

