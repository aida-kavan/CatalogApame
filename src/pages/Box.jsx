import Header from "../components/header";
import Footer from "../components/Footer";
import styles from "../components.style/page.module.scss";
import Title from "../components/title";
import NewCardDesign from "../components/plans/NewCardDesign";
import Descreption from "../components/Descreption";
import style from "../components.style/card.module.scss";

const Billboard = () => {
  const box = [
    {
      productName: "جعبه کیبوردی",
      productDesc: "این کارتن های مقوایی پستی از مقوای 3 لایه فشرده ( ایفلوت ) ساخته می شود. بسیار با استحکام است و از محصول در برابر ضربه های بیرونی محافظت می کند. لایه رویی جنس کرافت و لایه وسط فلوت E و لایه داخل ورق تست می باشد. این جعبه ها آماده ارسال هستند و شما می توانید به راحتی با ثبت سفارش و خرید از سایت آنها را در محل خود تحویل بگیرید.",
      productVariants: [
        {
          size: "3.5*10*13",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 8100,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 7800,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 7300,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 6700,
            },
            {
              minQty: 1000,
              price: 5900,
            },
          ],
        },
        {
          size: "4*10*20",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 11700,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 11100,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 10400,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 9700,
            },
            {
              minQty: 1000,
              price: 8700,
            },
          ],
        },
        {
          size: "4*23*23",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 24500,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 23400,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 21970,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 20200,
            },
            {
              minQty: 1000,
              price: 18200,
            },
          ],
        },
        {
          size: "4.5*10*12",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 9500,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 9100,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 8500,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 7800,
            },
            {
              minQty: 1000,
              price: 7200,
            },
          ],
        },
        {
          size: "4.5*13*13",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 10700,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 10200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 9500,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 8900,
            },
            {
              minQty: 1000,
              price: 8100,
            },
          ],
        },
        {
          size: "4.5*16*16",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 14900,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 14300,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 13260,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 12400,
            },
            {
              minQty: 1000,
              price: 11200,
            },
          ],
        },
        {
          size: "5*10*10",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 10700,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 10200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 9500,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 8900,
            },
            {
              minQty: 1000,
              price: 8100,
            },
          ],
        },
        {
          size: "5*17*26",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 19150,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 18350,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 17200,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 15900,
            },
            {
              minQty: 1000,
              price: 14300,
            },
          ],
        },
        {
          size: "5*31*31",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 36200,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 34700,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 32770,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 30100,
            },
            {
              minQty: 1000,
              price: 27170,
            },
          ],
        },
        {
          size: "5.5*14*20",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 10700,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 10200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 9500,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 8900,
            },
            {
              minQty: 1000,
              price: 8100,
            },
          ],
        },
        {
          size: "6*11*28",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 20250,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 19500,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 18200,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 16900,
            },
            {
              minQty: 1000,
              price: 15200,
            },
          ],
        },
        {
          size: "6*15*60",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 31330,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 30100,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 28250,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 26000,
            },
            {
              minQty: 1000,
              price: 23560,
            },
          ],
        },
        {
          size: "6*26*26",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 30800,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 29600,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 27800,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 25480,
            },
            {
              minQty: 1000,
              price: 23200,
            },
          ],
        },
        {
          size: "7*15*37",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 28600,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 27500,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 25800,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 23800,
            },
            {
              minQty: 1000,
              price: 21600,
            },
          ],
        },
        {
          size: "7*22*27",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 34400,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 33200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 31100,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 28700,
            },
            {
              minQty: 1000,
              price: 26500,
            },
          ],
        },
        {
          size: "8*18*42",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 37700,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 36270,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 34100,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 31400,
            },
            {
              minQty: 1000,
              price: 28400,
            },
          ],
        },
        {
          size: "8*23*45",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 47600,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 39300,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 42900,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 39600,
            },
            {
              minQty: 1000,
              price: 35800,
            },
          ],
        },
        {
          size: "9*22*22",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 31900,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 34400,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 32300,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 29780,
            },
            {
              minQty: 1000,
              price: 26900,
            },
          ],
        },
        {
          size: "9.5*9*24",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 16800,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 16200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 15080,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 13900,
            },
            {
              minQty: 1000,
              price: 12700,
            },
          ],
        },
        {
          size: "10.5*33*40",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 70350,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 67500,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 63400,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 58400,
            },
            {
              minQty: 1000,
              price: 52790,
            },
          ],
        },
        {
          size: "11*27*27",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 52000,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 50100,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 46900,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 43200,
            },
            {
              minQty: 1000,
              price: 39000,
            },
          ],
        },
        {
          size: "12.5*19*25",
          prices: [
            {
              minQty: 1,
              maxQty: 49,
              price: 25100,
            },
            {
              minQty: 50,
              maxQty: 199,
              price: 24200,
            },
            {
              minQty: 200,
              maxQty: 499,
              price: 22700,
            },
            {
              minQty: 500,
              maxQty: 999,
              price: 20900,
            },
            {
              minQty: 1000,
              price: 18900,
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <Title title={"ساخت جعبه"} />
        <Descreption
          main={
            "چاپ جعبه یا بسته بندی مناسب یکی از مهم ترین نیازهای صنایع غذایی به خصوص فست فود ها می باشد. خود بسته بندی همچنین می تواند به عنوان یک بازاریاب عمل نماید و در فروش محصول و جذب مصرف کننده کمک شایانی نمایید در چاپ جعبه میتوانیم از کاغذ و مقواهای متنوع مثل پشت طوسی، پشت سفید، ایندلبرد و حتی گلاسه استفاده نمود. برای سفارش جعبه با ابعاد و متریال دلخواه از طریق راه های ارتباطی پایین صفحه با ما در ارتباط باشید! "
          }
        />
        <div className={styles.productCont}>
          <div
            style={{
              width: "350px",
             
            }}
          >
            {box.map((item) => (
              <div className={style.card}>
                <div className={style.imageContainer}>
                  <img src="/تصاویر/jabe.png" alt="product" />
                  <div className={style.fadeBottom}></div>
                </div>
                <div className={style.content}>
                  <h3>{item.productName}</h3>
                  <p style={{fontSize: "11px"}}>{item.productDesc}</p>
                </div>
                <div className={style.table}>
                  <tr
                    className={style.tableRow}
                    style={{
                      width: "30%",
                      backgroundColor: "#3d67a1",
                      color: "WHITE",
                    }}
                  >
                    <td style={{fontSize: "9px"}}>(عرض * ) سایز</td>
                    <td style={{fontSize: "9px"}}>1-49</td>
                    <td style={{fontSize: "9px"}}>50-199</td>
                    <td style={{fontSize: "9px"}}>200-499</td>
                    <td style={{fontSize: "9px"}}>500-999</td>
                    <td style={{fontSize: "9px"}}>+1000</td>
                  </tr>
                  {item.productVariants.map((item) => (
                    <tr className={style.tableRow}>
                      <td>{item.size.toLocaleString("fa-IR")}</td>
                      {item.prices.map((price) => (
                       
                          <td style={{fontSize: "10px"}}>{price.price.toLocaleString("fa-IR")}</td>
                        
                      ))}
                    </tr>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billboard;
