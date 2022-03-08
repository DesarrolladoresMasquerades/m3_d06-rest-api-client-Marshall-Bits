import axios from "axios";
import { useEffect, useState } from "react";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsLIstPage() {
  const [projects, setProjects] = useState([]);
  const API_URL = "http://localhost:5005";

  // ----------  put away in a folder -------
  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
  // ----------  put away in a folder -------

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProject={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}