import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import VideoProductItem from "../components/VideoProductItem";
import {logomotion, motiongraphic, animation} from "../datas/videomotion"

const Videomotion = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"لوگوموشن"} subtitle={"انیمیشن‌های لوگو که به برند هویت بصری پویا می‌دهند. این نوع موشن معمولاً برای معرفی برندها در ویدیوهای تبلیغاتی، استوری‌های اینستاگرام، یا ویدیوهای معرفی کسب‌وکار استفاده می‌شود."}/>
        {logomotion.map((item) => (
            <VideoProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              link={item.link}
            />
          ))}
            <Title title={"موشن گرافیک"} subtitle={"ساخت انیمیشن‌های گرافیکی برای تبلیغات، آموزش، معرفی محصولات و انتقال مفاهیم پیچیده به شیوه‌ای جذاب و قابل فهم."}/>
        {motiongraphic.map((item) => (
            <VideoProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              link={item.link}
            />
          ))}
            <Title title={"انیمیشن"} subtitle={"ساخت انیمیشن‌های حرفه‌ای با طراحی دو بعدی و سه بعدی برای تبلیغات، داستان‌سرایی و فیلم‌های آموزشی"}/>
        {animation.map((item) => (
            <VideoProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              link={item.link}
            />
          ))}
            <Title title={"تیزر"} subtitle={"ویدیوهای تبلیغاتی کوتاه برای معرفی برند، محصولات یا خدمات به شیوه‌ای تأثیرگذار."}/>
        {animation.map((item) => (
            <VideoProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Videomotion;
