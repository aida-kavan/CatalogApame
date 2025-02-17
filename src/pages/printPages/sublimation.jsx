import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";
import { Link } from "react-router-dom"

const sublimation = () => {
  const category = [
    { name: "چاپ روی پازل", icon: "puzzle.png", link: "/gift/puzzle" },
    { name: "چاپ روی لیوان", icon: "mug.svg", link: "/gift/mug" },
    { name: "کوسن", icon: "pillow.png", link: "/pillow" },
    { name: "بشقاب", icon: "plate.png", link: "/plate" },
    { name: "موس پد", icon: "mousepad.png", link: "/mousepad" },
    { name: "کلاه", icon: "hat.png", link: "/gift/hat" },
  ];
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {category.map((item) => (
            <Link to={item.link}>
              <div className={styles.item} style={{backgroundColor: "#ffffff3b",textAlign: "center", fontSize:"20px", color: "white", width: "160px", height: "80px" , display: "flex", alignItems:"center", justifyContent: "center"}} key={item.name}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default sublimation