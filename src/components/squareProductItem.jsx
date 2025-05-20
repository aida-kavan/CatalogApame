import styles from "../components.style/page.module.scss";
import ImageModal from "./imageModal";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Share2 } from "lucide-react";

const SquareProductItem = ({ img, title, code, size, desc, type, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buildMessage = ({ title, code, type, size, price, desc }) => {
  let message = `📦 محصول: ${title}\nکد محصول: ${code}`;

  if (type) message += `\nنوع: ${type}`;
  if (size) message += `\nابعاد: ${size}`;
  if (price) message += `\nقیمت: ${price} تومان`;
  if (desc) message += `\nتوضیحات: ${desc}`;

  return message;
};
const handleMobileShare = () => {
  const message = buildMessage({ title, code, type, size, price, desc });
  
  if (navigator.share) {
    navigator.share({
      text: message,
    })
      .then(() => console.log('✅ پیام ارسال شد'))
      .catch((err) => console.error('❌ ارسال لغو شد یا ارور داد:', err));
  } else {
    alert('مرورگر شما اشتراک‌گذاری مستقیم را پشتیبانی نمی‌کند.');
  }
};
  return (
    <div className={styles.SproductItem}>
      <div className={styles.SimgCont} onClick={() => setIsModalOpen(true)}>
        <LazyLoadImage src={`/تصاویر/${img}`} alt={title} effect="blur" />
      </div>

      <div className={styles.Sdetail}>
         <div
          style={{
            width: "100%",
            marginTop: "10px",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "solid 0.5px #aaaaaa81",
          }}
        >
          <h2>{title}</h2>
          <Share2 width={"18px"} onClick={handleMobileShare} />
        </div>
        <p>کد محصول: {code}</p>
        {size && <p>ابعاد محصول: {size}</p>}
        {type && (
          <p>
            دسته بندی: <span>{type}</span>
          </p>
        )}
        {desc && (
          <p>
            توضیحات محصول: <span>{desc}</span>
          </p>
        )}
        {price && (
          <p>
            قیمت محصول: <span>{price}</span>
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

export default SquareProductItem;
