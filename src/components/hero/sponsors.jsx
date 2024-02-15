import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
