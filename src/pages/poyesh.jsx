import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";

import { Link } from "react-router-dom";

const Poyesh = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Link to={"/poyesh"}>
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              margin: "0 auto",
              marginTop: "10px",
            }}
          >
            <img style={{ width: "100%" }} src="/icons/poyesh2.png" alt="" />
          </div>
        </Link>
        <div className={styles.matnCont}>
          <p>
            <span style={{ textAlign: "center", fontSize: "20px" }}>
              دوست داری از چاپخونه ما پول دربیاری؟
            </span>
            📢 خیلی راحت! مشتری بیار، پول ببر! 💰😍
          </p>
          <p
            style={{ textAlign: "right", fontSize: "14px", marginTop: "10px" }}
          >
            🎯 از امروز، هرکسی که از طرف تو بیاد و سفارش ثبت کنه، ۵ تا ۱۰ درصد
            مبلغ سفارش مال توئه!
          </p>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "right" }}>✅ بدون قرعه‌کشی!</p>
            <p style={{ textAlign: "right" }}>✅ بدون محدودیت!</p>
            <p style={{ textAlign: "right" }}>
              ✅ به تعداد نامحدود مشتری بیار و پول پارو کن!
            </p>
          </div>

          <p
            style={{ textAlign: "right", fontSize: "14px", marginTop: "10px" , width: "100%"}}
          >
            💡 چطوری؟ خیلی ساده!
          </p>
          <div style={{ width: "100%" }}>
            <p style={{ textAlign: "right" }}>1️⃣ مشتریت میاد چاپخونه و سفارشش رو ثبت می‌کنه.</p>
            <p style={{ textAlign: "right" }}>2️⃣ اسم تو رو به‌عنوان معرف میگه.</p>
            <p style={{ textAlign: "right" }}>
            3️⃣ بسته به نوع سفارش، ۵ تا ۱۰ درصد از مبلغش برای توئه!
            </p>
            <p style={{ textAlign: "right" }}>
            4️⃣ می‌تونی مبلغ رو نقدی بگیری یا ازش برای سفارش محصولات همین کاتالوگ استفاده کنی!
            </p>
          </div>
          <p style={{fontSize: "14px"}}>🔥 یه فرصت طلایی برای کسب درآمد راحت و بی‌دردسر! 🔥</p>

          <p style={{color: "blue", textAlign: "center" , marginTop: "5px"}}>برای کسب اطلاعات بیشتر از راه های ارتباطی زیر باهامون در تماس باش!</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Poyesh;
