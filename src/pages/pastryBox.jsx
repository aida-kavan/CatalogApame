import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/squareProductItem";
import { box } from "../datas/box";

const pastryBox = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"جعبه شیرینی"} subtitle={"برای سفارش 100 عدد تا 500 عدد از هر مدل، 10% از قیمت کسر می‌شود و برای سفارش 500 عدد به بالا از هر مدل، 15%  از قیمت کسر میشود. با بیشتر شدن ارتفاع جعبه قیمت نیز بالاتر میرود. برای تیراژ و چاپ اختصاصی با ما تماس بگیرید."}/>

          {box.map((item) => (
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
      <Footer/>
    </>
  );
};

export default pastryBox;
