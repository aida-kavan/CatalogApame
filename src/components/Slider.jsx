import React, { useState } from "react";
import styles from "../components.style/slider.module.scss"; // فایل CSS برای استایل
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import ImageModal from "./imageModal";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <div className={styles.imageContainer}>
          <img  onClick={() => setIsModalOpen(true)}
            src={slides[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <p className="caption">{slides[currentIndex].caption}</p>
      </div>
      <button onClick={prevSlide} className={styles.sliderButton}>
        <MoveLeftIcon  size={18}/>
      </button>
      <button onClick={nextSlide} className={styles.sliderButton}>
        <MoveRightIcon size={18} />
      </button>
      <div className={styles.dotContainer}>
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      {isModalOpen && (
        <ImageModal
          imageUrl={slides[currentIndex].img}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
    
  );
};

export default Slider;
