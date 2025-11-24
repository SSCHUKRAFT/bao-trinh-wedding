import { useState, useEffect } from "react";
import './homeslideshow.css'

const HomeSlideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="carousel-container">
      <div className="image-carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || `Image ${index}`}
            className={`carousel-image ${
              index === currentImageIndex ? "active" : ""
            } ${image.className || ""}`}
            style={image.style || {}}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlideshow;