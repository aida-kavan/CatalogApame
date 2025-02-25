import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Descreption from "../components/Descreption";

const OOH = () => {
  const category = [
    {
      name: "تابلو و لایت باکس",
      link: "/laserandsign/tablo",
    },
    {
      name: "بیلبورد",
      link: "/ooh/billboard",
    },
    {
      name: "استند و رول اپ",
      link: "/laserandsign/stand",
    },
    {
      name: "پرچم",
      link: "/flag",
    },
    
    
  ];

  return (
    <>
      <Header />
      
      <div className={styles.mainDiv} >
        <Link to={"/poyesh"}>
                <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
                  <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
                </div>
                </Link>
      <Descreption title={"افزایش دیده شدن برند در سطح شهر"} 
      main={"تبلیغات محیطی شامل بیلبوردهای شهری، استرابوردها، لمپوست بنرها، تبلیغات روی وسایل حمل‌ونقل عمومی و سایر روش‌های تبلیغاتی در فضای باز است."}
      items={[
        "افزایش آگاهی از برند در مقیاس وسیع",
        "جذب مشتریان جدید از طریق تبلیغات شهری",
        "نمایش پیام تبلیغاتی به جمعیت گسترده"
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

export default OOH;
