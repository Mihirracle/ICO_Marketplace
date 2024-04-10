// import React from "react";
// import { BsArrowRight } from "react-icons/bs";

// const About = () => {
//   return (
//     <section id="about" className="small_pt">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6 col-md-12 col-sm-12">
//             <div className="text_md_center">
//               <img
//                 src="assets/images/about_img2.png"
//                 alt=""
//                 data-animation="zoomIn"
//                 data-animation-delay="0.2s"
//                 className="animation"
//               />
//             </div>
//           </div>

//           <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
//             <div className="title_default_light title_border">
//               <h4
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 About the Cryptocash
//               </h4>
//               <p
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.4s"
//               >
//                 Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Molestias minima quas
//                 fugit, officia eveniet sunt est eum, cum blanditiis dicta atque architecto illo laudantium consequatur. Nesciunt
//                 architecto ratione deleniti eligendi?
//               </p>
//               <p
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.8s"
//               >
//                 Lorem ipsum dolor sit amet consectetur,
//                 adipisicing elit. Molestias minima quas
//                 fugit, officia eveniet sunt est eum, cum blanditiis dicta atque architecto illo laudantium consequatur. Nesciunt
//               </p>
//             </div>

//             <a 
//             href="#" 
//             className="btn btn-default btn-radius video animation"
//             data-animation="fadeInUp"
//             data-animation-delay="1s"
//             >
//               Less Start <BsArrowRight />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// };

// export default About;

import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="small_pt">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text_md_center">
              <img
                src="assets/images/about_img2.png"
                alt=""
                data-animation="zoomIn"
                data-animation-delay="0.2s"
                className="animation"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
            <div className="title_default_light title_border">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                About the Cryptocash
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Molestias minima quas
                fugit, officia eveniet sunt est eum, cum blanditiis dicta atque architecto illo laudantium consequatur. Nesciunt
                architecto ratione deleniti eligendi?
              </p>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Molestias minima quas
                fugit, officia eveniet sunt est eum, cum blanditiis dicta atque architecto illo laudantium consequatur. Nesciunt
              </p>
            </div>

            <a 
            href="#" 
            className="btn btn-default btn-radius video animation"
            data-animation="fadeInUp"
            data-animation-delay="1s"
            >
              Less Start <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
