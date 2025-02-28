import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import SquareProductItem from "../../components/ProductItem"
import Footer from "../../components/Footer";
import { fast } from "../../datas/fast";
import Slider from "../../components/Slider"

const FastPrint = () => {
  const slides =[
    {
      img: "/بنر/ترحیم مادر-1.png",
      caption: "ترحیم مادر کد 1"
    },
    {
      img: "/بنر/ترحیم مادر-2.png",
      caption: "ترحیم مادر کد 2"
    },
    {
      img: "/بنر/ترحیم مادر-3.png",
      caption: "ترحیم مادر کد 3"
    },
    {
      img: "/بنر/ترحیم مادر-4.png",
      caption: "ترحیم مادر کد 4"
    },
    {
      img: "/بنر/ترحیم مادر-5.png",
      caption: "ترحیم مادر کد 5"
    },
    {
      img: "/بنر/ترحیم مادر-6.png",
      caption: "ترحیم مادر کد 6"
    },
    {
      img: "/بنر/ترحیم مادر-7.png",
      caption: "ترحیم مادر کد 7"
    },
    {
      img: "/بنر/ترحیم مادر-8.png",
      caption: "ترحیم مادر کد 8"
    },
  {
    img: "/بنر/ترحیم پدر-1.png",
    caption:"ترحیم پدر کد 1"
  },
  {
    img: "/بنر/ترحیم پدر-2.png",
    caption:"ترحیم پدر کد 2"
  },
  {
    img: "/بنر/ترحیم پدر-3.png",
    caption:"ترحیم پدر کد 3"
  },
  {
    img: "/بنر/ترحیم پدر-4.png",
    caption:"ترحیم پدر کد 4"
  },
  {
    img: "/بنر/ترحیم پدر-5.png",
    caption:"ترحیم پدر کد 5"
  },
  {
    img: "/بنر/ترحیم پدر-6.png",
    caption:"ترحیم پدر کد 6"
  },
  {
    img: "/بنر/ترحیم پدر-7.png",
    caption:"ترحیم پدر کد 7"
  },
  {
    img: "/بنر/ترحیم پدر-8.png",
    caption:"ترحیم پدر کد 8"
  },
  {
    img: "/بنر/ترحیم پدر-9.png",
    caption:"ترحیم پدر کد 9"
  },
  {
    img: "/بنر/ترحیم پدر-10.png",
    caption:"ترحیم پدر کد 10"
  },
  {
    img: "/بنر/ترحیم پدر-11.png",
    caption:"ترحیم پدر کد 11"
  },
  {
    img: "/بنر/ترحیم پدر-12.png",
    caption:"ترحیم پدر کد 12"
  },
  {
    img: "/بنر/ترحیم پدر-13.png",
    caption:"ترحیم پدر کد 13"
  },
  {
    img: "/بنر/ترحیم پدر-14.png",
    caption:"ترحیم پدر کد 14"
  },
  {
    img: "/بنر/ترحیم پدر-15.png",
    caption:"ترحیم پدر کد 15"
  },
  {
    img: "/بنر/ترحیم جوان-1.jpg",
    caption:"ترحیم جوان کد 1"
  },
  {
    img: "/بنر/ترحیم جوان-2.jpg",
    caption:"ترحیم جوان کد 2"
  },
  {
    img: "/بنر/ترحیم جوان-3.jpg",
    caption:"ترحیم جوان کد 3"
  },
  {
    img: "/بنر/ترحیم جوان-4.png",
    caption:"ترحیم جوان کد 4"
  },
  {
    img: "/بنر/ترحیم جوان-5.png",
    caption:"ترحیم جوان کد 5"
  },
  {
    img: "/بنر/ترحیم جوان-6.png",
    caption:"ترحیم جوان کد 6"
  },
  {
    img: "/بنر/ترحیم جوان-7.png",
    caption:"ترحیم جوان کد 7"
  },
  {
    img: "/بنر/برادر-1.jpg",
    caption:"ترحیم برادر 1"
  },
  {
    img: "/بنر/برادر-2.jpg",
    caption:"ترحیم برادر 2"
  },
  {
    img: "/بنر/برادر-3.jpg",
    caption:"ترحیم برادر 3"
  },
  {
    img: "/بنر/برادر-4.jpg",
    caption:"ترحیم برادر 4"
  },
  {
    img: "/بنر/برادر-5.jpg",
    caption:"ترحیم برادر 5"
  },
  {
    img: "/بنر/برادر-6.jpg",
    caption:"ترحیم برادر 6"
  },
  {
    img: "/بنر/برادر-7.jpg",
    caption:"ترحیم برادر 7"
  },
  {
    img: "/بنر/برادر-8.jpg",
    caption:"ترحیم برادر 8"
  },
  {
    img: "/بنر/برادر-9.jpg",
    caption:"ترحیم برادر 9"
  },
  {
    img: "/بنر/برادر-10.jpg",
    caption:"ترحیم برادر 10"
  },
  {
    img: "/بنر/برادر-11.jpg",
    caption:"ترحیم برادر 11"
  },
  {
    img: "/بنر/برادر-12.png",
    caption:"ترحیم برادر 12"
  },
  {
    img: "/بنر/برادر-13.png",
    caption:"ترحیم برادر 13"
  },
  {
    img: "/بنر/خواهر-1.jpg",
    caption:"ترحیم خواهر 1"
  },
  {
    img: "/بنر/خواهر-2.jpg",
    caption:"ترحیم خواهر 2"
  },
  {
    img: "/بنر/خواهر-3.jpg",
    caption:"ترحیم خواهر 3"
  },
  {
    img: "/بنر/خواهر-4.jpg",
    caption:"ترحیم خواهر 4"
  },
  {
    img: "/بنر/خواهر-5.jpg",
    caption:"ترحیم خواهر 5"
  },
  {
    img: "/بنر/خواهر-6.jpg",
    caption:"ترحیم خواهر 6"
  },
  {
    img: "/بنر/مادر-1.jpg",
    caption:"بنر مادر 1"
  },
  {
    img: "/بنر/مادر-2.jpg",
    caption:"بنر مادر 2"
  },
  {
    img: "/بنر/مادر-3.jpg",
    caption:"بنر مادر 3"
  },
  {
    img: "/بنر/مادر-4.jpg",
    caption:"بنر مادر 4"
  },
  {
    img: "/بنر/مادر-5.jpg",
    caption:"بنر مادر 5"
  },
  {
    img: "/بنر/مادر-6.jpg",
    caption:"بنر مادر 6"
  },
  {
    img: "/بنر/مادر-7.jpg",
    caption:"بنر مادر 7"
  },
  {
    img: "/بنر/مادر-8.jpg",
    caption:"بنر مادر 8"
  },
  {
    img: "/بنر/مادر-9.jpg",
    caption:"بنر مادر 9"
  },
  {
    img: "/بنر/مادر-10.jpg",
    caption:"بنر مادر 10"
  },
  {
    img: "/بنر/مادر-11.jpg",
    caption:"بنر مادر 11"
  },
  {
    img: "/بنر/مادر-12.jpg",
    caption:"بنر مادر 12"
  },
  {
    img: "/بنر/مادر-13.jpg",
    caption:"بنر مادر 13"
  },
  {
    img: "/بنر/مادر-14.jpg",
    caption:"بنر مادر 14"
  },
  {
    img: "/بنر/مادر-15.jpg",
    caption:"بنر مادر 15"
  },
  {
    img: "/بنر/پدر-1.jpg",
    caption:"بنر پدر 1"
  },
  {
    img: "/بنر/پدر-2.jpg",
    caption:"بنر پدر 2"
  },
  {
    img: "/بنر/پدر-3.jpg",
    caption:"بنر پدر 3"
  },
  {
    img: "/بنر/پدر-4.jpg",
    caption:"بنر پدر 4"
  },
  {
    img: "/بنر/پدر-5.jpg",
    caption:"بنر پدر 5"
  },
  {
    img: "/بنر/پدر-6.jpg",
    caption:"بنر پدر 6"
  },
  {
    img: "/بنر/پدر-7.jpg",
    caption:"بنر پدر 7"
  },
  {
    img: "/بنر/پدر-8.jpg",
    caption:"بنر پدر 8"
  },
  {
    img: "/بنر/پدر-9.jpg",
    caption:"بنر پدر 9"
  },
  {
    img: "/بنر/پدر-10.jpg",
    caption:"بنر پدر 10"
  },
  {
    img: "/بنر/پدر-11.jpg",
    caption:"بنر پدر 11"
  },
  {
    img: "/بنر/پدر-12.jpg",
    caption:"بنر پدر 12"
  },
  {
    img: "/بنر/پدر-13.jpg",
    caption:"بنر پدر 13"
  },
  {
    img: "/بنر/پدر-14.jpg",
    caption:"بنر پدر 14"
  },
  {
    img: "/بنر/پدر-15.jpg",
    caption:"بنر پدر 15"
  },
  
  {
    img: "/بنر/فرزند-1.jpg",
    caption:"بنر فرزند 1"
  },
  {
    img: "/بنر/همسر-1.jpg",
    caption:"بنر همسر 1"
  },
  {
    img: "/بنر/محرم-1.jpg",
    caption:"اعلامیه محرم 1"
  },
  {
    img: "/بنر/محرم-2.jpg",
    caption:"اعلامیه محرم 2"
  },
  {
    img: "/بنر/محرمم-1.jpg",
    caption:"بنر محرم 1"
  },
  {
    img: "/بنر/محرمم-2.jpg",
    caption:"بنر محرم 2"
  },
  {
    img: "/بنر/محرمم-3.jpg",
    caption:"بنر محرم 3"
  },
  {
    img: "/بنر/محرمم-4.jpg",
    caption:"بنر محرم 4"
  },
  {
    img: "/بنر/محرمم-5.jpg",
    caption:"بنر محرم 5"
  },
  {
    img: "/بنر/محرمم-6.jpg",
    caption:"بنر محرم 6"
  },
  {
    img: "/بنر/محرمم-7.jpg",
    caption:"بنر محرم 7"
  },
  {
    img: "/بنر/محرمم-8.jpg",
    caption:"بنر محرم 8"
  },
  {
    img: "/بنر/محرمم-9.jpg",
    caption:"بنر محرم 9"
  },
  {
    img: "/بنر/محرمم-10.jpg",
    caption:"بنر محرم 10"
  },
  {
    img: "/بنر/محرمم-11.jpg",
    caption:"بنر محرم 11"
  },
  {
    img: "/بنر/تاسوعا-1.jpg",
    caption:"تاسوعا و عاشورا 1"
  },
  {
    img: "/بنر/شب قدر-1.jpg",
    caption:"شب قدر 1"
  },
  {
    img: "/بنر/جواد-1.jpg",
    caption:"شهادت امام جواد 1"
  },
  {
    img: "/بنر/موسی-1.jpg",
    caption:"شهادت امام موسی کاظم 1"
  },
  {
    img: "/بنر/مکه-1.jpg",
    caption:"بنر مکه 1"
  },
  {
    img: "/بنر/مکه-2.jpg",
    caption:"بنر مکه 2"
  },
  {
    img: "/بنر/مکه-3.jpg",
    caption:"بنر مکه 3"
  },
  {
    img: "/بنر/مکه-4.jpg",
    caption:"بنر مکه 4"
  },
  {
    img: "/بنر/مکه-5.jpg",
    caption:"بنر مکه 5"
  },
  {
    img: "/بنر/مکه-6.jpg",
    caption:"بنر مکه 6"
  },
  {
    img: "/بنر/مکه-7.jpg",
    caption:"بنر مکه 7"
  },
  {
    img: "/بنر/مکه-8.jpg",
    caption:"بنر مکه 8"
  },
  {
    img: "/بنر/مکه-9.jpg",
    caption:"بنر مکه 9"
  },
  {
    img: "/بنر/مکه-10.jpg",
    caption:"بنر مکه 10"
  },
  {
    img: "/بنر/کربلا-1.jpg",
    caption:"بنر کربلا 1"
  },
  {
    img: "/بنر/کربلا-2.jpg",
    caption:"بنر کربلا 2"
  },
  {
    img: "/بنر/کربلا-3.jpg",
    caption:"بنر کربلا 3"
  },
  {
    img: "/بنر/کربلا-4.jpg",
    caption:"بنر کربلا 4"
  },
  {
    img: "/بنر/کربلا-5.jpg",
    caption:"بنر کربلا 5"
  },
  {
    img: "/بنر/کربلا-6.jpg",
    caption:"بنر کربلا 6"
  },
  {
    img: "/بنر/کربلا-7.jpg",
    caption:"بنر کربلا 7"
  },
  {
    img: "/بنر/کربلا-8.jpg",
    caption:"بنر کربلا 8"
  },
  {
    img: "/بنر/کربلا-9.jpg",
    caption:"بنر کربلا 9"
  },
  {
    img: "/بنر/کربلا-10.jpg",
    caption:"بنر کربلا 10"
  },
  
  
  
  ]
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Title title={"خدمات فوری "}/>
            {fast.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name} desc={item.desc}/>
            ))}
            <Title title={"چاپ بنر فوری"} />
            <Slider slides={slides} />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default FastPrint