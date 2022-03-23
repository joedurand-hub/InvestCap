import React from "react";
import styles from "./market.module.css";

const rowCoins = ({ coin, index }) => {
  return (
      <tr className={styles.tr}>
        <td className={styles.td}>{index}</td>


        <td className={styles.td}>
          <img
            src={coin.image}
            alt={coin.name}
            className={styles.coin_image}
            style={{ width: "5%" }}
          />
          <span className={styles.coin_name}>{coin.name}</span>
        </td>
        <td className={styles.td}> ${coin.current_price}</td>
        <td className={coin.price_change_percentage_24h > 0 ? styles.positive : styles.negative}>{coin.price_change_percentage_24h}</td>
        <td className={styles.td}>{coin.high_24h}</td>
        <td className={styles.td}>{coin.low_24h}</td>
        <td className={styles.td}>{coin.total_volume}</td>
      </tr>

  );
};

export default rowCoins;
