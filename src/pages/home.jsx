import React from "react";
import styles from "../components.style/home.module.scss";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Link } from "react-router";
const home = () => {
  const category = [
    {
      name: "چاپ",
      icon: "print.png",
      link: "/print",
    },
    {
      name: "هدایای تبلیغاتی",
      icon: "gift.png",
      link: "/gift",
    },
    {
      name: "سایت و سئو",
      icon: "website.png",
      link: "/website",
    },
    {
      name: "سوشال مدیا",
      icon: "social.png",
      link: "/social",
    },
    {
      name: "طراحی گرافیک و برندبوک",
      icon: "design.png",
      link: "/design",
    },
    {
      name: "عکاسی و فیلمبرداری",
      icon: "photo.png",
      link: "/photo",
    },

    {
      name: "موشن گرافیک",
      icon: "clip.png",
      link: "/videomotion",
    },
    {
      name: "تابلو، لیزر و برش",
      icon: "laser.png",
      link: "/laserandsign",
    },

    {
      name: "مهر",
      icon: "stamp.png",
      link: "/stamp",
    },
    {
      name: "برندینگ و لیبل",
      icon: "branding.png",
      link: "/branding",
    },
    {
      name: "پرچم",
      icon: "flag.png",
      link: "/flag",
    },
    {
      name: "جعبه و بسته بندی",
      icon: "packaging.png",
      link: "/packaging",
    },
    {
      name: "تبلیغات محیطی",
      icon: "adverb.png",
      link: "/ooh",
    },
    {
      name: "سازه های نمایشگاهی",
      icon: "ad bulid.png",
      link: "/saze",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <Link to={"/poyesh"}>
        <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
          <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
        </div>
        </Link>
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

export default home;
