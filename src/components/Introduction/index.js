import React from "react";
import "./styles.css";
import homeImage from "../../assets/img/image1 1.png";

export default function Introduction() {
  return (
    <div className="Introduction">
      <h1 className="intro__title">
        Save your data
        <br /> storage here.
      </h1>
      <p className="intro__description">
        Data Warehouse is a data storage area that has been tested for security,
        so you can store your data here safely but not be afraid of being stolen
        by others.
      </p>
      <div className="intro__image">
        <img src={homeImage} alt="" />
      </div>
      <div className="intro__actions">
        <button className="btn btn-primary">Learn more</button>
      </div>
    </div>
  );
}
