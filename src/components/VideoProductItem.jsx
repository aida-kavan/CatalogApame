import styles from "../components.style/page.module.scss";
import ImageModal from "./imageModal";
import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoProductItem = ({ img, title, code, link, desc, type, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.productItem}>
      { link && (
        <a className={styles.a} href={link}>
          برای دیدن نمونه کار کلیک کنید!
        </a>
      )}

      <div className={styles.detail}>
        <h2 style={{fontSize: "21px" , textAlign:"center", marginTop: "4px"}}>{title}</h2>
        <p>کد محصول: {code}</p>
       
        {type && (
          <p>
            نوع محصول: <span>{type}</span>
          </p>
        )}
        {price && (
          <p>
            قیمت محصول: <span id="price">{price + " تومان "}</span>
          </p>
        )}
        {desc && (
          <p>
            توضیحات:  <span>{desc}</span>
          </p>
        )}
      </div>

      {isModalOpen && (
        <ImageModal
          imageUrl={`/تصاویر/${img}`}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default VideoProductItem;
