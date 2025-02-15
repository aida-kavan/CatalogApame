import Slider from "../components/Slider";
import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import {FabricBagSlides} from "../datas/gallery"


const Gallery = () => {
  

  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Title title={"نمونه بگ پارچه ای"}/>
          <Slider slides={FabricBagSlides} />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
