// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Faq = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "How can I buy the token?",
//       answer: "You can buy the token by visiting our 'Buy Token Now!' section and following the instructions provided.",
//     },
//     {
//       id: 2,
//       question: "What payment methods are accepted?",
//       answer: "We accept Bitcoin, Ethereum, Litecoin, and Ripple as payment methods.",
//     },
//     {
//       id: 3,
//       question: "Can I transfer my tokens to another wallet?",
//       answer: "Yes, you can transfer your tokens to another wallet. Ensure the recipient's wallet is compatible.",
//     },
//     {
//       id: 4,
//       question: "How secure is your platform?",
//       answer: "Our platform employs state-of-the-art security measures, including encryption and smart contract protocols, to ensure the safety of your assets.",
//     },
//     // Add more FAQs as needed
//   ];

//   const toggleAccordion = (id) => {
//     setSelectedId(selectedId === id ? null : id);
//   };

//   const accordionVariants = {
//     open: { opacity: 1, height: "auto" },
//     collapsed: { opacity: 0, height: 0 }
//   };

//   return (
//     <section className="faq-section" style={{ background: "#000", padding: "40px 0" }}>
//       <div className="container">
//         <div className="title_default_light title_border text-center">
//           <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Frequently Asked Questions</h4>
//           <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
//             Have questions? We have compiled a list of questions and answers to help you.
//           </p>
//         </div>
//         {faqs.map((faq, index) => (
//           <motion.div 
//             key={faq.id} 
//             className="faq-item" 
//             style={{ 
//               marginBottom: "15px", 
//               borderBottom: "1px solid #fff", 
//               paddingBottom: "15px",
//               color: "#fff"
//             }}
//           >
//             <motion.header
//               initial={false}
//               animate={{ backgroundColor: selectedId === faq.id ? "#333" : "transparent" }}
//               onClick={() => toggleAccordion(faq.id)}
//               style={{
//                 padding: "20px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 userSelect: "none",
//                 color: "#fff",
//                 border: "1px solid #fff"
//               }}
//             >
//               <h4>{`${index + 1}. ${faq.question}`}</h4>
//             </motion.header>
//             <AnimatePresence initial={false}>
//               {selectedId === faq.id && (
//                 <motion.div
//                   key="content"
//                   initial="collapsed"
//                   animate="open"
//                   exit="collapsed"
//                   variants={accordionVariants}
//                   transition={{ duration: 0.8 }}
//                   style={{ overflow: "hidden", padding: "20px" }}
//                 >
//                   <p>{faq.answer}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Faq;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Faq = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "How can I buy the token?",
//       answer: "You can buy the token by visiting our 'Buy Token Now!' section and following the instructions provided.",
//     },
//     {
//       id: 2,
//       question: "What payment methods are accepted?",
//       answer: "We accept Bitcoin, Ethereum, Litecoin, and Ripple as payment methods.",
//     },
//     {
//       id: 3,
//       question: "Can I transfer my tokens to another wallet?",
//       answer: "Yes, you can transfer your tokens to another wallet. Ensure the recipient's wallet is compatible.",
//     },
//     {
//       id: 4,
//       question: "How secure is your platform?",
//       answer: "Our platform employs state-of-the-art security measures, including encryption and smart contract protocols, to ensure the safety of your assets.",
//     },
//     // Add more FAQs as needed
//   ];

//   const toggleAccordion = (id) => {
//     setSelectedId(selectedId === id ? null : id);
//   };

//   const accordionVariants = {
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: { duration: 0.3, ease: "easeInOut" }, // Adjust duration and easing
//     },
//     collapsed: {
//       opacity: 0,
//       height: 0,
//       transition: { duration: 0.3, ease: "easeInOut" }, // Adjust duration and easing
//     },
//   };

//   return (
//     <section id="faq" className="faq-section" style={{ background: "#000", padding: "40px 0" }}>
//       <div className="container">
//         <div className="title_default_light title_border text-center">
//           <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
//             Frequently Asked Questions
//           </h4>
//           <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
//             Have questions? We have compiled a list of questions and answers to help you.
//           </p>
//         </div>
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={faq.id}
//             className="faq-item"
//             style={{
//               marginBottom: "15px",
//               borderBottom: "1px solid #fff",
//               paddingBottom: "15px",
//               color: "#fff",
//             }}
//           >
//             <motion.header
//               initial={false}
//               animate={{
//                 backgroundColor: selectedId === faq.id ? "#333" : "transparent",
//                 color: "#fff",
//                 fontWeight: selectedId === faq.id ? "bold" : "normal",
//               }}
//               onClick={() => toggleAccordion(faq.id)}
//               style={{
//                 padding: "20px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 userSelect: "none",
//                 border: "1px solid #fff",
//               }}
//             >
//               <h4>{`${index + 1}. ${faq.question}`}</h4>
//             </motion.header>
//             <AnimatePresence initial={false}>
//               {selectedId === faq.id && (
//                 <motion.div
//                   key="content"
//                   initial="collapsed"
//                   animate="open"
//                   exit="collapsed"
//                   variants={accordionVariants}
//                   style={{
//                     overflow: "hidden",
//                     padding: "20px",
//                     backgroundColor: "#333",
//                     borderRadius: "0 0 5px 5px",
//                   }}
//                 >
//                   <p>{faq.answer}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Faq;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Faq = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const faqs = [
//     {
//       id: 1,
//       question: "How can I buy the token?",
//       answer:
//         "You can buy the token by visiting our 'Buy Token Now!' section and following the instructions provided.",
//     },
//     {
//       id: 2,
//       question: "What payment methods are accepted?",
//       answer:
//         "We accept Bitcoin, Ethereum, Litecoin, and Ripple as payment methods.",
//     },
//     {
//       id: 3,
//       question: "Can I transfer my tokens to another wallet?",
//       answer:
//         "Yes, you can transfer your tokens to another wallet. Ensure the recipient's wallet is compatible.",
//     },
//     {
//       id: 4,
//       question: "How secure is your platform?",
//       answer:
//         "Our platform employs state-of-the-art security measures, including encryption and smart contract protocols, to ensure the safety of your assets.",
//     },
//     // Add more FAQs as needed
//   ];

//   const toggleAccordion = (id) => {
//     setSelectedId(selectedId === id ? null : id);
//   };

//   const accordionVariants = {
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//     collapsed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const headerVariants = {
//     open: {
//       backgroundColor: "#333",
//       color: "#fff",
//       fontWeight: "bold",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     closed: {
//       backgroundColor: "transparent",
//       color: "#fff",
//       fontWeight: "normal",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <section id="faq" className="faq-section" style={{ background: "#000", padding: "40px 0" }}>
//       <div className="container">
//         <div className="title_default_light title_border text-center">
//           <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
//             Frequently Asked Questions
//           </h4>
//           <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
//             Have questions? We have compiled a list of questions and answers to help you.
//           </p>
//         </div>
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={faq.id}
//             className="faq-item"
//             style={{
//               marginBottom: "15px",
//               borderBottom: "1px solid #fff",
//               paddingBottom: "15px",
//               color: "#fff",
//             }}
//           >
//             <motion.header
//               initial={false}
//               animate={selectedId === faq.id ? "open" : "closed"}
//               variants={headerVariants}
//               onClick={() => toggleAccordion(faq.id)}
//               style={{
//                 padding: "20px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 userSelect: "none",
//                 border: "1px solid #fff",
//               }}
//             >
//               <h4>{`${index + 1}. ${faq.question}`}</h4>
//             </motion.header>
//             <AnimatePresence initial={false}>
//               {selectedId === faq.id && (
//                 <motion.div
//                   key="content"
//                   initial="collapsed"
//                   animate="open"
//                   exit="collapsed"
//                   variants={accordionVariants}
//                   style={{
//                     overflow: "hidden",
//                     padding: "20px",
//                     backgroundColor: "#333",
//                     borderRadius: "0 0 5px 5px",
//                   }}
//                 >
//                   <p>{faq.answer}</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [selectedId, setSelectedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How can I buy the token?",
      answer:
        "You can buy the token by visiting our 'Buy Token Now!' section and following the instructions provided.",
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer:
        "We accept Bitcoin, Ethereum, Litecoin, and Ripple as payment methods.",
    },
    {
      id: 3,
      question: "Can I transfer my tokens to another wallet?",
      answer:
        "Yes, you can transfer your tokens to another wallet. Ensure the recipient's wallet is compatible.",
    },
    {
      id: 4,
      question: "How secure is your platform?",
      answer:
        "Our platform employs state-of-the-art security measures, including encryption and smart contract protocols, to ensure the safety of your assets.",
    },
    // Add more FAQs as needed
  ];

  const toggleAccordion = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const accordionVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const headerVariants = {
    open: {
      backgroundColor: "#333",
      color: "#fff",
      fontWeight: "bold",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      backgroundColor: "transparent",
      color: "#fff",
      fontWeight: "normal",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="faq" className="faq-section" style={{ background: "#000", padding: "40px 0" }}>
      <div className="container">
        <div className="title_default_light title_border text-center">
          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            Frequently Asked Questions
          </h4>
          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
            Have questions? We have compiled a list of questions and answers to help you.
          </p>
        </div>
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            className="faq-item"
            style={{
              marginBottom: "15px",
              borderBottom: "1px solid #fff",
              paddingBottom: "15px",
              color: "#fff",
            }}
          >
            <motion.header
              initial={false}
              animate={selectedId === faq.id ? "open" : "closed"}
              variants={headerVariants}
              onClick={() => toggleAccordion(faq.id)}
              style={{
                padding: "20px",
                borderRadius: "5px",
                cursor: "pointer",
                userSelect: "none",
                border: "1px solid #fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h4 style={{ margin: 0 }}>{`${index + 1}. ${faq.question}`}</h4>
            </motion.header>
            <AnimatePresence initial={false}>
              {selectedId === faq.id && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={accordionVariants}
                  style={{
                    overflow: "hidden",
                    padding: "20px",
                    backgroundColor: "#333",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .faq-item h4 {
          font-size: 1.2rem;
        }
        @media (max-width: 600px) {
          .faq-item {
            margin-bottom: 10px;
            padding-bottom: 10px;
          }
          .faq-item h4 {
            font-size: 1rem;
          }
          .faq-item header {
            padding: 15px;
          }
          .faq-item div {
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;

