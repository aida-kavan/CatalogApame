import React from 'react'
import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Descreption from '../components/Descreption'
const Photo = () => {
  const items = [
    {name: "عکاسی پرتره"},
    {name: "عکاسی صنعتی"},
    {name: "عکاسی محصول"},
    {name: "عکاسی کارخانه"},
    {name: "عکاسی کافه و رستوران"},

  ]

  return (
    <>
      <Header />
      <div className={styles.mainDiv}/*  style={{paddingTop: "70px"}} */>
      <Link to={"/poyesh"}>
        <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
          <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
        </div>
        </Link>
      <Descreption title={"تولید محتوای بصری حرفه‌ای برای برند شما"}
      main={"عکاسی و فیلم‌برداری تبلیغاتی شامل عکاسی صنعتی، عکاسی محصول، فیلم‌برداری تبلیغاتی، تولید ویدئوهای معرفی برند و محتوای ویدیویی برای شبکه‌های اجتماعی است."}
      items={[
        "افزایش جذابیت بصری برند",
        "ایجاد محتوای حرفه‌ای برای تبلیغات",
        "تاثیرگذاری بیشتر روی مشتریان",
        "نمایش بهتر محصولات در وب‌سایت و شبکه‌های اجتماعی"
      ]}
      />
        <div className={styles.gridCont}>
          {items.map((item) => (
            <Link to={item.link} key={item.name}>
              <div className={styles.item} style={{ backgroundColor: "#ffffff3b", textAlign: "center", fontSize: "20px", color: "white", width: "160px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }} key={item.name}>

                {item.name}
              </div>

            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Photo
