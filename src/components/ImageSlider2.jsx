/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";

const ImageSlider2 = ({ slides, parentWidth }) => {
  const [currentInd, setCurrentInt] = useState(0);
  const timeRef = useRef(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      gotoNext();
    }, 4000);

    return () => {
      clearTimeout(timeRef.current);
    };
  });

  const gotoPrev = () => {
    const nextInd = currentInd === 0 ? slides.length - 1 : currentInd - 1;
    setCurrentInt(nextInd);
  };
  const gotoNext = () => {
    const nextInd = currentInd === slides.length - 1 ? 0 : currentInd + 1;
    setCurrentInt(nextInd);
  };
  const gotoSlide = (ind) => {
    setCurrentInt(ind);
  };

  //styles start
  const slideContainerStyles = {
    height: "100%",
    display: "flex",
    width: `${parentWidth * slides.length}px`,
    transform: `translate(${-currentInd * parentWidth}px)`,
    transition: "1s all ease-in-out ",
  };

  const sliderStyles = {
    height: "100%",
    width: `${parentWidth}px`,
  };

  const slideContainerOverflowStyles = {
    height: "100%",
    width: `${parentWidth}px`,
    overflow: "hidden",
    position: "relative",
    margin: "auto",
  };
  //styles end

  return (
    <div style={sliderWrapperStyles}>
      {/* slides   */}
      <div style={slideContainerOverflowStyles}>
        {/* left arrow */}
        <div style={leftArrowStyles} onClick={gotoPrev}>
          &larr;
        </div>
        {/* right arrow */}
        <div style={rightArrowStyles} onClick={gotoNext}>
          &rarr;
        </div>
        <div style={slideContainerStyles}>
          {slides.map((_, slideInd) => {
            return (
              <div key={slideInd} style={sliderStyles}>
                <img
                  style={imgStyles}
                  src={slides[slideInd].url}
                  alt={slides[slideInd].title}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* dot slide navigation */}
      <div style={dotContainerStyles}>
        {slides.map((_, slideInd) => {
          return (
            <div
              key={slideInd}
              style={{
                ...dotStyles,
                color: slideInd === currentInd ? "gray" : "black",
              }}
              onClick={() => {
                gotoSlide(slideInd);
              }}
            >
              &bull;
            </div>
          );
        })}
      </div>
    </div>
  );
};



const sliderWrapperStyles = {
  height: "100%",
  width: "100%",
  position: "relative",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  left: "32px",
  fontSize: "40px",
  color: "#fff",
  cursor: "pointer",
  zIndex:'1'
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  right: "32px",
  fontSize: "40px",
  color: "#fff",
  cursor: "pointer",
  zIndex:'1',
};

const imgStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyles = {
  fontSize: "40px",
  cursor: "pointer",
};


export default ImageSlider2;