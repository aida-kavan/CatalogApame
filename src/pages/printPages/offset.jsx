import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";
import { Link } from "react-router-dom";

const offset = () => {
  const category = [
    { name: "کارت ویزیت", link: "/print/offset/visit" },
    { name: "تراکت",  link: "/print/offset/teraket" },
    { name: "سربرگ", link: "/print/offset/Sarbarg" },
    { name: "بروشور",  link: "/print/offset/brochure" },
    { name: "ست اداری",  link: "/print/offset/setedari" },
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
              <div className={styles.item} key={item.name}>
                <img src={`/icons/${item.icon}`} alt="" />

                <p>{item.name}</p>
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
