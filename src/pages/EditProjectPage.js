import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";  //  <== IMPORT 

const API_URL = "http://localhost:5005";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Get the URL parameter `:projectId` 
  const { projectId } = useParams();					 // <== ADD
  
 
 // This effect will run after the initial render and each time
 // the project id coming from URL parameter `projectId` changes
  useEffect(() => {                                // <== ADD
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
    
  }, [projectId]);
  

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProjectPage;