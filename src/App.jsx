import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Media from "./components/Media/Media";

function App() {
  return (
    <Fragment>
      <Navbar />
      <BreadCrumb />
      <Media />
    </Fragment>
  );
}

export default App;
