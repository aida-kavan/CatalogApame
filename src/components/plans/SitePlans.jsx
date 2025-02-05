import styles from "../../components.style/card.module.scss";
import { BadgeCheck } from "lucide-react";

const Plans = () => {
  let items1 = [
    { name: "طراحی ui & ux حرفه ای" },
    { name: "طراحی ریسپانسیو" },
    { name: "پشتیبانی رایگان تا شش ماه" },
    { name: "درج فرم های اختصاصی" },
    { name: "ساخت بخش های اختصاصی" },
    { name: "مشاوره طراحی سایت" },
    { name: "مشاوره بازاریابی اینترنتی" },
    { name: "تامین امنیت سایت" },
  ];
  let items2 = [
    { name: "طراحی ui & ux حرفه ای" },
    { name: "طراحی ریسپانسیو" },
    { name: "پشتیبانی رایگان تا شش ماه" },
    { name: "طراحی صفحات فروشگاه و محصولات" },
    { name: "سبد خرید پیشرفته" },
    { name: "اتصال به درگاه بانکی" },
    { name: "طراحی صفحات وبلاگ و مقالات" },
    { name: "پنل مدیریت محصولات" },
  ];
  let items3 = [
    { name: "طراحی ui & ux اختصاصی" },
    { name: "طراحی ریسپانسیو" },
    { name: "پشتیبانی رایگان تا دوازده ماه" },
    { name: "برنامه نویسی کلی صفحات وب" },
    { name: "کدنویسی داشبورد" },
    { name: "امکان پیاده سازی امکانات دلخواه" },
    { name: "عملکرد قوی و امنیت بالا" },
    { name: "بهینه سازی محتوا" },
    { name: "اتصال به درگاه های بانکی" },
  ];
  let items4 = [
    { name: "تحقیق کلمات کلیدی" },
    { name: "کیبورد تارگتینگ" },
    { name: "تدوین استراتژی سایت" },
    { name: "بک لینک و رپورتاژ آگهی" },
    { name: "بهینه سازی سرعت سایت" },
    { name: "خدمات سئو خارجی (OFF PAGE)" },
    { name: "خدمات سئو داخلی (ON PAGE)" },
    { name: "بهینه سازی مداوم" },
    { name: "گزارش های ماهانه" },
    { name: "ردیابی ROI" },
  ];

  return (
    <>
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن استارتاپ</h1>
        </div>

        <div>
          {items1.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="rgb(10, 27, 82)" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 10 میلیون</h3>
          </div>
        </div>
      </div>

      {/* پلن دوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن فروشگاهی</h1>
        </div>

        <div>
          {items2.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="rgb(10, 27, 82)" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 20 میلیون</h3>
          </div>
        </div>
      </div>


      {/* پلن سوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن اختصاصی</h1>
        </div>

        <div>
          {items3.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="rgb(10, 27, 82)" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 50 میلیون</h3>
          </div>
        </div>
      </div>

      {/* پلن سئو */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>خدمات سئو</h1>
        </div>

        <div>
          {items4.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="rgb(10, 27, 82)" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>تماس بگیرید...</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
