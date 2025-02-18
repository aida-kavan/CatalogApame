import React from "react";
import style from "../components.style/table.module.scss"

  

const PriceTable = ({data}) => {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>کد</th>
            <th>سایز</th>
            <th>قیمت</th>
            <th>توضیحات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
              <td style={{width:"40%"}}>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
