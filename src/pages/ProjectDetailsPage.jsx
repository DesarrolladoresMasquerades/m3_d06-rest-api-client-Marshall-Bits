import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005";

export default function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = ()=>{
    axios.get(`${API_URL}/api/projects/${projectId}`)
    .then((response)=>{setProject(response.data)})
    .catch((err)=>{console.log(err)})
}

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />
      {console.log(project)}
      {project &&
        project.tasks.map((task) => <TaskCard key={task._id} task={task} />)}
    </div>
  );
}
