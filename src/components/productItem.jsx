
import styles from '../components.style/page.module.scss'
import ImageModal from './imageModal'
import React from 'react'
import { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const productItem = ({img, title, code, size, desc, type, price }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.productItem}>
      <div className={styles.imgCont} onClick={() => setIsModalOpen(true)}>
      <LazyLoadImage src={`/تصاویر/${img}`} alt={title} effect="blur" />
      </div>

      <div className={styles.detail}>
        <h2>{title}</h2>
        <p>کد محصول: {code}</p>
        {size && (
          <p>ابعاد محصول: {size}</p>
        )}
        {type && (
          <p>نوع محصول: <span>{type}</span></p>
        )}
        {desc && (
          <p>توضیحات محصول: <span>{desc}</span></p>
        )}
        {price && (
          <p >قیمت محصول: <span id='price'>{price}</span></p>
        )}
      </div>

      {isModalOpen && <ImageModal imageUrl={`/تصاویر/${img}`} onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}

export default productItem
