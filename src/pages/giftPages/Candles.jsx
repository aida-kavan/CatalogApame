import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem"
import { candles } from "../../datas/candles";
import Footer from "../../components/Footer";
import Descreption from "../../components/Descreption";

const Flash = () => {

    const items = [" ماندگار، شیک و قابل استفاده در هر فضا", "قابلیت سفارشی‌سازی با لوگو، رنگ، رایحه و بسته‌بندی", "مناسب برای هر مناسبت: از رویدادهای شرکتی گرفته تا بسته‌های هدیه مشتریان"]
  return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Descreption items={items} title={"شمع، هدیه‌ای کوچک با اثری بزرگ!"} main={"در دنیایی پر از گزینه‌های تبلیغاتی، شمع‌ها با رایحه‌های دل‌انگیز و طراحی‌های چشم‌نواز، یه انتخاب خاص و متفاوتن. هدیه‌ای که نه فقط لوگوی برندتون رو توی ذهن‌ها حک می‌کنه، بلکه حس خوب آرامش و انرژی مثبت رو به مخاطبتون هدیه میده.\t لطفا توجه داشته باشید قیمت های ذکر شده برای یک عدد شمع محاسبه شده اند و در صورت درخواست سفارش عمده قیمت هارا میبایست استعلام بگیرید."}/>
            <Title title={"شمع ها"}/>
            {candles.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name} type={item.type} price={item.price}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Flash
