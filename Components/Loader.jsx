// import React from 'react';
// import styled from 'styled-components';
// import { SpinningCircles } from 'react-loading-icons';

// const LoaderContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999; /* Ensure the loader is on top */
// `;

// const Loader = () => {
//   return (
//     <LoaderContainer>
//       <SpinningCircles
//         stroke="#8a2be2"
//         strokeOpacity={1}
//         speed={1.5}
//       />
//     </LoaderContainer>
//   );
// };

// export default Loader;


// import React from 'react';
// import Image from 'next/image';
// import logo from '../public/assets/images/logo.png';

// const Loader = () => {
//   return (
//     <section
//       id="loader"
//       className="small_pb"
//       style={{
//         backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background color with 80% opacity
//         height: '100vh' // Full height of the viewport
//       }}
//     >
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
//             <div className="title_default_light title_border text-center">
//               <Image src={logo} alt="Logo" width={200} height={200} />
//               <h4
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.4s"
//                 style={{ color: '#fff' }} // Text color
//               >
//                 Loading...
//               </h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Loader;

import React from 'react'

const Loader = () => {
  return (
    <div>Loader</div>
  )
}

export default Loader