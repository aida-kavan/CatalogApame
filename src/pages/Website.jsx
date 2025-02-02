import Header from "../components/header"
import Title from "../components/title"
import styles from "../components.style/page.module.scss";
import Plans from "../components/Plans"

const Website = () => {
    return (
        <>
            <Header />
            <div className={styles.mainPageCont}>
                <div className={styles.productCont}>
                    <Title title={"خدمات وبسایت"} />
                    <Plans/>
                </div>
            </div>
        </>
    )
}

export default Website