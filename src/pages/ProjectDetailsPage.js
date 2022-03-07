import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";  //  <== IMPORT 

const API_URL = "http://localhost:5005";                  // <== ADD


function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  // We access the URL parameter `:id` and save it in a variable
  const { projectId } = useParams();              // <== ADD
  
  
  // Helper function that makes a GET request to the API
  // using axios and retrieves the project
  const getProject = () => {                         //  <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
      	const oneProject = response.data;
      	setProject(oneProject);
    	})
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {																// <== ADD AN EFFECT
    getProject();
  }, [] );

  
  return (
    <div className="ProjectDetails">
    
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
          
      <Link to={`/projects/edit/${projectId}`}>      {/*   <== ADD   */}
        <button>Edit Project</button>
      </Link>
      
    </div>
  );
}

export default ProjectDetailsPage;