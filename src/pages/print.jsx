import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";

const print = () => {
  const category = [
    {
      name: "چاپ آفست",
      link: "/print/offset",
    },
    {
      name: "چاپ دیجیتال",
      link: "/print/digital",
    },
    {
      name: "چاپ سابلیمیشن",
      link: "/print/postprint",
    },
    {
      name: "خدمات بعد از چاپ",
      link: "/print/postprint",
    },
    {
      name: "چاپ سیلک",
      link: "/print/silk",
    },
    {
      name: "چاپ پرده",
      link: "/print/curtain",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {category.map((item) => (
            <Link to={item.link}>
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
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default print;
