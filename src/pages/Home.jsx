import SkillList from "../components/SkillList";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import svgIcons from "../assets/svg/skills";

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
            justifyContent: "center", // Fixed typo
            alignItems: "center",
            gap: "20px", // Increased gap for better spacing
            width: "100%", // Adjusted to fill the container
            maxWidth: "1200px", // Limit the width for better layout
            margin: "0 auto", // Center the container horizontally
            padding: "20px", // Add padding for better responsiveness
            backgroundColor: "#f9f9f9", // Optional: Background color for better visibility
          }}
        >
          <SkillList name="HTML">{svgIcons.html}</SkillList>
          <SkillList name="CSS">{svgIcons.css}</SkillList>
          <SkillList name="Javascript">{svgIcons.js}</SkillList>
          <SkillList name="React">{svgIcons.react}</SkillList>
          <SkillList name="Typescript">{svgIcons.ts}</SkillList>
          <SkillList name="NodeJS">{svgIcons.node}</SkillList>
          <SkillList name="Express">{svgIcons.ex}</SkillList>
          <SkillList name="Bootstrap">{svgIcons.bs}</SkillList>
          <SkillList name="MongoDB">{svgIcons.mgdb}</SkillList>
          <SkillList name="MYSQL">{svgIcons.mysql}</SkillList>
          <SkillList name="PHP">{svgIcons.php}</SkillList>
          <SkillList name="Wordpress">{svgIcons.wp}</SkillList>
          <SkillList name="Python">{svgIcons.py}</SkillList>
          <SkillList name="TailwindCSS">{svgIcons.tw}</SkillList>
        </div>
      </div>

      <div className="row justify-content-around align-item-center m-0">
        <ProjectCard
          src={reactchat}
          title="React Chat App."
          subtitle="A Simple React Chat App where users can join and chat with in the room."
          href="https://chat-app-by-sahil.netlify.app/"
          target="_blank"
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
        </div>
      </div>
    </>
  );
};

export default Home;
