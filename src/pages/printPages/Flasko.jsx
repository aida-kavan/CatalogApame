import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import ProductItem from "../../components/squareProductItem";
import Descreption from "../../components/Descreption";
import { foodPocket } from "../../datas/foodPocket";

const UniqueLabel = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
          <Descreption
            title={"چاپ فلکسو"}
            main={
              "چاپ فلکسو یکی از متداولترین روشهای چاپی برای چاپ روی متریال‌های غیر جاذب می‌باشد. چاپ فلکسو به صورت برجسته و روتاری می‌باشد و روی متریال‌های رولی چاپ می‌شود. ماشین چاپ این مجموعه از  عرض زیاد که بیشتر برای چاپ لفاف‌ها استفاده می‌شوندبهره میبرد که با قابلیت چاپ 10 رنگ  می باشد و می‌توانند تا عرض 127 سانتیمتر را چاپ کنند."
            }
             items={["برای کسب اطلاعات بیشتر تماس بگیرید!"]}
          />
        <div className={styles.productCont}>
          {foodPocket.map((item) => (
            <ProductItem
              img={item.image}
              title={item.name}
              code={item.Pcode}
              desc={item.desc}
              type={item.type}
              size={item.size}
              price={item.price}
            />
          ))}
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UniqueLabel;

