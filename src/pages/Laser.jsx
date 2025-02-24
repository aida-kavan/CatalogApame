import Header from '../components/header'
import styles from '../components.style/home.module.scss'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Descreption from '../components/Descreption'

export default function Laser() {
    const items = [
        { name: "خدمات لیزر و حکاکی", link: "/laserandsign/engraving" },
        { name: "خدمات برش", link: "/laserandsign/boresh" },
        { name: "خدمات تابلو", link: "/laserandsign/tablo" },
        { name: "استند و رول آپ", link: "/laserandsign/stand" },
      ]
    
  return (
    <>
    <Header />
    <div className={styles.mainDiv} /* style={{paddingTop: "70px"}} */>
      <Link to={"/poyesh"}>
              <div style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
                <img style={{ width: "100%" }} src="/icons/poyesh.png" alt="" />
              </div>
              </Link>
      <Descreption title={"طراحی و تولید تابلو و خدمات برش لیزری"}
      main={"ساخت انواع تابلوهای تبلیغاتی مانند تابلوهای حروف برجسته، تابلوهای نئون، تابلوهای لایت‌باکس و همچنین خدمات برش لیزری برای تولید محصولات دکوراتیو و تبلیغاتی ارائه می‌شود."}
      items={[
        "افزایش دیده شدن برند در محیط‌های شهری" ,
        "ایجاد جلوه‌های بصری جذاب برای کسب‌وکار",
        "تولید محصولات خاص با برش دقیق"
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
