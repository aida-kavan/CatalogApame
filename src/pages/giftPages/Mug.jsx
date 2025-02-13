import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem";
import { mug } from "../../datas/mug";
import Footer from "../../components/Footer";

const Mug = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"ماگ"} />
          {mug.map((item) => (
            <SquareProductItem
              img={item.image}
              code={item.Pcode}
              title={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Mug