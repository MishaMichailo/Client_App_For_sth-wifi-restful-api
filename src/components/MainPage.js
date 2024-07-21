import React from "react";
import { Link } from "react-router-dom";


export default class Page extends React.Component {

  render() {
    return (
      <div className="component-page">
        <h1>Welcome to the Roman Banakh page</h1>
        <p>If you want to use this app please <Link to="/register">register</Link></p>
      </div>
    );
  }
}