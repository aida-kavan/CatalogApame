import React from 'react'
import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'  
const Gift = () => {
  const items = [
    { name: "سالنامه و تقویم", icon: "notebook.png", link: "/gift/notebook" },
    { name: "ست های تبلیغاتی", icon: "gift.png", link: "/gift/giftset" },
    { name: "فلش مموری", icon: "flash.png", link: "/gift/flash" },
    { name: "خودکار های تبلیغاتی", icon: "pen.png", link: "/gift/pen" },
    { name: "پاوربانک", icon: "powerbank.png", link: "/gift/powerbank" },
    { name: "چاپ روی پازل", icon: "puzzle.png", link: "/gift/puzzle" },
    { name: "ساک", icon: "bag.png", link: "/gift/bag" },
    { name: "چاپ روی لیوان", icon: "mug.png", link: "/gift/mug" },
    { name: "جاکلیدی", icon: "keychain.png", link: "/gift/keychain" },
    { name: "کوسن", icon: "pillow.png", link: "/gift/pillow" },
    { name: "بشقاب", icon: "plate.png", link: "/gift/plate" },
    { name: "موس پد", icon: "mousepad.png", link: "/gift/mousepad" },
    { name: "کلاه", icon: "hat.png", link: "/gift/hat" },

  ]

  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <div className={styles.gridCont}>
          {items.map((item) => (
            <Link to={item.link} key={item.name}>  
              <div className={styles.item}>
                <img src={`/icons/${item.icon}`} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gift
