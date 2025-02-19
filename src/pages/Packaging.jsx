import React from 'react'
import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Packaging = () => {
    const items =[ 
        {name: "لیبل آفست" , link: "/print/offset/offsetlabel"},
        {name: "لیبل دیجیتال" , link: "/print/digital"},
        {name: "بگ کاغذی" , link: "/gift/bag"},
        {name: "بگ پارچه ای" , link: "/packaging/bag"},
        {name: "بگ نایلونی" , link: "/packaging/plasticbag"},
        {name: "هاردباکس" , link: "/packaging/hardbox"},
        {name: "جعبه جواهر" , link: "/packaging/jewerlybox"},
    ]
  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
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

export default Packaging