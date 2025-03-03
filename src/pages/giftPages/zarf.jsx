import { zarf } from "../../datas/zarf";
import ProductItem from "../../components/productItem";
import Header from "../../components/header";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import Footer from "../../components/Footer";
const Zarf = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"ظرف تبلیغاتی"} />

          {zarf.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Zarf;
