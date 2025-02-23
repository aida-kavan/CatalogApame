import style from "../components.style/page.module.scss";
import { CheckCheck } from "lucide-react";
const Descreption = ({ items, main, title }) => {
  return (
    <div className={style.matnCont}>
      {title && <h1>{title}</h1>}
      {main && <p className={style.para}>{main}</p>}
      {items &&
        items.map((item) => (
          <div className={style.item}>
            <CheckCheck color="#0d6813" size={"18px"} />
            <p>{item}</p>
          </div>
        ))}
    </div>
  );
};

export default Descreption;
