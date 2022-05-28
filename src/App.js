import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPageComponent from "../src/components/login-page/LoginPage";
import ProjectsList from "./components/ProjectsList";
import ResourcesList from "./components/ResourcesList";
import Header from "./common/Header/Header";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Header />
        <div className="content_wrapper">
          <Routes>
            <Route key="resources" path="/resources" element={<ResourcesList />} />
            <Route key="projects" path="/projects" element={<ProjectsList />} />
            <Route path="/" element={<LoginPageComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
