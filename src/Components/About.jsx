import React from "react";
import "./About.css";
import Info from "./Info";
import resume from "../assets/assets/TitikshaGupta_Resume.pdf";
import PDFDownloadButton from "./PDFDownloadButton";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <div className="about__data">
            <Info />
            <p className="about__description">
              Sophisticated yet versatile, I'm a Full Stack Web Developer on a
              mission to craft immersive digital experiences. With a blend of
              creative flair and technical acumen, I'm dedicated to merging
              aesthetics with professionalism in every digital creation. With
              proficiency across front-end and back-end technologies, I craft
              elegant user interfaces and scalable server-side solutions. From
              HTML, CSS, and JavaScript to database management and server
              deployment, I strive for excellence, delivering refined web
              experiences that seamlessly blend style and functionality.
            </p>
            <p className="about__description">
              When I'm not immersed in lines of code, you'll find me seeking
              inspiration in nature, exploring new cuisines, indulging in music,
              traversing new destinations or engaging in creative pursuits.
              Ensuring an organized space and fostering a serene environment
              through meticulous cleaning are essential facets of my daily
              routine. I firmly believe in the transformative power of a tidy
              setting, enhancing productivity and promoting peace of mind. I
              thrive on the delicate balance of creativity and logic, finding
              harmony at the intersection of art and technology. Excited about
              the endless possibilities ahead, I eagerly embrace new challenges,
              continuously pushing boundaries, and striving to make meaningful
              contributions to the dynamic digital landscape.
            </p>

            <PDFDownloadButton pdfUrl={resume} />
          </div>
        </div>
        <div className="separator"></div>
      </section>
    </>
  );
};

export default About;
