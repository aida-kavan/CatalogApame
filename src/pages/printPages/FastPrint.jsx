import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import SquareProductItem from "../../components/ProductItem"
import Footer from "../../components/Footer";
import { fast } from "../../datas/fast";

const FastPrint = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"خدمات فوری "}/>
            {fast.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default FastPrint