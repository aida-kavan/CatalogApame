import React from "react";
import Header from "../components/header";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Descreption from "../components/Descreption";

const Packaging = () => {
  const items = [
    { name: "لیبل آفست", link: "/print/offset/offsetlabel" },
    { name: "لیبل دیجیتال", link: "/print/digital" },
    { name: "بگ کاغذی", link: "/gift/bag" },
    { name: "لیبل بهداشتی، دارویی، غذایی", link: "/print/flakso" },
    { name: "بگ پارچه ای", link: "/packaging/bag" },
    { name: "بگ نایلونی", link: "/packaging/plasticbag" },
    { name: "هاردباکس", link: "/packaging/hardbox" },
    { name: "جعبه جواهر", link: "/packaging/jewerlybox" },
    { name: "جعبه و کارتن", link: "/packaging/box" },
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
        title={"طراحی و تولید بسته‌بندی‌های خلاقانه"}
        main={
          "بسته‌بندی یکی از مهم‌ترین عناصر در معرفی و فروش محصولات است. طراحی جعبه‌های خاص و چاپ سفارشی روی بسته‌بندی به برند شما کمک می‌کند تا متمایز شوید."
        }
        items={[
          " افزایش ارزش و جذابیت محصول",
          "محافظت از محصول در هنگام حمل و نقل",
          "تاثیرگذاری بر تصمیم خرید مشتریان"
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

export default Packaging;
