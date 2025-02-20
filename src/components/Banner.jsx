// import React from "react";

// export default function Banner() {
//   const name = "Hi, I'm Dinesh Kumar";

//   return (
//     <div className="banner-main position-relative">
//       <div className="banner-video-bg">
//         <video autoPlay loop muted playsInline className="w-full h-auto">
//           <source src="/assets/videoplayback.mp4" type="video/mp4" />
//         </video>
//         <div className="container">
//           <div className="row align-items-center text-center text-lg-start">
//             {/* Image on top for small & medium screens */}
//             <div className="col-lg-4 d-flex justify-content-center align-items-center order-lg-2 order-1 mb-4">
//               <div className="profile-img">
//                 <img
//                   src="assets/profile.jpg"
//                   alt="Profile"
//                   className="img-fluid"
//                 />
//               </div>
//             </div>

//             {/* Text below image on small & medium screens */}
//             <div className="col-lg-8 order-lg-1 order-2">
//               <div className="banner-info">
//                 <h6>React Developer</h6>
//                 <h1>
//                   {name.split("").map((char, index) => (
//                     <span key={index} style={{ "--i": index + 1 }}>
//                       {char === " " ? "\u00A0" : char}
//                     </span>
//                   ))}
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Banner() {
  const name = "Hi, I'm Dinesh Kumar";

  return (
    <div className="banner-main position-relative">
      <div className="banner-video-bg">
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source src="/assets/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            {/* Image on top for small & medium screens */}
            <div className="col-lg-4 d-flex justify-content-center align-items-center order-lg-2 order-1 mb-4">
              <div className="profile-img">
                <img
                  src="assets/profile.jpg"
                  alt="Profile"
                  className="img-fluid"
                />
                {/* Moving Dot */}
                <div className="moving-dot"></div>
              </div>
            </div>

            {/* Text below image on small & medium screens */}
            <div className="col-lg-8 order-lg-1 order-2">
              <div className="banner-info">
                <h6>Frontend developer</h6>
                <h1>
                  {name.split("").map((char, index) => (
                    <span key={index} style={{ "--i": index + 1 }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <p>
                  "Hello everyone! I'm a frontend developer with 1.5 years of
                  experience. I've worked on 20+ projects, specializing in
                  responsive design, clean code, and interactive UI to enhance
                  user experiences."
                </p>

                <div className="social-media d-flex gap-3 mt-3">
                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i class="fa-brands fa-git-alt"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="banner-btn">
                  <a href="#">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
