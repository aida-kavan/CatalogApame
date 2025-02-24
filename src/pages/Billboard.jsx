import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/ProductItem";
import { billboard } from "../datas/billboard";
import Slider from "../components/Slider";
import {billboardPic} from "../datas/gallery"

const Billboard = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"بیلبورد ها"} />

          {billboard.map((item) => (
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
           <Title title={"نمونه کار ها"}/>
          <Slider slides={billboardPic}/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Billboard;
