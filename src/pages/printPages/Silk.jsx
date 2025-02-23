import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";

const Silk = () => {
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.silk}>
          <h2>چاپ سیلک</h2>
          <p>
            چاپ سیلک یا چاپ سیلک اسکرین یک روش چاپ است که در آن از یک قاب توری
            با سوراخ های بسیار ریز برای انتقال رنگ به سطح مورد نظر استفاده می
            شود. این روش چاپ برای چاپ روی طیف گسترده ای از سطوح، از جمله پارچه،
            کاغذ، پلاستیک، شیشه و فلز استفاده می شود.
          </p>
          <h3 style={{ textAlign: "center" }}>امکان چاپ بر روی:</h3>
          <p style={{ textAlign: "right" , fontSize: "14px"}}>
            <ol>امکان چاپ بر روی نایلکس و نایلون و CD- DVB</ol>
            <ol>امکان چاپ بر روی دفتر تلفن، سر رسید و تقویم دیواری</ol>

            <ol>
              امکان چاپ روی تابلوهای هنری، تابلوهای صنعتی و تابلوهای اطلاع رسانی
            </ol>
            <ol>
              چاپ روی اشیاء تبلیغاتی مثل ساعت و خودکار، گونی، پارچه و البسه
            </ol>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Silk;
