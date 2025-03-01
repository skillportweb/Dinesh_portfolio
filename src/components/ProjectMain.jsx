// import React from "react";
// import { FaGithub, FaGlobe } from "react-icons/fa"; 

// export default function ProjectMain() {
//   return (
//     <div className="projects-section mb-5">
//       <div className="container">
//         <h2 className="text-center">Projects</h2>
//         <div className="row">
//           {[
//             { img: "assets/projects/img1.png", name: "Project One", github: "#", live: "#" },
//             { img: "assets/projects/img2.png", name: "Project Two", github: "#", live: "#" },
//             { img: "assets/projects/img1.png", name: "Project Three", github: "#", live: "#" },
//             { img: "assets/projects/img1.png", name: "Project One", github: "#", live: "#" },
//             { img: "assets/projects/img2.png", name: "Project Two", github: "#", live: "#" },
//             { img: "assets/projects/img1.png", name: "Project Three", github: "#", live: "#" },
//             { img: "assets/projects/img1.png", name: "Project One", github: "#", live: "#" },
//             { img: "assets/projects/img2.png", name: "Project Two", github: "#", live: "#" },
//             { img: "assets/projects/img1.png", name: "Project Three", github: "#", live: "#" }
//           ].map((project, index) => (
//             <div className="col-lg-4" key={index}>
//               <div className="project-card mb-4">
//                 <div className="projects-img">
//                   <img src={project.img} alt={project.name} />
//                   <div className="overlay">
//                     <h4>{project.name}</h4>
//                     <div className="d-flex gap-3 mt-2"> {/* Added gap */}
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-dark">
//                           <FaGithub className="me-2" /> GitHub
//                         </button>
//                       </a>
//                       <a href={project.live} target="_blank" rel="noopener noreferrer">
//                         <button className="btn btn-primary">
//                           <FaGlobe className="me-2" /> Live Demo
//                         </button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-1">
//   <a className="text-decoration-none text-black" href="#">See more <i class="fa-solid fa-arrow-right ms-1"></i></a>
// </div>

//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function ProjectMain() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { img: "assets/projects/img1.png", name: "Project One", github: "#", live: "#" },
    { img: "assets/projects/img2.png", name: "Project Two", github: "#", live: "#" },
    { img: "assets/projects/img1.png", name: "Project Three", github: "#", live: "#" },
    { img: "assets/projects/img1.png", name: "Project Four", github: "#", live: "#" },
    { img: "assets/projects/img2.png", name: "Project Five", github: "#", live: "#" },
    { img: "assets/projects/img1.png", name: "Project Six", github: "#", live: "#" },
    { img: "assets/projects/img1.png", name: "Project Seven", github: "#", live: "#" },
    { img: "assets/projects/img2.png", name: "Project Eight", github: "#", live: "#" },
    { img: "assets/projects/img1.png", name: "Project Nine", github: "#", live: "#" }
  ];

  // Show only 6 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="projects-section mb-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {visibleProjects.map((project, index) => (
            <div className="col-lg-4" key={index}>
              <div className="project-card mb-4">
                <div className="projects-img">
                  <img src={project.img} alt={project.name} />
                  <div className="overlay">
                    <h4>{project.name}</h4>
                    <div className="d-flex gap-3 mt-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-dark">
                          <FaGithub className="me-2" /> GitHub
                        </button>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">
                          <FaGlobe className="me-2" /> Live Demo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="text-center mt-3">
          <a 
            className="btn btn-outline-dark" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"} <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
