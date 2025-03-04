import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function ProjectMain() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { img: "assets/projects/img1.png", name: "JBmilitary web", github: "https://github.com/skillportweb/jbmilitary-frontend", live: "https://jbmilitary-frontend.vercel.app/" },
    { img: "assets/projects/img2.png", name: "Webpristine web", github: "https://github.com/skillportweb/webpristine-web", live: "https://webpristine-web.vercel.app/" },
    { img: "assets/projects/img3.png", name: "JBmilitary-admin", github: "https://github.com/skillportweb/jbmilitary-admin", live: "https://jbmilitary-admin-wheat.vercel.app/" },
    { img: "assets/projects/img4.png", name: "Techhut Academy", github: "https://github.com/skillportweb/techhut", live: "https://techhut.vercel.app/" },
    { img: "assets/projects/img5.png", name: "Hunter-valley-audiology", github: "https://github.com/skillportweb/hunter-valley-audiology", live: "https://hunter-valley-audiology-five.vercel.app/" },
    { img: "assets/projects/img6.png", name: "Ute", github: "https://github.com/skillportweb/Ute", live: "https://ute-gamma.vercel.app/" },
    { img: "assets/projects/img7.png", name: "Transelectric Trade", github: "https://github.com/skillportweb/Transelectric-web", live: "https://transelectric-web.vercel.app/" },
    { img: "assets/projects/img8.png", name: "TG linen", github: "https://github.com/skillportweb/TG-linen", live: "https://tg-linen.vercel.app/" },
    { img: "assets/projects/img9.png", name: "Supermarket madina", github: "https://github.com/skillportweb/supermarket-madina", live: "https://supermarket-madina-snowy.vercel.app/" },
    { img: "assets/projects/img10.png", name: "Share-demo", github: "https://github.com/skillportweb/share-demo", live: "https://share-demo-weld.vercel.app/" },
    { img: "assets/projects/img11.png", name: "Pest control", github: "https://github.com/skillportweb/pest-control", live: "https://pest-control-zeta.vercel.app/" },
    { img: "assets/projects/img12.png", name: "Oriental Rug Service", github: "https://github.com/skillportweb/oriental-rug-service", live: "https://nganisi-travel-wwiv.vercel.app/" },
    { img: "assets/projects/img13.png", name: "NGasini Travel", github: "https://github.com/skillportweb/Nganisi_travel", live: "https://nganisi-travel.vercel.app/" },
    { img: "assets/projects/img14.png", name: "Nekter web", github: "https://github.com/skillportweb/nektar-demo", live: "https://nektar-demo-gules.vercel.app/" },
    { img: "assets/projects/img15.png", name: "LinyX Web", github: "https://github.com/skillportweb/linyX", live: "https://liny-x-theta.vercel.app/" },
    { img: "assets/projects/img16.png", name: "Huijodo Web", github: "https://github.com/skillportweb/huijodo", live: "https://huijodo.vercel.app/" },
    { img: "assets/projects/img17.png", name: "Floor Sanding", github: "https://github.com/skillportweb/FloorSanding", live: "https://floor-sanding.vercel.app/" },
    { img: "assets/projects/img18.png", name: "Chester county Hearth", github: "https://github.com/skillportweb/chester-county-hearth", live: "https://chester-county-hearth-phi.vercel.app/" },
    { img: "assets/projects/img19.png", name: "Carpet Dyeingo", github: "https://github.com/skillportweb/CARPET_DYEINGO", live: "https://carpet-dyeingo.vercel.app/" },
    { img: "assets/projects/img20.png", name: "Canberra Flood Masters", github: "https://github.com/skillportweb/Canberra-flood-masters", live: "https://canberra-flood-masters-sigma.vercel.app/" },
    { img: "assets/projects/img21.png", name: "HRMS", github: "https://github.com/skillportweb/HRMS", live: "https://hrms-mu-five.vercel.app/" },
  ];

  // Show only 6 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="projects-section mb-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row">
          {visibleProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
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
