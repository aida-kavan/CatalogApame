import React from "react";
import style from "../../components.style/card.module.scss";

const NewCardDesign = ({ photo, title, desc, services }) => {

  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={`/galleryPhotos/${photo}`} alt="product" />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={style.table}>
        <tr className={style.tableRow} style={{width:"30%", backgroundColor: '#3d67a1' ,  color: "WHITE"}}>
          <td>عنوان خدمت</td>
          <td>قیمت</td>
        </tr>
        {services.map((item) => (
          <tr className={style.tableRow}>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </div>
    </div>
  );
};

export default NewCardDesign;
