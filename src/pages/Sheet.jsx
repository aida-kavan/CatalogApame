import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/ProductItem";

const Sheet = () => {
  const sheet = [
    {
      image: "لیبل متالایز بسته بندی.png",
      name: "لیبل متالایز  نقره ای مات و براق",
      price:"85،000"
    },
    {
      image: "لیبل متالایز طلایی.png",
      name: "لیبل متالایز  طلایی مات و براق",
      price:"85،000"
    },
    {
      image: "لیبل شیشه ای.png",
      name: "لیبل شیشه ای مات و براق",
      price:"85،000"
    },
    {
      image: "لیبل صدفی بسته بندی.png",
      name: "لیبل صدفی",
      price:"70،000"
    },
    
    {
      image: "لیبل pvc بسته بندی.png",
      name: "لیبل pvc مات و براق",
      price:"85،000"
    },
    {
      image: "لیبل کاغذی.png",
      name: "لیبل کاغذی مات و براق",
      price:"50،000"
    },
    {
      image: "لیبل کرافت.png",
      name: "لیبل کرافت ",
      price:"60،000"
    },
  ];
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
