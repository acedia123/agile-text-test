import React, { useState } from "react";
import { arrowLeft, arrowRight, dot, dotActive } from "../../assets/img/index";
import "./style.css";

export default function Testimonials({ data, size, index, onChangeSlice }) {
  return (
    <div className="testimonials">
      <h3 className="testimonials-wrapper testimonials__title">Testimonials</h3>
      <div className="testimonials-wrapper carousel">
        <button className="arrow --left" onClick={() => onChangeSlice(--index)}>
          <img src={arrowLeft} alt="" />
        </button>
        <button
          className="arrow --right"
          onClick={() => onChangeSlice(++index)}
        >
          <img src={arrowRight} alt="" />
        </button>

        <div className="carousel-card">
          <div className="image-wrapper">
            <img src={data.imageUrl} alt="" />
          </div>
          <div className="content">
            <span className="name">John</span>
            <span className="email">wordfang.com</span>
            <p>{data.desctiption}</p>
          </div>
        </div>
        <div className="list-option">
          {size.map((item, sizeIndex) => (
            <button onClick={() => onChangeSlice(sizeIndex)} key={item.id}>
              <img src={index === sizeIndex ? dotActive : dot} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
