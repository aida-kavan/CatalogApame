import { puzzle } from "../../datas/puzzle";
import SquareProductItem from "../../components/squareProductItem";
import Header from "../../components/header";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import Footer from "../../components/Footer";
const Puzzle = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"پازل ها"} />

          {puzzle.map((item) => (
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
  );
};

export default Puzzle;
