import React from "react";
import style from "../components.style/table.module.scss"

  

const EcoPriceTable = ({data}) => {
  return (
    <div className={style.  tableContainer}>
          <table>
            <thead>
              <tr>
                <th>نوع متریال</th>
                <th>بالای ده متر</th>
                <th>بالای پنجاه متر</th>
                <th>بالای صد متر</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.materialType}</td>
                  <td>{item.above10m}</td>
                  <td>{item.above50m}</td>
                  <td>{item.above100m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
};

export default EcoPriceTable;
