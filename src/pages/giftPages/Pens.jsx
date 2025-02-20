import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem";
import { pen } from "../../datas/pen";
import Footer from "../../components/Footer";

const Pen = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"خودکار تبلیغاتی "} />
          {pen.map((item) => (
            <SquareProductItem
              img={item.image}
              code={item.Pcode}
              title={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pen