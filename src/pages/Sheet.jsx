import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";
import { sheet } from "../datas/offsetLabel";

const Sheet = () => {
  
  return (
    <>
      <Title title={"َشیت ها"} subtitle={"لیبل های شیتی بر مبنای برگه A4 می باشند بنابراین اگر میخواهید رو سایز شیت های بزرگتری چاپ داشته باشید، قیمت را استعلام بگیرید. قیمت ها با چاپ و برش میباشد."} />
      <div className={styles.productCont}>
        {sheet.map((item) => (
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

export default Sheet;
