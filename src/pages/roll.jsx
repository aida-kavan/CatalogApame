import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { roll } from "../datas/offsetLabel";

const Roll = () => {
  
  return (
    <>
      <Title title={"رول ها"} subtitle={"لیبل های رولی در ابعاد مختلف توسط دستگاه های هلیگوار و زبرا چاپ میشوند"} />
      <div className={styles.productCont}>
        {roll.map((item) => (
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
    </>
  );
};

export default Roll;
