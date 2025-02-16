import { engravingNonMetal } from "../../datas/laser";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import SquareProductItem from "../../components/squareProductItem";


const Engraving = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"حکاکی لیزری"} subtitle={"روی متریال های غیر فلزی"}/>

          {engravingNonMetal.map((item) => (
            <SquareProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              
            />
          ))}
          <Title title={"حکاکی لیزری"} subtitle={"روی متریال های فلزی"}/>

          {engravingNonMetal.map((item) => (
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

export default Engraving