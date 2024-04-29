import React from "react";
import SkillList from "../components/SkillList";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import html from "../assets/skillImg/html.png";
import css from "../assets/skillImg/css.png";
import js from "../assets/skillImg/js.png";
import react from "../assets/skillImg/react.png";
import ts from "../assets/skillImg/ts.png";
import node from "../assets/skillImg/node.png";
import ejs from "../assets/skillImg/ejs.png";
import bootstrap from "../assets/skillImg/bootstrap.png";
import mongo from "../assets/skillImg/mongo.png";
import mysql from "../assets/skillImg/mysql.png";
import php from "../assets/skillImg/php.png";
import wordpress from "../assets/skillImg/wordpress.png";
import py from "../assets/skillImg/py.png";
import tailwind from "../assets/skillImg/tailwind.png";

import reactchat from "../assets/projectImg/reactchat.png";
import rtodo from "../assets/projectImg/rtodo.png";
import pomo from "../assets/projectImg/pomodoro.png";
const Home = (props) => {
  return (
    <>
      <Header title="Sahil Shaikh" subtitle="Web Developer" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
        <h2>About Me</h2>
        <p
          style={{
            width: "75%",
            textAlign: "content",
          }}
        >
          As a 3rd-year BSc student with practical proficiency in HTML5, CSS3,
          JavaScript, Bootstrap5, Node.js, Wordpress, PHP, MySQL, and ReactJS,
          and with experience as a Web Developer I am dedicated to producing
          clean and efficient code. Passionate about contributing my diverse
          skill set and eager to further enhance my capabilities in a
          collaborative development environment. Seeking opportunities to apply
          and expand my knowledge in web development and beyond.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
        <h2>My Skills</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContentc: "center",
            alignItems: "center",
            gap: "10px",
            width: "75%",
          }}
        >
          <SkillList name="HTML" src={html} />
          <SkillList name="CSS" src={css} />
          <SkillList name="Javascript" src={js} />
          <SkillList name="React" src={react} />
          <SkillList name="Typescript" src={ts} />
          <SkillList name="NodeJS" src={node} />
          <SkillList name="ExpressJs" src={ejs} />
          <SkillList name="Bootstrap" src={bootstrap} />
          <SkillList name="MongoDB" src={mongo} />
          <SkillList name="MySQL" src={mysql} />
          <SkillList name="PHP" src={php} />
          <SkillList name="Wordpress" src={wordpress} />
          <SkillList name="Python" src={py} />
          <SkillList name="Tailwind" src={tailwind} />
        </div>
      </div>

      <div className="row justify-content-around align-item-center m-0">
        <ProjectCard
          src={reactchat}
          title="React Chat App."
          subtitle="A Simple React Chat App where users can join and chat with in the room."
          href="https://chat-app-by-sahil.netlify.app/"
        />
        <ProjectCard
          src={rtodo}
          title="React ToDo App."
          subtitle="A Todo App with react where users can perform CRUD operations"
          href="/todo"
        />
        <ProjectCard
          src={pomo}
          title="React Pomodoro App"
          subtitle="A Pomodoro App with react where users can set the time and take a break."
          href="/pomo"
        />
        <div className="d-flex justify-content-center gap-5">
          <Link to="/projects" className="btn btn-secondary mt-5">
            All Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary mt-5">
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
