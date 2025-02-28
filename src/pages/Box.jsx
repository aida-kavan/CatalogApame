import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import Slider from "../components/Slider";
import { boxPic } from "../datas/gallery";
import Descreption from "../components/Descreption";

const Billboard = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
          <Title title={"ساخت جعبه"}  />
          <Descreption main={"چاپ جعبه یا بسته بندی مناسب یکی از مهم ترین نیازهای صنایع غذایی به خصوص فست فود ها می باشد. خود بسته بندی همچنین می تواند به عنوان یک بازاریاب عمل نماید و در فروش محصول و جذب مصرف کننده کمک شایانی نمایید در چاپ جعبه میتوانیم از کاغذ و مقواهای متنوع مثل پشت طوسی، پشت سفید، ایندلبرد و حتی گلاسه استفاده نمود. برای سفارش جعبه با ابعاد و متریال دلخواه از طریق راه های ارتباطی پایین صفحه با ما در ارتباط باشید! "}/>
        <div className={styles.productCont}>
          <Slider slides={boxPic} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billboard;
