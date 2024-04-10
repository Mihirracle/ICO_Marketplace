// import React from "react";

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "John Doe",
//       role: "Frontend Developer",
//       contribution:
//         "Responsible for developing the frontend of the project.",
//       imageUrl: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
//     },
//     {
//       name: "Jane Smith",
//       role: "Backend Developer",
//       contribution:
//         "Handles backend development tasks in the project.",
//       imageUrl: "jane_smith.jpg",
//     },
//     {
//       name: "Michael Johnson",
//       role: "UI/UX Designer",
//       contribution:
//         "Contributes to the UI/UX design aspects of the project.",
//       imageUrl: "michael_johnson.jpg",
//     },
//     // Add more team members as needed
//   ];

//   return (
//     <section id="team" className="small_pb">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
//             <div className="title_default_light title_border text-center">
//               <h4
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Meet Our Team
//               </h4>
//               <p
//                 className="animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay="0.2s"
//               >
//                 Get to know the talented individuals behind our project.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index + 1}
//               className="col-lg-4 col-md-6 col-sm-12"
//             >
//               <div
//                 className="box_wrap text-center animation"
//                 data-animation="fadeInUp"
//                 data-animation-delay={`0.${index + 1}s`}
//               >
//                 <img
//                   src={member.imageUrl}
//                   alt={member.name}
//                   className="team_member_image"
//                 />
//                 <h4>{member.name}</h4>
//                 <span>{member.role}</span>
//                 <p>{member.contribution}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Project Manager",
      contribution: "Responsible for developing the frontend of the project.",
      imageUrl: "/assets/images/team_img1.png",
    },
    {
      name: "Jane Smith",
      role: "Full Stack Developer",
      contribution: "Handles backend development tasks in the project.",
      imageUrl: "/assets/images/team_img2.png",
    },
    {
      name: "Michael Johnson",
      role: "Blockchain Developer",
      contribution: "Contributes to the UI/UX design aspects of the project.",
      imageUrl: "/assets/images/team_img3.png",
    },
    {
      name: "Eliza Brown",
      role: "UI/UX Designer",
      contribution: "Responsible for developing the frontend of the project.",
      imageUrl: "/assets/images/team_img4.png",
    },
    {
      name: "Julia White",
      role: "Advisor",
      contribution: "Responsible for developing the frontend of the project.",
      imageUrl: "/assets/images/team_img5.png",
    },
    {
      name: "David Smith",
      role: "Human Resource Manager",
      contribution: "Responsible for developing the frontend of the project.",
      imageUrl: "/assets/images/team_img6.png",
    },
  ];

  return (
    <section id="team" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Meet Our Team
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Get to know the talented individuals behind our project.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index + 1}
              className="col-lg-4 col-md-6 col-sm-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="box_wrap text-center animation">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="team_member_image"
                />
                <h4>{member.name}</h4>
                <span>{member.role}</span>
                <p>{member.contribution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

// import React from "react";
// import { motion } from "framer-motion";

// const Team = () => {
//   const teamMembers = [
//     {
//       name: "John Doe",
//       role: "Project Manager",
//       contribution: "Responsible for developing the frontend of the project.",
//       imageUrl: "/assets/images/team_img1.png",
//     },
//     {
//       name: "Jane Smith",
//       role: "Full Stack Developer",
//       contribution: "Handles backend development tasks in the project.",
//       imageUrl: "/assets/images/team_img2.png",
//     },
//     {
//       name: "Michael Johnson",
//       role: "Blockchain Developer",
//       contribution: "Contributes to the UI/UX design aspects of the project.",
//       imageUrl: "/assets/images/team_img3.png",
//     },
//     {
//       name: "Eliza Brown",
//       role: "UI/UX Designer",
//       contribution: "Responsible for developing the frontend of the project.",
//       imageUrl: "/assets/images/team_img4.png",
//     },
//     {
//       name: "Julia White",
//       role: "Advisor",
//       contribution: "Provides strategic guidance and advice for the project.",
//       imageUrl: "/assets/images/team_img5.png",
//     },
//     {
//       name: "David Smith",
//       role: "Human Resource Manager",
//       contribution: "Oversees human resource operations and team management.",
//       imageUrl: "/assets/images/team_img6.png",
//     },
//   ];

//   return (
//     <section id="team" className="team-section">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
//             <div className="title_default_light title_border text-center">
//               <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
//                 Meet Our Team
//               </h4>
//               <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
//                 Get to know the talented individuals behind our project.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index + 1}
//               className="col-lg-4 col-md-6 col-sm-12"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <div className="team-member-card">
//                 <img
//                   src={member.imageUrl}
//                   alt={member.name}
//                   className="team-member-image"
//                 />
//                 <div className="team-member-info">
//                   <h4>{member.name}</h4>
//                   <span>{member.role}</span>
//                   <p>{member.contribution}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;

