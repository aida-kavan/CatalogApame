import React from "react";
import style from "../components.style/table.module.scss"

  

const PriceTable = ({data}) => {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>سایز</th>
            <th>نوع کاغذ</th>
            <th>تعداد</th>
            <th>قیمت تکرو</th>
            <th>قیمت دورو</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.size}</td>
              <td>{item.paperType}</td>
              <td>{item.quantity}</td>
              <td>{item.singlePrice}</td>
              <td>{item.doublePrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
