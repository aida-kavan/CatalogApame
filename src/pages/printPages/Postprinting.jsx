import Header from "../../components/header";
import Footer from "../../components/Footer";
import styles from "../../components.style/home.module.scss";
import { Link } from "react-router-dom";

const PostPrinting = () => {
  const category = [
    { name: "یووی",  },
    { name: "طلاکوب",   },
    { name: "نقره کوب", },
    { name: "روکش سلفون مات",  },
    { name: "روکش سلفون براق",  },
    { name: "روکش سلفون مخملی",   },
    { name: "لمینت مات",  },
    { name: "لمنیت براق",  },
    { name: "لمینت سرد", },
    { name: "لمینت گرم", },
    { name: "کاترپلاتر",  },
    { name: "صحافی", },
    { name: "سیمی",  }
  ];
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {category.map((item) => (
              <div className={styles.item} style={{backgroundColor: "#ffffff3b",textAlign: "center", fontSize:"20px", color: "white", width: "160px", height: "80px" , display: "flex", alignItems:"center", justifyContent: "center"}} key={item.name}>
               
                {item.name}
              </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPrinting;
