// import React from "react";

// const Footer = () => {
//   const footerList = ["Cryptocash", "How its work", "Token", "FAQ", "Contact"];
//   return (
//     <footer>
//       <div
//         className="top_footer bg_light_dark"
//         data-z-index="1"
//         data-parallax="scroll"
//         data-image-src="assets/images/footer_bg.png"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-12">
//               <div
//                 className="footer_logo md-3 animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 <a href="#home_section" className="page-scroll">
//                   <img src="assets/images/footer_logo.png" alt="footer_logo" />
//                 </a>
//               </div>

//               <div className="footer_desc">
//                 <p
//                   className="animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.4s"
//                 >
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   ecwcewcec
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   cdcdvdcscdscsdcc.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
//               <h4
//                 className="footer_title border_title animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Quick Links
//               </h4>

//               <ul className="footer_link">
//                 {footerList.map((list, i) => (
//                   <li
//                     className="animation"
//                     data-animation="fadeInUp"
//                     data-animation-delay={`0.${i + 2}s`}
//                   >
//                     <a href="#">{list}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
//               <div className="newsletter_form">
//                 <h4 className="footer_title border_title animation">
//                   Newsletter
//                 </h4>
//                 <p
//                   className="animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.2s"
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto neque voluptate. Perferendis nemo, nisi laborum, velit sequi totam fuga, ducimus architecto qui natus
//                   voluptatem illum dolore ratione consectetur?
//                 </p>

//                 <form
//                   action="#"
//                   className="subscribe_form animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.4s"
//                   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
//                 >
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter Email Address"
//                     className="input-rounded"
//                   />

//                   <button
//                     type="submit"
//                     title="Subscribe"
//                     className="btn-info"
//                     name="submit"
//                     value="Submit"
//                     style={{ marginTop: '3px' }} // Adjust this value as needed
//                   >
//                     Subscribe
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bottom_footer">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <p className="copyright">
//                 Copyright &copy; 2024 All Rights Reserved by @LOLCoin Miners
//               </p>
//             </div>

//             <div className="col-md-6">
//               <ul className="list_none footer_menu">
//                 <li>
//                   <a href="#">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Terms & Conditons</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash", "How its work", "Token", "FAQ", "Contact"];
  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo md-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img src="assets/images/footer_logo.png" alt="footer_logo" />
                </a>
              </div>

              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>

              <ul className="footer_link">
                {footerList.map((list, i) => (
                  <li
                    key={i}
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i + 2}s`}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_form">
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto neque voluptate.
                </p>

                <form
                  action="#"
                  className="subscribe_form animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                >
                  <input
                    type="text"
                    required
                    placeholder="Enter Email Address"
                    className="input-rounded"
                  />

                  <button
                    type="submit"
                    title="Subscribe"
                    className="btn-info"
                    name="submit"
                    value="Submit"
                    style={{ marginTop: '3px' }} // Adjust this value as needed
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                Copyright &copy; 2024 All Rights Reserved by @LOLCoin Miners
              </p>
            </div>

            <div className="col-md-6">
              <ul className="list_none footer_menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditons</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




//CLAUDE CODE FOR INVALID KEY PROP

// import React from "react";

// const Footer = () => {
//   const footerList = ["Cryptocash", "How its work", "Token", "FAQ", "Contact"];
//   return (
//     <footer>
//       <div
//         className="top_footer bg_light_dark"
//         data-z-index="1"
//         data-parallax="scroll"
//         data-image-src="assets/images/footer_bg.png"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4 col-md-12">
//               <div
//                 className="footer_logo md-3 animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 <a href="#home_section" className="page-scroll">
//                   <img src="assets/images/footer_logo.png" alt="footer_logo" />
//                 </a>
//               </div>

//               <div className="footer_desc">
//                 <p
//                   className="animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.4s"
//                 >
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   ecwcewcec
//                   eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   cdcdvdcscdscsdcc.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
//               <h4
//                 className="footer_title border_title animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Quick Links
//               </h4>

//               <ul className="footer_link">
//                 {footerList.map((list, i) => (
//                   <li
//                     key={i} // Added key prop
//                     className="animation"
//                     data-animation="fadeInUp"
//                     data-animation-delay={`0.${i + 2}s`}
//                   >
//                     <a href="#">{list}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
//               <div className="newsletter_form">
//                 <h4 className="footer_title border_title animation">
//                   Newsletter
//                 </h4>
//                 <p
//                   className="animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.2s"
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas architecto neque voluptate. Perferendis nemo, nisi laborum, velit sequi totam fuga, ducimus architecto qui natus
//                   voluptatem illum dolore ratione consectetur?
//                 </p>

//                 <form
//                   action="#"
//                   className="subscribe_form animation"
//                   data-animation="fadeInUp"
//                   data-animation-delay="0.4s"
//                 >
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter Email Address"
//                     className="input-rounded"
//                   />

//                   <button
//                     type="submit"
//                     title="Subscribe"
//                     className="btn-info"
//                     name="submit"
//                     value="Submit"
//                   >
//                     Subscribe
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bottom_footer">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <p className="copyright">
//                 Copyright &copy; 2024 All Rights Reserved by @LOLCoin Miner
//               </p>
//             </div>

//             <div className="col-md-6">
//               <ul className="list_none footer_menu">
//                 <li>
//                   <a href="#">Privacy Policy</a>
//                 </li>
//                 <li>
//                   <a href="#">Terms & Conditons</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
