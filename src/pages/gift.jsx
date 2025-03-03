import React from "react";
import Header from "../components/header";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Descreption from "../components/Descreption";
const Gift = () => {
  const items = [
    { name: "سالنامه و تقویم", icon: "notebook.png", link: "/gift/notebook" },
    { name: "ست های تبلیغاتی", icon: "gift.png", link: "/gift/giftset" },
    { name: "فلش مموری", icon: "flash.png", link: "/gift/flash" },
    { name: "خودکار های تبلیغاتی", icon: "pen.png", link: "/gift/pen" },
    { name: "ظروف تبلیغاتی", icon: "pen.png", link: "/gift/zarf" },
    { name: "پاوربانک", icon: "powerbank.png", link: "/gift/powerbank" },
    { name: "فلاسک", icon: "keychain.png", link: "/gift/flask" },
    { name: "تندیس و لوح", icon: "keychain.png", link: "/gift/tandis" },
    { name: "چاپ روی پازل", icon: "puzzle.png", link: "/gift/puzzle" },
    { name: "ساک", icon: "bag.png", link: "/gift/bag" },
    { name: "چاپ روی لیوان", icon: "mug.svg", link: "/gift/mug" },
    { name: "جاکلیدی", icon: "keychain.png", link: "/gift/keychain" },
    { name: "هاردباکس", icon: "keychain.png", link: "/packaging/hardbox" },

    // { name: "کوسن", icon: "pillow.png", link: "/pillow" },
    // { name: "بشقاب", icon: "plate.png", link: "/plate" },
    // { name: "موس پد", icon: "mousepad.png", link: "/mousepad" },
    // { name: "کلاه", icon: "hat.png", link: "/gift/hat" },
  ];

  return (
    <>
      <Header />
      <div className={styles.mainDiv} /* style={{paddingTop: "70px"}} */>
      <Link to={"/poyesh"}>
              <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
                <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
              </div>
              </Link>   
        <Descreption
          title={"هدایایی خاص برای ماندگاری در ذهن مشتری"}
          main={
            "هدایای تبلیغاتی یکی از راه‌های مؤثر برای حفظ مشتریان و افزایش آگاهی از برند است. این محصولات شامل خودکار، سررسید، ماگ، فلش مموری، تقویم، فلاسک و دیگر اقلامی است که نام و لوگوی برند شما را همراه مخاطبان می‌کند."
          }
          items={[
            "افزایش ماندگاری برند در ذهن مشتریان",
            "تبلیغات غیرمستقیم و تاثیرگذار",
            "تقویت رابطه با مشتریان و شرکای تجاری",
            "مناسب برای نمایشگاه‌ها و رویدادهای تجاری",
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

export default Gift;
