import styles from "../../components.style/card.module.scss";
import { BadgeCheck } from "lucide-react";

const Plans = () => {
  let items1 = [
    { name: "طراحی لوگو با سه اتود " },
    { name: "سلیقه یابی و آنالیز برند شما" },
    { name: "مشاوره و تعیین رنگ سازمانی" },
    { name: "ارائه تصویر اجرای لوگو در محیط واقعی" },
    { name: "طراحی کارت ویزیت" },
    { name: "یک طراح" },
    { name: "در هفت روز کاری" }
  ];
  let items2 = [
    { name: "اتود نامحدود" },
    { name: "سلیقه یابی و آنالیز برند شما" },
    { name: "مشاورزه و تعیین رنگ سازمانی" },
    { name: "ارائه تصویر اجرای لوگو در محیط واقعی" },
    { name: "ارائه خروجی با تمام فرمت" },
    { name: "ارائه شناسنامه لوگو" },
    { name: "ارائه فونت پیشنهادی" },
    { name: "طراحی پترن اختصاصی" },
    { name: "ارائه برند بوک" },
    { name: "طراحی کامل ست اداری (کارت ویزیت، سربرگ، پاکت نامه، برگه یاددداشت، فاکتور و مهر)" },
    { name: "دو طراح" },
    { name: "در ده روز کاری" },
  ];
  let items3 = [
    { name: "اتود نامحدود" },
    { name: "سلیقه یابی و آنالیز برند شما" },
    { name: "مشاورزه و تعیین رنگ سازمانی" },
    { name: "ارائه تصویر اجرای لوگو در محیط واقعی" },
    { name: "ارائه خروجی با تمام فرمت" },
    { name: "ارائه شناسنامه لوگو" },
    { name: "ارائه فونت پیشنهادی" },
    { name: "طراحی پترن اختصاصی" },
    { name: "ارائه برند بوک" },
    { name: "طراحی لوگوموشن" },
    { name: "طراحی کامل ست اداری (کارت ویزیت، سربرگ، پاکت نامه، برگه یاددداشت، فاکتور، بروشور، کاتالوگ و مهر)" },
    { name: "طراحی پرچم (رومیزی، اهتزاری، ساحلی)" },
    { name: "ده شات عکاسی حرفه ای" },
    { name: "طراحی پیکسل" },
    { name: "طراحی قالب پست در سه ابعاد" },
    { name: "طراحی قالب استوری" },
    { name: "طراحی قالب ریلز" },
    { name: "طراحی توسط تمام تیم" },
    { name: "در بیست روز کاری" },
  ];

  let item4 =[
    {name: "طراحی کارت ویزیت"},
    {name: "طراحی سربرگ"},
    {name: "طراحی پاکت نامه"},
    {name: "طراحی برگه یادداشت"},
    {name: "طراحی فاکتور"},
    {name: "طراحی مهر"},
  ]
 

  return (
    <>
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پکیج حرفه ای</h1>
        </div>

        <div>
          {items1.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 5 میلیون</h3>
          </div>
        </div>
      </div>

      {/* پلن دوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1> پکیج فوق حرفه ای</h1>
        </div>

        <div>
          {items2.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 9 میلیون</h3>
          </div>
        </div>
      </div>


      {/* پلن سوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پکیج نامحدود</h1>
        </div>

        <div>
          {items3.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>شروع قیمت از 25 میلیون</h3>
          </div>
        </div>
      </div>


      {/* پلن سوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پکیج ست اداری</h1>
        </div>

        <div>
          {item4.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3> قیمت از 2 میلیون</h3>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Plans;
