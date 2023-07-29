/* eslint-disable react/prop-types */
import {useState,useEffect,useRef} from 'react'

// eslint-disable-next-line react/prop-types
const ImageSlider2 = ({slides}) => {
    const [currentInd,setCurrentInt]=useState(0);
    const timeRef=useRef(null);


    useEffect(()=>{
        if(timeRef.current){
            clearTimeout(timeRef.current);
        }
        timeRef.current=setTimeout(()=>{
            gotoNext();
        },3000);

        return ()=>{
            clearTimeout(timeRef.current);
        }
    })

    const gotoPrev=()=>{
        const nextInd=currentInd===0?slides.length-1:currentInd-1;
        setCurrentInt(nextInd);
    }
    const gotoNext=()=>{
        const nextInd=currentInd===slides.length-1?0:currentInd+1;
        setCurrentInt(nextInd);
    }
    const gotoSlide=(ind)=>{
        setCurrentInt(ind);
    }

  return (
    <div style={sliderWrapperStyles}>
        {/* left arrow */}
        <div style={leftArrowStyles} onClick={gotoPrev}>&larr;</div>
        {/* right arrow */}
        <div style={rightArrowStyles} onClick={gotoNext} >&rarr;</div>

        <div style={sliderStyles}>
            <img  style={imgStyles} src={slides[currentInd].url} alt={slides[currentInd].title} />
        </div>
        <div style={dotContainerStyles} >
            {
                slides.map((_,slideInd)=>{
                    return <div key={slideInd} style={{...dotStyles,color:slideInd===currentInd?'gray':'black'}} onClick={()=>{gotoSlide(slideInd)}}>
                        &bull;
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ImageSlider2

const sliderWrapperStyles={
    height:'100%',
    width:'100%',
    position:'relative',
};

const leftArrowStyles={
    position:'absolute',
    top:'50%',
    left:'32px',
    fontSize:'40px',
    color:'#fff',
    cursor:'pointer'
};

const rightArrowStyles={
    position:'absolute',
    top:'50%',
    right:'32px',
    fontSize:'40px',
    color:'#fff',
    cursor:'pointer'

};

const sliderStyles={
    height:'100%',
    width:'100%',
}
const imgStyles={
    width:'100%',
    height:'100%',
    objectFit:'cover',

}

const dotContainerStyles={
    display:'flex',
    justifyContent:'center',
}

const dotStyles={
    fontSize:'40px',
    cursor:'pointer'
}