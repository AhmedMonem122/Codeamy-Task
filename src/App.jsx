import { Fragment } from "react";
import "./App.css";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Media from "./components/Media/Media";
import Properties from "./components/Properties/Properties";
import Amenities from "./components/Amenities/Amenities";
import Facilities from "./components/Facilities/Facilities";
import Reviews from "./components/Reviews/Reviews";
import SimilarProperties from "./components/SimilarProperties/SimilarProperties";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <BreadCrumb />
      <Media />
      <Properties />
      <Amenities />
      <Facilities />
      <Reviews />
      <SimilarProperties />
      <Footer />
    </Fragment>
  );
}

export default App;
