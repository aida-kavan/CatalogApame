import Header from "../components/header";
import styles from "../components.style/home.module.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Branding = () => {
  const items = [
    { name: "لیبل افست", link: "/print/offset/offsetlabel" },
    { name: "لیبل دیجیتال", link: "/print/digital" },
    { name: "لیبل خاص", link: "/print/uniquelabel" },
    { name: "استند و رول آپ", link: "/laserandsign/stand" },
  ];

  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {items.map((item) => (
            <Link to={item.link} key={item.name}>
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

export default Branding;
