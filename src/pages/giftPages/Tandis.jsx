import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import ProductItem from "../../components/squareProductItem"
import { tandis } from "../../datas/laser";
import Footer from "../../components/Footer";

const Tandis = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"تندیس و لوح "} subtitle={"قیمت پلاک روی پایه تندیس و خود پایه تندیس صورت جداگانه محاسبه میشوند."}/>
            {tandis.map((item) => (
                <ProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Tandis