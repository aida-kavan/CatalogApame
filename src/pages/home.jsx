import React from "react";
import styles from "../components.style/home.module.scss";
import Header from "../components/header";
import { Link } from "react-router";
import {
  Printer,
  Gift,
  Clapperboard,
  Users,
  Camera,
  PenTool,
} from "lucide-react";
const home = () => {
  const category = [
    // {
    //   name: "خدمات چاپ",
    //   icon: "sample.jpg",
    // },
    {
      name: "هدایای تبلیغاتی",
      icon: "calender.png",
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
    },
    // {
    //   name: "خدمات تابلو و لیزر",
    //   icon: "laser.png",
    // },
    // {
    //   name: "طراحی گرافیک",
    //   icon: "design.png",
    // },
    // {
    //   name: "عکاسی و فیلمبرداری",
    //   icon: "photo.png",
    // },
    // {
    //   name: "موشن گرافیک",
    //   icon: "clip.png",
    // },
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
    </>
  );
};

export default home;
