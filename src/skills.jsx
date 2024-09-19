import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./skills.css";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();
      let xTransform = gsap.utils.random(-100, 100);

      tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
      }).to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });
  return (
    <div className="w-full container3 relative" id="skills">
      <h1 className="text-5xl font-bold mb-12 text-center text-[#FF0000] skills-title">
        Skills
      </h1>
      <div className="grid grid-cols-11 md:grid-cols-11 grid-cols-4 md:grid-rows-4 grid-rows-4 gap-2 overflow-hidden">
        <div
          className="elem"
          style={{ "--r": 1, "--c": 4, "--mobile-r": 1, "--mobile-c": 1 }}
        >
          <img src="/html5.svg" alt="HTML5" />
        </div>
        <div
          className="elem"
          style={{ "--r": 1, "--c": 5, "--mobile-r": 1, "--mobile-c": 2 }}
        >
          <img src="/css3.svg" alt="CSS3" />
        </div>
        <div
          className="elem"
          style={{ "--r": 1, "--c": 6, "--mobile-r": 1, "--mobile-c": 3 }}
        >
          <img src="/javascript.svg" alt="JavaScript" />
        </div>
        <div
          className="elem"
          style={{ "--r": 1, "--c": 7, "--mobile-r": 1, "--mobile-c": 4 }}
        >
          <img src="/react.svg" alt="React" />
        </div>
        <div
          className="elem"
          style={{ "--r": 1, "--c": 8, "--mobile-r": 1, "--mobile-c": 5 }}
        >
          <img src="/nodejs.svg" alt="Node.js" />
        </div>
        <div
          className="elem"
          style={{ "--r": 2, "--c": 4, "--mobile-r": 2, "--mobile-c": 1 }}
        >
          <img src="/boostrap.svg" alt="bootstrap" />
        </div>
        <div
          className="elem"
          style={{ "--r": 2, "--c": 5, "--mobile-r": 2, "--mobile-c": 2 }}
        >
          <img src="/git.svg" alt="Git" />
        </div>
        <div
          className="elem"
          style={{ "--r": 2, "--c": 6, "--mobile-r": 2, "--mobile-c": 3 }}
        >
          <img src="/mongodb.svg" alt="MongoDB" />
        </div>
        <div
          className="elem"
          style={{ "--r": 2, "--c": 7, "--mobile-r": 2, "--mobile-c": 4 }}
        >
          <img src="/mysql.svg" alt="mysql" />
        </div>
        <div
          className="elem"
          style={{ "--r": 2, "--c": 8, "--mobile-r": 2, "--mobile-c": 5 }}
        >
          <img src="/vscode.svg" alt="vscode" />
        </div>
        <div
          className="elem"
          style={{ "--r": 3, "--c": 4, "--mobile-r": 3, "--mobile-c": 1 }}
        >
          <img src="/c++.svg" alt="C++" />
        </div>
        <div
          className="elem"
          style={{ "--r": 3, "--c": 5, "--mobile-r": 3, "--mobile-c": 2 }}
        >
          <img src="/python.svg" alt="Python" />
        </div>
        <div
          className="elem"
          style={{ "--r": 3, "--c": 6, "--mobile-r": 3, "--mobile-c": 3 }}
        >
          <img src="/npm.svg" alt="npm" />
        </div>
        <div
          className="elem"
          style={{ "--r": 3, "--c": 7, "--mobile-r": 3, "--mobile-c": 4 }}
        >
          <img src="/tailwind.svg" alt="Tailwind" />
        </div>
        <div
          className="elem"
          style={{ "--r": 3, "--c": 8, "--mobile-r": 3, "--mobile-c": 5 }}
        >
          <img src="/gsap-greensock.svg" alt="GSAP" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
