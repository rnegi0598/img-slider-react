/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ slides, parentWidth }) => {
  const [currentInd, setCurrentInd] = useState(0);
  const timeRef = useRef(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef);
    }
    timeRef.current = setTimeout(() => {
      gotoNext();
    }, 3000);
    return ()=>{
      clearTimeout(timeRef.current);
    }
  });

  const gotoPrevious = () => {
    const nextInd = currentInd == 0 ? slides.length - 1 : currentInd - 1;
    setCurrentInd(nextInd);
  };

  const gotoNext = () => {
    const nextInd = currentInd === slides.length - 1 ? 0 : currentInd + 1;
    setCurrentInd(nextInd);
  };

  const gotoSlide = (ind) => {
    setCurrentInd(ind);
  };

  // styles start
  const slideStyles = {
    width: parentWidth,
    height: "100%",
    borderRadius: "10px",
    backgroudPosition: "center",
    backgroundSize: "cover",
  };
  const getSlideStylesWithBackground = (slideInd) => {
    return {
      ...slideStyles,
      backgroundImage: `url(${slides[slideInd].url})`,
    };
  };

  const sliderContainerStyles = {
    height: "100%",
    position: "relative",
  };
  const sliderContainerStylesWithWidth = {
    ...sliderContainerStyles,
    width: parentWidth * slides.length,
    display: "flex",
    transform: `translate(-${currentInd * parentWidth}px)`,
    transition: "all ease-in-out 1s",
  };

  const slideContainerOverflowStyles = {
    margin: "0 auto",
    position: "relative",
    width: parentWidth,
    height: "100%",
    overflow: "hidden",
  };
  // styles end

  return (
    <div style={sliderContainerStyles}>
      {/* slider  */}
      <div style={slideContainerOverflowStyles}>
        {/* left arrow */}
        <div style={leftArrowStyles} onClick={gotoPrevious}>
          &larr;
        </div>
        {/* right arrow */}
        <div style={rightArrowStyles} onClick={gotoNext}>
          &rarr;
        </div>
        <div style={sliderContainerStylesWithWidth}>
          {slides.map((_, slideInd) => {
            return (
              <div
                key={slideInd}
                style={getSlideStylesWithBackground(slideInd)}
              ></div>
            );
          })}
        </div>
      </div>

      {/* slide navigator */}
      <div style={dotContainerStyles}>
        {slides.map((slide, slideInd) => {
          return (
            <div
              style={{
                ...dotStyles,
                color: slideInd === currentInd ? "grey" : "black",
              }}
              key={slideInd}
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

export default ImageSlider;

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  trasform: "translate(0,-50%",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  trasform: "translate(0,-50%",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyles = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "40px",
};
