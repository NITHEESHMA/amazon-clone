import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import "./Slider.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Slider = ({ images }) => {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const lastindex = images.length - 1;

    if (index < 0) {
      setindex(lastindex);
    }

    if (index > lastindex) {
      setindex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let sliders = setInterval(() => {
      setindex(index + 1);
    }, 5000);

    return () => {
      clearInterval(sliders);
    };
  }, [index]);

  return (
    <div className="section">
      <div className="section-center">
      {images.map((image, indeximage) => {
          let position = "nextslide";
          if (indeximage === index) {
            position = "activeslide";
          }

          if (
            indeximage === index - 1 ||
            (index === 0 && indeximage === images.length - 1)
          ) {
            position = "nextslide";
          }
          return (
            <article className={position} key={indeximage}>
              <img src={image} alt="banner" className="banner-img" />
            </article>
          );
        })}

        <p className="prev" onClick={() => setindex(index - 1)}>
          <ArrowBackIosIcon />
        </p>

        <p className="next" onClick={() => setindex(index + 1)}>
          <ArrowForwardIosIcon />
        </p>
      
      </div>
    </div>
  );
};

export default Slider;
