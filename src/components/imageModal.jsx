import React from "react";
import styles from "../components.style/page.module.scss";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <img src={imageUrl} alt="Product" className={styles.modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;
