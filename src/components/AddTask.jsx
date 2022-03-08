import axios from "axios";
import { useState } from "react";

export default function AddTask(props) {
  const API_URL = "http://localhost:5005";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // --------- move to its own folder and call createOneProject() --------------
    axios.post(`${API_URL}/api/tasks`, formData)
    .then((__) => {
      props.refreshProject();
      setFormData({
        title: "",
        description: "",
      });
    });
    // --------- move to its own folder createOneProject() --------------
  }

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setFormData((formData) => ({ ...formData, [key]: value }));
  }

  return (
    <div className="AddProject">
      <h3>Add a Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
