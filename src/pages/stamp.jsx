import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import { stampRectangleMobi,stamp1,numberstamp2, pocketStamp,numberstamp, datastamp1,datestamp2, stamp3, berenji, moom } from "../datas/stamp";
import StampTable from "../components/stampTable";

const Folder = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"مهر ژلاتینی"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر پرینتی مستطیلی.jpg" />
          </div>
          <StampTable data={stampRectangleMobi} />

          <Title title={"مهر لیزری"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر لیزری.jpg" />
          </div>
          <StampTable data={stamp1} />


          <Title title={"مهر جیبی"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر جیبی.png" />
          </div>
          <StampTable data={pocketStamp} />


          <Title title={"تاریخ زن "} subtitle={"مهر تاریخ زن دستی"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر تاریخ زن.png" />
          </div>
          <StampTable data={datastamp1} />


          <Title title={"تاریخ زن "} subtitle={"مهر پرینتی تاریخ زن اتوماتیک"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/تاریخ زن اتوماتیک.png" />
          </div>
          <StampTable data={datestamp2} subtitle={""}/>

          
          <Title title={"شماره زن "} subtitle={"مهر شماره زن دستی"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/شماره زن دستی.png" />
          </div>
          <StampTable data={numberstamp} subtitle={""}/>
          

          <Title title={"شماره زن "} subtitle={"مهر شماره زن اتوماتیک"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/شماره زن اتوماتیک.png" />
          </div>
          <StampTable data={numberstamp2} />
          

          <Title title={"برجسته "} subtitle={"مهر برجسته"} />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر برجسته.png" />
          </div>
          <StampTable data={stamp3} />

          
          <Title title={"برنجی "}  />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر برنجی.png" />
          </div>
          <StampTable data={berenji} />

          
          <Title title={"مهر و موم"}  />
          <div className={styles.imgCont}>
            <img src="/public/تصاویر/مهر و موم.png" />
          </div>
          <StampTable data={moom} />

          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Folder;
