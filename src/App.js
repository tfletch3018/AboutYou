import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../src/components/Navbar";

function App() {
  return (

    <div>

      <Navbar />

      <Outlet />

    </div>

  );
}

export default App;
