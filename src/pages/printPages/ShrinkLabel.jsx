import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import ProductItem from "../../components/ProductItem";
import { shrinkLabel } from "../../datas/offsetLabel";
import Descreption from "../../components/Descreption";

const ShrinkLabel = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Descreption title={"لیبل شرینک/شیرینگ"} main={"شیرینگ pvc نوعی روکش حرارتی است که در صنایع بسته بندی کاربرد فراوان دارد. لیبل شیرینگ در واقع قشایی نازک و پلاستیکی است که در اثر حرارت جمع و به دور کالای مورد نظر پیچیده می شود. این نوع بسته بندی در صنایع غذایی، بهداشتی، دارویی و… بسیار پر کاربرد است و حتما حداقل یک بار آن را دور بطری های سس، شیر، آبمیوه، شامپو و غیره دیده اید.فیلم های خامی که در بسته بندی شرینگ پک استفاده می شوند به کمک چاپ فلکسو چاپ و نقاشی می شوند."}/>
        <div className={styles.productCont}>
          <Title title={"لیبل شرینک"} />

          {shrinkLabel.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              size={item.size}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShrinkLabel;
