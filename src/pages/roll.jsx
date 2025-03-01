import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import ProductItem from "../components/productItem";

const Roll = () => {
  const roll = [
    {
      image: "لیبل متالایز بسته بندی.png",
      name: "لیبل متالایز  نقره ای مات و براق",
    },
    {
      image: "لیبل متالایز طلایی.png",
      name: "لیبل متالایز  طلایی مات و براق",
    },
    {
      image: "لیبل شیشه ای.png",
      name: "لیبل شیشه ای مات و براق",
    },
    {
      image: "لیبل صدفی بسته بندی.png",
      name: "لیبل صدفی",
    },
    {
      image: "لیبل pp.png",
      name: "لیبل PP مات و براق",
    },
    {
      image: "لیبل pvc بسته بندی.png",
      name: "لیبل pvc مات و براق",
    },
    {
      image: "لیبل کاغذی.png",
      name: "لیبل کاغذی مات و براق",
    },
  ];
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
