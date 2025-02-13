import { giftset } from "../../datas/giftset";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import SquareProductItem from "../../components/squareProductItem";


const GiftSet = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"ست تبلیغاتی"} />

          {giftset.map((item) => (
            <SquareProductItem
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

export default GiftSet