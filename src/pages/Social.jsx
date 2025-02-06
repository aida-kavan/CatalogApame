import Header from "../components/header"
import styles from "../components.style/page.module.scss";
import Plans from "../components/plans/SocialPlans";

const Social = () => {
    return (
        <>
            <Header />
            <div className={styles.mainPageCont}>
                <Plans/>
            </div>
        </>
    )
}

export default Social