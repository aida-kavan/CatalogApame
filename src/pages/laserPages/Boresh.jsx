import { boresh } from "../../datas/boresh";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import ProductItem from "../../components/productItem";


const Engraving = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"برش لیزری"} />

          {boresh.map((item) => (
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
  )
}

export default Engraving