// import React from 'react';

// export default function Skills() {
//   return (
//     <div className="skill-section">
//       <div className="container">
//         <h2 className="text-center mb-4">Skills</h2>
//         <div className="row d-flex justify-content-center">
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/html-5.png" alt="Html" className="img-fluid" />
//               <p className="mt-2">Html</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/css-3.png" alt="Css" className="img-fluid" />
//               <p className="mt-2">Css</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/tailwindcss.svg" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Tailwindcss</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/bootstrap.png" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Bootstrap</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/js.png" alt="JavaScript" className="img-fluid" />
//               <p className="mt-2">JavaScript</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/typescript.png" alt="TypeScript" className="img-fluid" />
//               <p className="mt-2">TypeScript</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/react.png" alt="React.js" className="img-fluid" />
//               <p className="mt-2">React.js</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/redux.svg" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Redux</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/node.png" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Node js</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/expressjs.svg" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Expressjs.svg</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/mongodb.svg" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Mongo DB</p>
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
//             <div className="skill-logo text-center">
//               <img src="assets/skills/git.png" alt="Redux" className="img-fluid" />
//               <p className="mt-2">Github</p>
//             </div>
//           </div>         
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';

export default function Skills() {
  return (
    <div className="skill-section">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row d-flex justify-content-center">
          {[
            { src: "assets/skills/html-5.png", alt: "HTML", name: "HTML" },
            { src: "assets/skills/css-3.png", alt: "CSS", name: "CSS" },
            { src: "assets/skills/tailwindcss.svg", alt: "Tailwind CSS", name: "Tailwind CSS" },
            { src: "assets/skills/bootstrap.png", alt: "Bootstrap", name: "Bootstrap" },
            { src: "assets/skills/js.png", alt: "JavaScript", name: "JavaScript" },
            { src: "assets/skills/typescript.png", alt: "TypeScript", name: "TypeScript" },
            { src: "assets/skills/react.png", alt: "React.js", name: "React.js" },
            { src: "assets/skills/redux.svg", alt: "Redux", name: "Redux" },
            { src: "assets/skills/node.png", alt: "Node.js", name: "Node.js" },
            { src: "assets/skills/expressjs.svg", alt: "Express.js", name: "Express.js" },
            { src: "assets/skills/mongodb.svg", alt: "MongoDB", name: "MongoDB" },
            { src: "assets/skills/git.png", alt: "GitHub", name: "GitHub" },
          ].map((skill, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 d-flex mb-4 justify-content-center">
              <div className="skill-logo text-center">
                <img src={skill.src} alt={skill.alt} className="img-fluid" />
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
