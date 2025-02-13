import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";
import { Link } from "react-router-dom";

const offset = () => {
  const category = [
    { name: "کارت ویزیت", link: "/print/offset/visit" , icon: "visit.png" },
    { name: "تراکت",  link: "/print/offset/teraket" },
    { name: "سربرگ", link: "/print/offset/Sarbarg" },
    { name: "بروشور",  link: "/print/offset/brochure" },
    { name: "ست اداری",  link: "/print/offset/setedari" },
    { name: "لیبل",  link: "/print/offset/offsetlabel" },
    { name: "بگ کاغذی", link: "/print/offset/Paperbag" },
    { name: "فولدر",  link: "/print/offset/Folder" },
    { name: "ظرف غذا", link: "/print/offset/fastfood" },
    { name: "پوستر", link: "/print/offset/poster" },
    { name: "فاکتور", link: "/print/offset/invoice" },
    { name: "پاکت", link: "/print/offset/pocket" },
  ];
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {category.map((item) => (
            <Link to={item.link}>
              <div className={styles.item} style={{backgroundColor: "#ffffff3b", fontSize:"20px", color: "white", width: "150px", height: "80px" , display: "flex", alignItems:"center", justifyContent: "center"}} key={item.name}>
               
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default offset;
