import React from 'react'
import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Gift = () => {
  const items = [
    { name: "سالنامه و تقویم", icon: "notebook.png", link: "/gift/notebook" },
    { name: "ست های تبلیغاتی", icon: "gift.png", link: "/gift/giftset" },
    { name: "فلش مموری", icon: "flash.png", link: "/gift/flash" },
    { name: "خودکار های تبلیغاتی", icon: "pen.png", link: "/gift/pen" },
    { name: "پاوربانک", icon: "powerbank.png", link: "/gift/powerbank" },
    { name: "فلاسک", icon: "keychain.png", link: "/gift/flask" },
    { name: "چاپ روی پازل", icon: "puzzle.png", link: "/gift/puzzle" },
    { name: "ساک", icon: "bag.png", link: "/gift/bag" },
    { name: "چاپ روی لیوان", icon: "mug.svg", link: "/gift/mug" },
    { name: "جاکلیدی", icon: "keychain.png", link: "/gift/keychain" },
    { name: "هاردباکس", icon: "keychain.png", link: "/packaging/hardbox" },

    // { name: "کوسن", icon: "pillow.png", link: "/pillow" },
    // { name: "بشقاب", icon: "plate.png", link: "/plate" },
    // { name: "موس پد", icon: "mousepad.png", link: "/mousepad" },
    // { name: "کلاه", icon: "hat.png", link: "/gift/hat" },

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

export default Gift
