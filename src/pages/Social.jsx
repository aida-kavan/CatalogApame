import Header from "../components/header";
import styles from "../components.style/page.module.scss";
import Plans from "../components/plans/SocialPlans";
import Footer from "../components/Footer";
import Descreption from "../components/Descreption";

const Social = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Descreption
          title={"بازاریابی دیجیتال در شبکه‌های اجتماعی"}
          main={
            "سوشال مدیا یکی از مهم‌ترین ابزارهای بازاریابی دیجیتال است که به برندها کمک می‌کند تا با مخاطبان خود ارتباط برقرار کنند. خدمات این بخش شامل تولید محتوا، طراحی پست و استوری، تبلیغات هدفمند، مدیریت صفحه و افزایش تعامل کاربران است."
          }
          items={[
            "افزایش آگاهی از برند",
            "جذب مشتریان جدید و ایجاد تعامل بیشتر",
            "ایجاد کمپین‌های تبلیغاتی موثر",
            "افزایش فالوور و تعامل ارگانیک",
          ]}
        />
        <Plans />
      </div>
      <Footer />
    </>
  );
};

export default Social;
