import Header from "../components/header";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Descreption from "../components/Descreption";

const Branding = () => {
  const items = [
    { name: "لیبل افست", link: "/print/offset/offsetlabel" },
    { name: "لیبل دیجیتال", link: "/print/digital" },
    { name: "لیبل خاص", link: "/print/uniquelabel" },
    { name: "لیبل شرینک", link: "/print/shrinklabel" },

  ];

  return (
    <>
      <Header />
      <div className={styles.mainDiv} style={{ paddingTop: "70px" }}>
        <Descreption
          title={"ایجاد لیبل‌های اختصاصی برای محصولات"}
          main={
            "لیبل‌ها نقش مهمی در معرفی برند و اطلاعات محصول دارند. این خدمات شامل طراحی و چاپ لیبل‌های پشت چسب‌دار، متالایز، شفاف و لیبل‌های خاص برای بسته‌بندی محصولات است."
          }
          items={[
            " افزایش جذابیت بصری محصولات",
            "ارائه اطلاعات محصول به مشتریان",
            "ایجاد حس اعتماد و اصالت در برند",
            "تمایز محصولات در قفسه‌های فروش",
          ]}
        />
        <div className={styles.gridCont}>
          {items.map((item) => (
            <Link to={item.link} key={item.name}>
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

export default Branding;
