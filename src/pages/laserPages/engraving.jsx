import { engravingNonMetal, badge, tandis } from "../../datas/laser";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/page.module.scss";
import SquareProductItem from "../../components/squareProductItem";


const Engraving = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"بج و اتیکت"} subtitle={"بج سینه نشان ‏های کوچکی هستند که کسب و کارها برای یکدست کردن پوشش کارکنان و جلب توجه بقیه نسبت به نشان ‏برند روی لباس وصل می کنند. شما می توانید با ‏سفارش این محصولات  شکل و شمایل رسمی به کسب و کارتان بدهید ‏و به نوعی حتی اعتمادسازی کنید."} />

          {badge.map((item) => (
            <SquareProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              
            />
          ))}

          <Title title={"تندیس و لوح"} subtitle={"تندیس و لوح نمادی هایی هستند از شایستگی و موفقیت در رویدادهای رسمی و فرهنگی. این اشیاء زیبا و نمادین به صورت دو بعدی و سه بعدی ساخته می‌شوند و به افراد یا گروه‌هایی که در زمینه‌های مختلف به موفقیت رسیده‌اند، اهدا می‌شوند. "} />
          {tandis.map((item) => (
            <SquareProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              
            />
          ))}



          <Title title={"حکاکی لیزری"} subtitle={"روی متریال های فلزی"}/>
          {engravingNonMetal.map((item) => (
            <SquareProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Engraving