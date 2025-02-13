import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { flag } from "../datas/flags";

const Flag = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"پرچم ها"} />

          {flag.map((item) => (
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
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Flag;
