import { tablo, lightbox } from "../../datas/tablo";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import ProductItem from "../../components/productItem";
import SquareProductItem from "../../components/squareProductItem";


const Tablo = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"خدمات تابلو"} />

          {tablo.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              
            />
          ))}
          <Title title={" لایت باکس"} />

          {lightbox.map((item) => (
            <SquareProductItem
              img={item.image}
              title={item.name}
              size={item.size}
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

export default Tablo