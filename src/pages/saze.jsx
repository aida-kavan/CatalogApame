import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/ProductItem";
import { counter,popup } from "../datas/saze";
import {stand} from "../datas/stand.js"

const Saze = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"کانتر"} subtitle={"میز کانتر نمایشگاهی یکی از مهم‌ترین گام‌ها در طراحی غرفه‌های نمایشگاهی است که تأثیر مستقیم بر جلب توجه بازدیدکنندگان دارد. این میزها علاوه بر اینکه به‌عنوان یک نقطه کانونی برای ارائه محصولات، کاتالوگ‌ها و اطلاعات تبلیغاتی عمل می‌کنند، به نظم و سازمان‌دهی فضای غرفه نیز کمک می‌کنند."}/>
          {counter.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}
          <Title title={"پاپ آپ"} subtitle={"این سازه ها نیاز به دیوار ندارند زیرا خود به عنوان یک دیوار و جدا کننده عمل نموده و فضای اختصاصی را برای شما شکل می دهد. در انتها نیز به همان راحتی برپا شدن به سرعت جمع و در یک فضای کیف مانند نگهداری می شود. این محصول به سادگی قابل حمل و نقل و جابجایی و برپایی است و به سهولت نیز جمع می شود و برای مصارف بعدی در یک فضای کوچک نگهداری می شود."}/>
          {popup.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}
          <Title title={"استند/رول‌اپ"} subtitle={"این سازه ها به شکل های مختلف طراحی می شوند. نوع پر کاربرد این سازه ها رول آپ است. دلیل نام گذاری این سازه ها به خاطر نوع طراحی و عملکرد ویژه آن ها است. به دلیل وجود فنر در سازه متریال چاپی بر روی آن به صورت عمودی می ایستند. "}/>
          {stand.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              price={item.price}
              size={item.size}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Saze;
