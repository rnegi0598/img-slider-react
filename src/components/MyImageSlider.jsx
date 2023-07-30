import { useState,useEffect,useRef } from "react";
/* eslint-disable react/prop-types */

const ImageSliderTest = ({ slides, parentWidth }) => {
  const [currentInd, setCurrentInd] = useState(0);
  const timerRef=useRef(null);
  useEffect(()=>{
    if(timerRef.current){
        clearTimeout(timerRef.current);
    }

    timerRef.current=setTimeout(()=>{
        gotoNext();
    },2000);


    return ()=>{
        clearTimeout(timerRef.current);
    }
  })

  const gotoPrev = () => {
    const prevInd = currentInd === 0 ? slides.length - 1 : currentInd - 1;
    setCurrentInd(prevInd);
  };

  const gotoNext = () => {
    const nextInd = currentInd === slides.length - 1 ? 0 : currentInd + 1;
    setCurrentInd(nextInd);
  };
  const gotoSlide=(ind)=>{
    setCurrentInd(ind)
  }

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={slidesContainerStyles}>
        {/* left arrow */}
        <div style={lArrowStyles} onClick={gotoPrev}>
          &larr;
        </div>
        {/* right arrow */}
        <div style={rArrowStyles} onClick={gotoNext}>
          &rarr;
        </div>

        <div
          style={slidesOverflowStyles(slides.length, parentWidth, currentInd)}
        >
          {slides.map((slide, ind) => {
            return (
              <div key={ind} style={slideContainerStyles}>
                <img style={slideImgStyles} src={slide.url} alt={slide.title} />
              </div>
            );
          })}
        </div>
      </div>
      {/* navigation through dot */}
      <div style={dotContainerStyles}>
        {slides.map((_, ind) => {
          return <div key={ind} onClick={()=>{gotoSlide(ind)}} style={ind==currentInd?{...activeDotStyles,...dotStyles}:dotStyles}>&bull;</div>;
        })}
      </div>
    </div>
  );
};

const dotStyles={
    cursor:'pointer'
}
const activeDotStyles={
    color:'grey',
}
const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "2px",
  fontSize:'30px'
};
const arrowStyles = {
  position: "absolute",
  fontSize: "40px",
  top: "50%",
  zIndex: "99",
  color: "#fff",
  cursor: "pointer",
};
const lArrowStyles = {
  ...arrowStyles,
  left: "32px",
};
const rArrowStyles = {
  ...arrowStyles,
  right: "32px",
};
const slidesContainerStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};
const slidesOverflowStyles = (length, parentWidth, currentInd) => {
  return {
    width: `${length * 100}%`,
    height: "100%",
    display: "flex",
    transform: `translate(-${currentInd * parentWidth}px)`,
    transition: "1s transform ease-in-out",
  };
};

const slideContainerStyles = {
  width: "100%",
  height: "100%",
};
const slideImgStyles = {
  width: "100%",
  height: "100%",
};

export default ImageSliderTest;
