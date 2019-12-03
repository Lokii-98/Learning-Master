import React from "react";
import { Link } from "react-router-dom";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./logo_styles.css";
export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  render() {
    let { url } = this.state;
    return (
      <div className="logo-container">
        <Link to="/home" className="text-logo">
          <FontAwesomeIcon icon={faRocket} />
        </Link>
      </div>
    );
  }
}
