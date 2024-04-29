import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import mins from "../assets/projectImg/mins.png";
import BankFinder from "../assets/projectImg/Bank-Finder.png";
import Curr from "../assets/projectImg/Curr.png";
import Foodie from "../assets/projectImg/Foodie.png";
import Fylo from "../assets/projectImg/Fylo.png";
import MedWeb from "../assets/projectImg/MedWeb.png";
import ReactChat from "../assets/projectImg/reactchat.png";
import TPark from "../assets/projectImg/T-Park.png";
import TruckWeb from "../assets/projectImg/Truck-Web.png";
import ReactExpressChat from "../assets/projectImg/react-express-chat.png";
import ReactTodo from "../assets/projectImg/rtodo.png";
import Pomodoro from "../assets/projectImg/pomodoro.png";

const Projects = () => {
  return (
    <>
      <Header title="My Projects" subtitle="Made with Passion" />
      <div className="mt-5"></div>
      <div className="row justify-content-around align-item-center m-0">
        <ProjectCard
          src={mins}
          title="Random Quote Generator"
          subtitle="A simple random quote generator which is saved temporarly in local storage."
          href="https://sahil4883.github.io/7-Minute-Quote/"
        />
        <ProjectCard
          src={BankFinder}
          title="Bank Finder By IFSC"
          subtitle="A Bank Finder By IFSC Code where users can search the bank details by IFSC code."
          href="https://sahil4883.github.io/Bank-Finder/"
        />
        <ProjectCard
          src={Curr}
          title="Currency Converter"
          subtitle="A simple currency converter where users can convert the currency."
          href="https://sahil4883.github.io/Currency-Calculator/"
        />
        <ProjectCard
          src={Foodie}
          title="Food Delivery Website"
          subtitle="A simple Food Delivery Website where users can interact with the website."
          href="https://fooodys.netlify.app/"
        />
        <ProjectCard
          src={Fylo}
          title="Cloud Storage Landing Page"
          subtitle="A Cloud Storage Landing Page"
          href="https://main--fylo-sahil.netlify.app/"
        />
        <ProjectCard
          src={MedWeb}
          title="Medical Website Info Page"
          subtitle="Medical Website Info Page where users can get the information about the website."
          href="https://sahil4883.github.io/Full-Scale-Website/"
        />
        <ProjectCard
          src={ReactChat}
          title="React Chat App"
          subtitle="A Simple React Chat App where users can join and chat with in the room."
          href="https://chat-app-by-sahil.netlify.app/"
        />
        <ProjectCard
          src={TPark}
          title="Trampoline Park Landing Page"
          subtitle="A Trampoline Park Landing Page"
          href="https://skyjumps.netlify.app/"
        />
        <ProjectCard
          src={TruckWeb}
          title="Truck Website"
          subtitle="A Truck Website where users can get the information about the website."
          href="https://sahil4883.github.io/Nomad-Service/"
        />
        <ProjectCard
          src={ReactExpressChat}
          title="React Chat App"
          subtitle="A chat app with react"
          href="/project"
        />
        <ProjectCard
          src={ReactTodo}
          title="React ToDo App"
          subtitle="A Todo App with react where users can perform CRUD operations"
          href="/todo"
        />
        <ProjectCard
          src={Pomodoro}
          title="React Pomodoro App"
          subtitle="A Pomodoro App with react where users can set the time and take a break."
          href="/pomo"
        />
      </div>
    </>
  );
};

export default Projects;
