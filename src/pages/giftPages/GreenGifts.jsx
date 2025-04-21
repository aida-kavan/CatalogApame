import Header from "../../components/header";
import styles from "../../components.style/page.module.scss"
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem"
import { green } from "../../datas/green";
import Footer from "../../components/Footer";
import Descreption from "../../components/Descreption";

const Flash = () => {
return (
    <>
    <Header/>
    <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
            <Descreption title={"چرا هدیه سبز را انتخاب کنید؟"} main={"بذر این محصولات به صورت رندوم از سبزیجات معطر مثل ریحان سبز، ریحان بنفش، شاهی، مرزه و جعفری است. در صورت درخواست بذر گل می‌توانید از بذرهای عسل یا مرواریدی، خردل زرد، مغربی، نیلوفر، ناز، میمون و اطلسی سفارش دهید. توجه داشته باشید که این بذرها، سفارشی و برای بالای صد عدد است و قیمت بالاتر می‌باشد."}/>
            <Title title={"شمع ها"}/>
            {green.map((item) => (
                <SquareProductItem img={item.image} code={item.Pcode} title={item.name}  desc={item.desc}/>
            ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Flash
