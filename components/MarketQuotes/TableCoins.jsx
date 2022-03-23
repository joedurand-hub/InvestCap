import React from "react";
import RowCoins from "./RowCoins";
import styles from "./market.module.css";

const titles = ["#", "Activos", "Precio", "%", "Max", "Min", "Volumen"];

const tableCoins = ({ coins, search }) => {
  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.container_titles}>
          {titles.map((title) => (
            <td className={styles.title}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterCoins.slice(0, 10).map((coin, index) => (
          <RowCoins coin={coin} key={index} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default tableCoins;
