import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
// import CV from "../../assets/imgProj/steve-Cv.pdf";
import Skills from "../../components/Skills";
import "./about.css";
import { Link } from "react-router-dom";

const about = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__img"></div>
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <Link to="/" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </Link>
          </div>
        </div>
        <div className="stats grid">
          <Stats />
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">Skills</h3>
        <h3 style={{ fontSize: 10, textAlign: "center" }}>just my opinion</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>
    </main>
  );
};

export default about;
