import React, { useEffect, useState } from "react";
import { Introduction, Features, Testimonials } from "../components/index";
import { getGalleries } from "../service/home";

export default function Home() {
  const [testimonials, setTestimonials] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    getGalleries().then((data) => {
      setTestimonials(data);
    });
  }, []);

  const handleChangeSlide = (index) => {
    if (index == testimonials.length) {
      setPageIndex(0);
    } else if (index == -1) {
      setPageIndex(testimonials.length - 1);
    } else {
      setPageIndex(index);
    }
  };

  return (
    <div>
      <Introduction />
      <Features />
      {testimonials && (
        <Testimonials
          data={testimonials[pageIndex]}
          size={testimonials}
          index={pageIndex}
          onChangeSlice={handleChangeSlide}
        />
      )}
    </div>
  );
}
