import React, { useEffect, useState } from "react";
import "./ImageSlider.css"; // Update the CSS file path

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(() =>
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(() =>
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => nextImage(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex]);

  return (
    <div className="image-slider-container">
      <button className="prev" onClick={prevImage}>
        {" "}
        &lt;{" "}
      </button>
      <img
        src={images[currentImageIndex].image_url}
        alt={images[currentImageIndex].caption}
        className="slider-image"
      />
      <button className="next" onClick={nextImage}>
        {" "}
        &gt;{" "}
      </button>

      <div className="image-previews">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image_url}
            alt={image.caption}
            className={
              currentImageIndex === index ? "preview active" : "preview"
            }
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
