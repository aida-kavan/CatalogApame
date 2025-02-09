import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";
import { Link } from "react-router-dom";

const offset = () => {
  const category = [
    { name: "کارت ویزیت", icon: "print.png", link: "/print/offset/visit" },
    { name: "تراکت", icon: "print.png", link: "/print/offset/teraket" },
    { name: "سربرگ", icon: "print.png", link: "/print/offset/Sarbarg" },
    { name: "بروشور", icon: "print.png", link: "/print/offset/brochure" },
    { name: "ست اداری", icon: "print.png", link: "/print/offset/setedari" },
    { name: "بگ کاغذی", icon: "print.png", link: "/print/offset/Paperbag" },
    { name: "فولدر", icon: "print.png", link: "/print/offset/Folder" },
    { name: "ظرف غذا", icon: "print.png", link: "/print/offset/fastfood" },
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
