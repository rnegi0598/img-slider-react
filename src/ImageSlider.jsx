/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ slides }) => {
  const [currentInd, setCurrentInd] = useState(0);

  const gotoPrevious = () => {
    const nextInd = currentInd == 0 ? slides.length - 1 : currentInd - 1;
    setCurrentInd(nextInd);
  };

  const gotoNext = () => {
    const nextInd = currentInd === slides.length - 1 ? 0 : currentInd + 1;
    setCurrentInd(nextInd);
  };

  const gotoSlide=(ind)=>{
      setCurrentInd(ind);
  }
  
  return (
    <div style={sliderContainerStyles}>
      {/* left arrow */}
      <div style={leftArrowStyles} onClick={gotoPrevious}>
        &larr;
      </div>
      {/* right arrow */}
      <div style={rightArrowStyles} onClick={gotoNext}>
        &rarr;
      </div>
      {/* slider  */}
      <div style={{...slideStyles,backgroundImage: `url(${slides[currentInd].url})`,}}>
      </div>
      {/* slide navigator */}
      <div style={dotContainerStyles}>
      
        {slides.map((slide, slideInd) => {
             
          return <div
          style={{...dotStyles,color:slideInd===currentInd?'grey':'black'}}
          key={slideInd}
          onClick={() => {
            gotoSlide(slideInd);
          }}
        >
          &bull;
        </div>
        })}
      </div>
    </div>
  );
};

export default ImageSlider;



const sliderContainerStyles = { 
  height: "100%", 
  position: "relative" 
};

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroudPosition: "center",
  backgroundSize: "cover",
 
 
};

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

const dotContainerStyles={
  display:'flex',
  justifyContent:'center'
};

const dotStyles={
  margin:'0 3px',
  cursor:'pointer',
  fontSize:'40px',
};