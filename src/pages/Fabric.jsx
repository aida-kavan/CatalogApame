import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { fabricBag40, fabricBag60, fabricBag90 } from "../datas/fabricBag";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { FabricBagSlides } from "../datas/gallery";

const FabricBag = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <a href="#slides">
            <div className={styles.galleryBtn}>
              برای مشاهده نمونه کارها کلیک کنید!
            </div>
          </a>

          <Title
            title={" گرماژ 40گرم"}
            subtitle={"بگ پارچه ای در دو مدل فلت و کف کاست"}
          />
          {fabricBag40.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}

          <Title
            title={" گرماژ 60گرم"}
            subtitle={"بگ پارچه ای در سه مدل فلت و کف کاست و سه طرف کاست"}
          />
          {fabricBag60.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}

          <Title
            title={" گرماژ 90گرم"}
            subtitle={"بگ پارچه ای در سه مدل فلت و کف کاست و سه طرف کاست"}
          />
          {fabricBag90.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}
            <div id="slides">
          <Title title={"نمونه"}/>
          <Slider slides={FabricBagSlides}  />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FabricBag;
