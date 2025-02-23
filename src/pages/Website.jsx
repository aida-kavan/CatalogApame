import Header from "../components/header";
import Title from "../components/title";
import styles from "../components.style/page.module.scss";
import SitePlans from "../components/plans/SitePlans";
import Descreption from "../components/Descreption";

const Website = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Descreption
          title={"طراحی وب‌سایت حرفه‌ای و بهینه‌سازی آن"}
          main={
            "امروزه داشتن یک وب‌سایت استاندارد برای هر کسب‌وکاری ضروری است. طراحی سایت در کنار بهینه‌سازی موتورهای جستجو (SEO) باعث می‌شود که وب‌سایت شما در نتایج گوگل دیده شود و بازدیدکنندگان بیشتری جذب کند."
          }
          items={[
            "ایجاد یک پایگاه دیجیتال برای کسب‌وکار",
            "افزایش اعتبار و اعتماد مشتریان",
            "جذب ترافیک ارگانیک از گوگل",
            "فروش آنلاین و ارائه خدمات به مشتریان"
          ]}
        />
        <Title title={"پلن های وبسایت"} />
        <SitePlans />
      </div>
    </>
  );
};

export default Website;
