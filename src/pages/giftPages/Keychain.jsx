import { keychain } from "../../datas/keychain";
import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem"

const Keychain = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"جاکلیدی/کارتی"} />
          {keychain.map((item) => (
            <SquareProductItem
              img={item.image}
              code={item.Pcode}
              title={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Keychain;
