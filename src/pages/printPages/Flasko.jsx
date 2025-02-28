import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";

import Title from "../../components/title";
import { Link, NavLink, Outlet } from "react-router-dom";
import ProductItem from "../../components/squareProductItem";
import Descreption from "../../components/Descreption";
import { foodPocket } from "../../datas/foodPocket";

const UniqueLabel = () => {
  const items = [
    { name: "رول ", link: "./roll" },
    { name: "شیت", link: "./sheet" },];
  return (
    <>
      <Header />
      <div className={styles.mainDiv} /* style={{paddingTop: "70px"}} */>
        <Link to={"/poyesh"}>
          <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
            <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
          </div>
        </Link>

        <div className={styles.gridCont}>
          {items.map((item) => (
            <NavLink to={item.link} key={item.name}>
              <div
                className={styles.item}
                style={{
                  backgroundColor: "#ffffff3b",
                  textAlign: "center",
                  fontSize: "20px",
                  color: "white",
                  width: "160px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={item.name}
              >
                {item.name}
              </div>
            </NavLink>
          ))}

        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );


};

export default UniqueLabel;

{/* <Descreption
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
          
        </div> */}