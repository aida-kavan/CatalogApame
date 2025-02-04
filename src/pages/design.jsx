import Header from "../components/header"
import styles from "../components.style/page.module.scss"
import Title from "../components/title";

const Design = () => {
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"نمونه کار ها "}/>
            <img src="/public/تصاویر/گالری راز.jpg" id="aida"/>
        </div>
    </div>
    </>
  )
}

export default Design