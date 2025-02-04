import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import ProductItem from "../../components/productItem";
import { NoteBook } from "../../datas/notebook";
import { Calender } from "../../datas/calender";
import { useState } from "react";


const Notebook = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Header/>
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>

          <Title title={"سالنامه ها"} />

          {NoteBook.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} desc={item.desc} type={item.type} price={item.price}/>
          ))}
          <Title title={"تقویم ها"} />

          {Calender.map((item)=>(
            <ProductItem img={item.image} title={item.name} code={item.Pcode} desc={item.desc} type={item.type}/>
          ))}
          

        </div>
      </div>
    </>
  );
};

export default Notebook;