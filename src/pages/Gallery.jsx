import { useState } from "react";
import productsData from "../data/productsData";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      <section id="hero">
        <div className="featured_gallery-container">
        {productsData.map((product, index) => (
          <div
            className="featured_slide"
            key={product.id}
            style={{ display: index === currentIndex ? "block" : "none",animation: index === currentIndex ? 'slideIn 0.5s' : 'slideOut 0.5s'  }}
          >
            <div  className="featured_imgy">
            <img
                 src={product.images[1]} 
                 alt={`Product ${product.id}`}
                 loading="lazy"
                
            />
            </div>
          </div>
        ))}
        <div className="featured_btns">
        <button className="featured_special" onClick={goToPrevious}>Previous</button>
        <button className="featured_special" onClick={goToNext}>Next</button>
        </div>
        </div>
      </section>
      
      <section id="hero"></section>
    </main>
  );
};
export default Gallery;


// https://codepen.io/WebCoder49/pen/dyNjvxa

// https://codepen.io/whitinggg/pen/yrxxZB

// https://codepen.io/gabriele-bessi/pen/xxQxOKN