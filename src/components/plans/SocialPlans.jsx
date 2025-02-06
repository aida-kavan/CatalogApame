import styles from "../../components.style/card.module.scss";
import { BadgeCheck } from "lucide-react";
import Title from "../title";

const Plans = () => {
  let items3 = [
    { name: "طراحی پست اسلایدی" },
    { name: "طراحی کاور ریلز" },
    { name: "طراحی کاور استوری" },
    { name: "مدیریت کپشن_ هشتگ گذاری_ پاسخگویی به کامنت ها" },
    { name: "۷۰ رشته استوری[۳۰ رشته معرفی محصول_۱۵ رشته استوری تعاملی_۲۵ رشته هویت برندسازی]" },
    { name: "تولید محتوا سایت" },
    { name: "تولید محتوا متن" },
    { name: "تولید محتوا اینستاگرام" },
    { name: "ادمینستور" },
    { name: "هویت بصری_ هایلایت_کاور_قالب" },
  ];
  let items2 = [
    { name: "ادمینستور" },
    { name: "طراحی کاور ریلز" },
    { name: "تولید محتوا اینستاگرام" },
    { name: "۵۰ رشته استوری[ ۲۰ رشته معرفی محصول_۱۵ رشته استوری تعاملی_۱۵ رشته هویت برندسازی]" },
    { name: "هویت بصری_هایلایت_کاور_قالب" },
    { name: "مدیریت کپشن_هایلایت" },
  ];
  let items1 = [
    { name: "ادمینستور" },
    { name: "طراحی کاور ریلز" },
    { name: "تولید محتوا اینستاگرام" },
    { name: "۲۰رشته استوری[۱۰ رشته معرفی محصول_۵ رشته استوری تعاملی_۵ رشته استوری هویت برند سازی ]" },
    { name: "مدیریت کپشن_پاسخگویی به کامنت ها" },
  ];
 

  return (
    <>
    <Title title={"پلن های اینستاگرام"}/>
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن طلایی</h1>
        </div>

        <div>
          {items1.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>اشتراک ماهیانه 5 میلیون</h3>
          </div>
        </div>
      </div>

      {/* پلن دوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن برلیانس</h1>
        </div>

        <div>
          {items2.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>اشتراک ماهیانه 10 میلیون</h3>
          </div>
        </div>
      </div>


      {/* پلن سوم */}
      <div className={styles.mainPlanCont}>
        <div className={styles.header}>
          <h1>پلن الماس</h1>
        </div>

        <div>
          {items3.map((item) => (
            <div className={styles.item}>
              <BadgeCheck color="#bd8223" />
              <p>{item.name}</p>
            </div>
          ))}

          <div className={styles.footer}>
            <h3>اشتراک ماهیانه 15 میلیون</h3>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Plans;
