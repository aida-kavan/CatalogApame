import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem"
import { flash } from "../../datas/flash";
import Footer from "../../components/Footer";

const Flash = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"فلش مموری "}/>
            {flash.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Flash