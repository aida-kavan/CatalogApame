import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import ProductItem from "../../components/productItem"
import { flask } from "../../datas/flask";
import Footer from "../../components/Footer";

const Flash = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"فلاسک "}/>
            {flask.map((item) => (
                <ProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Flash