import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Oops from "./pages/Oops";

import Pomodoro from "./projects/Pomodoro";
import Todo from "./projects/Todo";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pomo" element={<Pomodoro />} />
        <Route path="/todo" element={<Todo />} />

        <Route path="/*" element={<Oops />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
