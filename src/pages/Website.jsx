import Header from "../components/header"
import Title from "../components/title"
import styles from "../components.style/page.module.scss";
import SitePlans from "../components/plans/SitePlans"

const Website = () => {
    return (
        <>
            <Header />
            <div className={styles.mainPageCont}>
                    <Title title={"پلن های وبسایت"} />
                    <SitePlans/>
                   
                
            </div>
        </>
    )
}

export default Website