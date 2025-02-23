import React from 'react'
import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Adpage = () => {
  const items = [
    { name: "سالنامه و تقویم", icon: "notebook.png", link: "/Adpage/notebook" },
    { name: "ست های تبلیغاتی", icon: "Adpage.png", link: "/Adpage/Adpageset" },
    { name: "فلش مموری", icon: "flash.png", link: "/Adpage/flash" },
    { name: "خودکار های تبلیغاتی", icon: "pen.png", link: "/Adpage/pen" },


  ]

  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Adpage
