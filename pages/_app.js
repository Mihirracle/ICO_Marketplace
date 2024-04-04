import "../styles/globals.css";
import { StateContextProvider } from "../Context/index";
export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      <script src="assets/js/jquery-1.12.4.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
      <script src="assets/js/magnific-popup.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/parallax.js"></script>
      <script src="assets/js/jquery.countdown.min.js"></script>
      <script src="assets/js/particles.min.js"></script>
      <script src="assets/js/jquery.dd.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/spop.min.js"></script>
      <script src="assets/js/notification.js"></script>
      <script src="assets/js/scripts.js"></script>
      <script src="index.js"></script>
    </>
  );
};

// import React, { useState, useEffect } from 'react';
// import Loader from '../Components/Loader';
// import "../styles/globals.css";
// import { StateContextProvider } from "../Context/index";

// export default function App({ Component, pageProps }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulating a delay for fetching data or setting up the application
//     setTimeout(() => {
//       setIsLoading(false); // Set isLoading to false after the delay
//     }, 2000); // Adjust the delay time according to your needs
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <StateContextProvider>
//           <Component {...pageProps} />
//         </StateContextProvider>
//       )}

//       {/* Place your script tags here */}
//       <script src="assets/js/jquery-1.12.4.min.js"></script>
//       <script src="assets/bootstrap/js/bootstrap.min.js"></script>
//       <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
//       <script src="assets/js/magnific-popup.min.js"></script>
//       <script src="assets/js/waypoints.min.js"></script>
//       <script src="assets/js/parallax.js"></script>
//       <script src="assets/js/jquery.countdown.min.js"></script>
//       <script src="assets/js/particles.min.js"></script>
//       <script src="assets/js/jquery.dd.min.js"></script>
//       <script src="assets/js/jquery.counterup.min.js"></script>
//       <script src="assets/js/spop.min.js"></script>
//       <script src="assets/js/notification.js"></script>
//       <script src="assets/js/scripts.js"></script>
//       <script src="index.js"></script>
//     </>
//   );
// };

