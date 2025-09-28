import React, { useState } from "react";
import styles from "../styles/ImageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // For touch swipe
  let startX = 0;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
  };

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={styles.sliderImage}
          />
        ))}
      </div>
      <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;