import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Media from "./components/Media/Media";
import Properties from "./components/Properties/Properties";

function App() {
  return (
    <Fragment>
      <Navbar />
      <BreadCrumb />
      <Media />
      <Properties />
    </Fragment>
  );
}

export default App;
