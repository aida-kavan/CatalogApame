import Header from "../../components/header";
import Footer from "../../components/Footer";
import Title from "../../components/title";
import styles from "../../components.style/home.module.scss";
import DigitalPriceTable from "../../components/DigitalPriceTable";
import EcoPriceTable from "../../components/EcoPriceTable"
import { Link } from "react-router-dom";

const Digital = () => {
  const blackA4 =
  [
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۳۴۰۰", "doublePrice": "۴۴۰۰" },
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۲۸۰۰", "doublePrice": "۳۸۰۰" },
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۲۱۰۰", "doublePrice": "۲۸۰۰" },

    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۰۰۰۰", "doublePrice": "۱۲۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۹۰۰۰", "doublePrice": "۱۰۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۷۸۰۰", "doublePrice": "۸۸۰۰" },

    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۲۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۰۰۰۰", "doublePrice": "۱۱۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۹۰۰۰", "doublePrice": "۸۰۰۰" },

    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۳۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۲۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۰۰۰۰", "doublePrice": "۱۱۰۰۰" },

    { "size": "A4", "paperType": "کتان ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۵۰۰۰" },
    { "size": "A4", "paperType": "کتان ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۲۰۰۰" },
  ];

  const colorA4 =
  [
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۷۰۰۰", "doublePrice": "۱۰۰۰۰" },
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۶۰۰۰", "doublePrice": "۸۰۰۰" },
    { "size": "A4", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۵۰۰۰", "doublePrice": "۶۵۰۰" },

    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۶۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۳۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۹۸۰۰", "doublePrice": "۱۰۸۰۰" },

    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۷۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۴۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۲۰۰۰" },

    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۴۰۰۰", "doublePrice": "۱۶۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۵۰۰۰" },
    { "size": "A4", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۴۰۰۰" },

    { "size": "A4", "paperType": "کتان ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۵۰۰۰", "doublePrice": "۱۷۰۰۰" },
    { "size": "A4", "paperType": "کتان ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۴۰۰۰" },

    { "size": "A4", "paperType": "پشت چسبدار", "quantity": "زیر ده تا", "singlePrice": "۳۵۰۰۰", "doublePrice": "-" },
    { "size": "A4", "paperType": "پشت چسبدار", "quantity": "بالای ده تا", "singlePrice": "۲۸۰۰۰", "doublePrice": "-" },

    { "size": "A4", "paperType": "لیبل شیشه‌ای", "quantity": "زیر ده تا", "singlePrice": "۳۵۰۰۰", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل شیشه‌ای", "quantity": "بالای ده تا", "singlePrice": "۲۸۰۰۰", "doublePrice": "-" },

    { "size": "A4", "paperType": "لیبل سلفون براق", "quantity": "زیر ده تا", "singlePrice": "55000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون براق", "quantity": "زیر صدتا تا", "singlePrice": "50000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون براق", "quantity": "بالای صدتا تا", "singlePrice": "40000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل شیشه‌ای", "quantity": "بالای ده تا", "singlePrice": "۲۸۰۰۰", "doublePrice": "-" },

    { "size": "A4", "paperType": "لیبل گلاسه براق", "quantity": "زیر ده تا", "singlePrice": "55000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل گلاسه براق", "quantity": "زیر صدتا تا", "singlePrice": "50000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل گلاسه براق", "quantity": "بالای صدتا تا", "singlePrice": "40000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": "لیبل سلفون مات", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون مات", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون مات", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": "لیبل سلفون شنی", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون شنی", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون شنی", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": "لیبل سلفون مخملی", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون مخملی", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون مخملی", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    { "size": "A4", "paperType": "لیبل سلفون مخملی", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل سلفون طرح دار ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل بدون روکش ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل کرافت ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل کرافت ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل کرافت ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل متالایز نقره ای مات ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل متالایز نقره ای مات ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل متالایز نقره ای مات ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل متالایز طلایی ای مات ", "quantity": "زیر ده تا", "singlePrice": "60000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل متالایز طلایی ای مات ", "quantity": "زیر صدتا تا", "singlePrice": "54000", "doublePrice": "-" },
    { "size": "A4", "paperType": " لیبل متالایز طلایی ای مات ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
    
    { "size": "A4", "paperType": " لیبل کرافت ", "quantity": "بالای صدتا تا", "singlePrice": "48000", "doublePrice": "-" },
  ];


  const colorA3 =[
    { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۵۰۰۰" },
    { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۳۰۰۰" },
    { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۱۰۰۰" },

    { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۵۰۰۰", "doublePrice": "۱۸۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۳۵۰۰", "doublePrice": "۱۶۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۳۰۰۰" },

    { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۶۰۰۰", "doublePrice": "۱۸۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۵۰۰۰", "doublePrice": "۱۶۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۴۰۰۰", "doublePrice": "۱۵۰۰۰" },

    { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۷۰۰۰", "doublePrice": "۱۹۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۶۰۰۰", "doublePrice": "۱۸۰۰۰" },
    { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۵۰۰۰", "doublePrice": "۱۷۰۰۰" }
];
const blackA3 =[
  { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۰۰۰۰", "doublePrice": "۱۳۰۰۰" },
  { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۹۰۰۰", "doublePrice": "۱۱۰۰۰" },
  { "size": "A3", "paperType": "تحریر ۸۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۷۰۰۰", "doublePrice": "۸۰۰۰" },

  { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۴۰۰۰" },
  { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۳۰۰۰" },
  { "size": "A3", "paperType": "گلاسه ۱۳۵ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۰۰۰۰", "doublePrice": "۱۱۰۰۰" },

  { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۵۰۰۰" },
  { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۳۰۰۰" },
  { "size": "A3", "paperType": "گلاسه ۲۰۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۱۰۰۰", "doublePrice": "۱۲۰۰۰" },

  { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱-۱۰۰", "singlePrice": "۱۴۰۰۰", "doublePrice": "۱۶۰۰۰" },
  { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۱-۱۰۰۰", "singlePrice": "۱۳۰۰۰", "doublePrice": "۱۴۵۰۰" },
  { "size": "A3", "paperType": "گلاسه ۲۵۰ گرم", "quantity": "۱۰۰۰ به بالا", "singlePrice": "۱۲۰۰۰", "doublePrice": "۱۳۵۰۰" }
];



const eco =[
  
    {
      "materialType": "چاپ بنر (۴ پاس) ۱۵ انس *خارجی*",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ بنر (۴ پاس) ۱۵ انس *ایرانی*",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ فلکسی ۱۸ انس (خارجی)",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ وینیل (استیکر) براق",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ وینیل (استیکر) مات",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ وینیل (استیکر) شیشه‌ای",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ وینیل (استیکر) مات ابریشمی",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ مش",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ بک لایت",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ سولیت",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ کنواس (خام)",
      "above10m": "",
      "above50m": "",
      "above100m": ""
    },
    {
      "materialType": "چاپ روی چرم",
      "above10m": "--",
      "above50m": "--",
      "above100m": "--"
    }
  ]
  







  return (
    <>
      <Header />
      <div className={styles.mainDiv}>
        <Title title={"پرینت سیاه سفید"} />
        <DigitalPriceTable data={blackA4} />
        <DigitalPriceTable data={blackA3} />

        <Title title={"پرینت رنگی"} />
        <DigitalPriceTable data={colorA4} />
        <DigitalPriceTable data={colorA3} />

        <Title title={"اکوسالونت"} />
        <EcoPriceTable data={eco} />
        {/* <Title title={"گلاسه ۱۳۵ گرم"} /> */}
        {/* <DigitalPriceTable data={glassColorData} /> */}
        {/* <Title title={"گلاسه ۲۰۰ گرم"} /> */}
        {/* <DigitalPriceTable data={glass3} />
        <Title title={"گلاسه ۲۵۰  گرم"} />
        <DigitalPriceTable data={glass4} />
        <Title title={"گلاسه ۳۰۰   گرم"} />
        <DigitalPriceTable data={glass5} /> */}
      </div>
      <Footer />
    </>
  );
};

export default Digital;
