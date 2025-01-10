import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header title="About Me" subtitle="It's Me Sahil..." />
      <div
        className="container mt-5 d-flex align-items-center justify-content-center flex-column"
        style={{
          width: "75%",
        }}
      >
        <h3>My Experience</h3>

        <p>
          <span className="fw-bold">Happier Together :</span>
          <br />
          Developed CapriciouslyQuotidian.com, an artistic WordPress site
          showcasing client's work. <br />
          Contributed to securing a service deal with Fern Hotels by presenting
          enhancements for Fernhotels.com.
          <br />
          Designed and developed DharmaFightnFitness.com, boosting gym's service
          exposure.
          <br />
          Upgraded organizational website, resulting in a 10% traffic increase.
          Conducted comprehensive review of Happier Together Mobile app,
          enhancing security and user experience.
        </p>
        <h3>My Background</h3>
        <p>
          My name is Sahil Shaikh, and I hail from Thane, Mumbai. Currently, I'm
          a third-year BSc student at Kalsekar Degree College. Ever since I was
          in the 10th standard, I've been immersed in coding as a hobby. As my
          knowledge expanded, my passion for web development soared. Presently,
          I proudly identify as a full-stack web developer with experience in
          numerous projects. Looking ahead, I aim to delve deeper into backend
          development, particularly focusing on mastering AWS (Amazon Web
          Services) and machine learning. This journey is not only about
          acquiring new skills but also about pushing the boundaries of what I
          can create and innovate in the digital realm.
        </p>
        <h3>My Intrests</h3>
        <p>
          I have a passion for video editing and crafting innovative designs
          using Canva. Through my expertise, I've created numerous captivating
          infographics that blend intricate color schemes and thoughtful
          designs. My experience extends to participating in various video
          editing competitions during my college years, honing my skills and
          refining my craft. Whether it's bringing visuals to life through
          seamless video edits or crafting mesmerizing infographics that capture
          attention, I thrive on pushing creative boundaries and delivering
          engaging content.
        </p>
      </div>
    </>
  );
};

export default About;
