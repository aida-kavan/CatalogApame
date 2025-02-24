import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import ProductItem from "../../components/ProductItem"
import { bag } from "../../datas/bag";
import Footer from "../../components/Footer";


const Bag = () => {
  return (
    <>
    <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"بگ "} />
          {bag.map((item) => (
            <ProductItem
              img={item.image}
              code={item.Pcode}
              title={item.name}
              size={item.size}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Bag