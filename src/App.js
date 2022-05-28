import "./App.css";
import {Routes, Route } from "react-router-dom";
import LoginPageComponent from "../src/components/login-page/LoginPage";
import ProjectsList from "./components/ProjectsList";
import ResourcesList from "./components/ResourcesList";

function App() {
  return (
    <div className="App">
      <ProjectsList/>
      <Routes>
        <Route key="resources" path="/resources" component={ResourcesList} />
        <Route key="projects" path="/projects" component={ProjectsList} />
        <Route path="/" component={LoginPageComponent} />
      </Routes>

    </div>
  );
}

export default App;
