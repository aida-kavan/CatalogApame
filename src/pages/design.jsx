import Header from "../components/header";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import Descreption from "../components/Descreption";
import DesignPlans from "../components/plans/designPlans"
import Slider from "../components/Slider"
import {logo} from "../datas/gallery"

const Design = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Descreption
            title=" هویت بصری قدرتمند برای برند شما"
            main="طراحی گرافیک و برندینگ شامل مجموعه‌ای از خدمات است که هویت بصری برند شما را شکل می‌دهد. این خدمات شامل طراحی لوگو، کارت ویزیت، بروشور، پوستر، ست اداری، عکاسی و تولیدمحتوا و سایر المان‌های گرافیکی است که برند شما را از رقبا متمایز می‌کند."
            items={[
              "ایجاد یک هویت بصری منسجم برای کسب‌وکار",
              "کمک به شناخت سریع‌تر برند توسط مخاطبان",
              "افزایش اعتبار و حرفه‌ای بودن برند",
              "بهبود تعامل بصری در تبلیغات و شبکه‌های اجتماعی",
            ]}
          />
          <DesignPlans/>
          <Title title={"نمونه کار ها "} subtitle={"به دلیل محدودیت های حقوقی و قانونی در برندینگ از گذاشتن نمونه کارهای بیشتر معذوریم!"} />
          <Slider slides={logo}/>
        </div>
      </div>
    </>
  );
};

export default Design;
