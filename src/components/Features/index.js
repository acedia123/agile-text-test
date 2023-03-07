import React from "react";
import "./styles.css";
import {
  feature1,
  feature2,
  feature3,
  feature4,
  arrowIcon,
  bg1,
  bg2,
  bg3,
  bg4,
} from "../../assets/img/index";

const features = [
  {
    title: "Search Data",
    description:
      "Don't worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
    path: "/",
    background: bg1,
    image: feature1,
  },
  {
    title: "24 Hours Access",
    description:
      "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    path: "/",
    background: bg2,
    image: feature2,
  },
  {
    title: "Print Out",
    description:
      "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    path: "/",
    background: bg3,
    image: feature3,
  },
  {
    title: "Security Code",
    description:
      "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    path: "/",
    background: bg4,
    image: feature4,
  },
];

export default function Features() {
  return (
    <div className="Features">
      <div className="features__header">
        <h2>Features</h2>
        <p>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>
      </div>
      <div className="features__list">
        {features.map((item) => (
          <div className="features__list-item" key={item.title}>
            <div
              className="list-item__inner"
              style={{
                backgroundImage: `url(${item.background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img src={item.image} alt="" className="feature__item-image" />
              <div className="feature__item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button>
                  Learn more <img src={arrowIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
