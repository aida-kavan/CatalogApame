import React from "react";
import styles from "../components.style/home.module.scss";
import Header from "../components/header";
import { Link } from "react-router";

import Footer from "../components/Footer";
const home = () => {
  const category = [
    {
      name: "خدمات چاپ",
      icon: "print.png",
      link: "/print"
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
      link: "/social"
    },
    {
      name: "خدمات تابلو و لیزر",
      icon: "laser.png",
    },
    {
      name: "طراحی گرافیک",
      icon: "design.png",
      link: "/stamp"
    },
    {
      name: "مهر",
      icon: "design.png",
      link: "/stamp"
    },
    {
      name: "پرچم",
      icon: "design.png",
    },
    {
      name: "عکاسی و فیلمبرداری",
      icon: "photo.png",
    },
    {
      name: "موشن گرافیک",
      icon: "clip.png",
    },
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
      <Footer/>
    </>
  );
};

export default home;
