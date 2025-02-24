import Header from "../../../components/header";
import Footer from "../../../components/Footer";
import styles from "../../../components.style/page.module.scss";
import Title from "../../../components/title";
import ProductItem from "../../../components/ProductItem";
import { paperbag } from "../../../datas/peperbag";

const PaperBag = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"بگ کاغذی"} />

          {paperbag.map((item) => (
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

export default PaperBag;
