import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectListPage} />
      </Switch>
    </div>
  );
}

export default App;
