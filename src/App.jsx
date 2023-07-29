import ImageSlider from "./ImageSlider";
// import ImageSlider2 from "./ImageSlider2";
function App() {
  const slides = [
    { url: "http://localhost:5173/image-1.jpg", title: "Beach" },
    { url: "http://localhost:5173/image-2.jpg", title: "Boat" },
    { url: "http://localhost:5173/image-3.jpg", title: "Forest" },
    { url: "http://localhost:5173/image-4.jpg", title: "City" },
    { url: "http://localhost:5173/image-5.jpg", title: "Italy" },
  ];
  const containerStyles = { width: "90%", height: "50vh", margin: "0 auto", };
  return (
    <>
      <div style={{textAlign:'center',width:'100vw'}} >
        <h1>Img slider using backgroundImage</h1>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={700} />
         
        </div>
      </div>

      {/* <div style={{textAlign:'center',width:'100vw'}} >
      <h1>Img slider using img tag</h1>
        <div style={containerStyles}>
          <ImageSlider2 slides={slides} />
         
        </div>
      </div> */}
    </>
  );
}

export default App;
