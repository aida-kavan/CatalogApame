import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Descreption from "../components/Descreption";

const print = () => {
  const category = [
    {
      name: "چاپ آفست",
      link: "/print/offset",
    },
    {
      name: "چاپ دیجیتال",
      link: "/print/digital",
    },
    {
      name: "چاپ فلکسو",
      link: "/print/flakso",
    },
    {
      name: "چاپ سابلیمیشن",
      link: "/print/postprint",
    },
    {
      name: "خدمات بعد از چاپ",
      link: "/print/postprint",
    },
    {
      name: "چاپ سیلک",
      link: "/print/silk",
    },
    {
      name: "چاپ پرده",
      link: "/print/curtain",
    },
    {
      name: "فوم برد و تخته شاسی",
      link: "/print/foam&mdf",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.mainDiv} style={{paddingTop: "70px"}}>
      <Descreption title={"خدمات چاپ با بالاترین کیفیت"} 
      main={"خدمات چاپ شامل چاپ کارت ویزیت، بروشور، کاتالوگ، پوستر، لیبل پرده، سیلک و دیگر محصولات چاپی است که برای تبلیغات و برندینگ ضروری هستند."}
      items={[
        "ارائه اطلاعات کسب‌وکار در قالب چاپی",
        "تبلیغات آفلاین موثر",
        "جذب مشتریان از طریق بروشورهای جذاب",
        "برندینگ از طریق محصولات چاپی"
      ]}
      />
        <div className={styles.gridCont}>
          {category.map((item) => (
            <Link to={item.link}>
              <div
                className={styles.item}
                style={{
                  backgroundColor: "#ffffff3b",
                  textAlign: "center",
                  fontSize: "20px",
                  color: "white",
                  width: "160px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={item.name}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default print;
