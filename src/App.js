import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsLIstPage from "./pages/ProjectsLIstPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import AddProject from "./components/AddProject";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsLIstPage />} />
        <Route
          exact
          path="/projects/:projectId"
          element={<ProjectDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
