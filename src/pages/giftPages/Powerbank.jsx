import { powerbank } from "../../datas/powerbank";
import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem"


const Powerbank = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"فلش مموری "}/>
            {powerbank.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Powerbank