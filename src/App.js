/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/components/Navbar";
import "./App.css";

function App() {
  return (

    <div>

      {/* <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a id="logo" className="navbar-brand" rel="noopener noreferrer" target="_blank" href="#" >Logo</a>

            <button type="button" className="btn navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/home">Home</Link> {" "}</li>
              <li><Link to="/yourWork">Your Work</Link></li>
              <li><Link to="/misc">Miscellaneous</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}


      {/* <nav className="navbar navbar-expand-lg bg-transparent !important fixed-top z-index 999">
        <Link to="/home">Home</Link> {" "}
        <Link to="/yourWork">Your Work</Link>
        <Link to="/misc">Miscellaneous</Link>
      </nav> */}


      <Navbar />

      <Outlet />
    </div>

  );
}

export default App;
