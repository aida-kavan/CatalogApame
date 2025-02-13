import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";

const print = () => {
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          <Link to="/print/offset">
            <div className={styles.item} >
              <img src="/icons/offset.png" alt="" />

              <p>چاپ آفست</p>
            </div>
          </Link>
          <Link to="/print/digital">
            <div className={styles.item} >
              <img src="/icons/digitalprint.png" alt="" />

              <p>چاپ دیجیتال</p>
            </div>
          </Link>
          <Link to="/print/sublimation">
            <div className={styles.item} >
              <img src="/icons/clip.png" alt="" />

              <p>چاپ سابلیمیشن</p>
            </div>
          </Link>
          <Link to="/print/postprint">
            <div className={styles.item} >
              <img src="/icons/clip.png" alt="" />

              <p>خدمات بعد از چاپ</p>
            </div>
          </Link>
          <Link to="/print/silk">
            <div className={styles.item} >
              <img src="/icons/silk.png" alt="" />

              <p>چاپ سیلک</p>
            </div>
          </Link>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default print;
