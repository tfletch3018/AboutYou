import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (

    <div>
        <nav className="navbar navbar-expand-lg bg-transparent !important fixed-top z-index 999">

        <Link to="/home">Home</Link> {" "}
        <Link to="/yourWork">Your Work</Link>
        <Link to="/misc">Miscellaneous</Link>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App;
