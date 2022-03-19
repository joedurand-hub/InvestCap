import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import Button from "../../Button/Button";
import styles from "./transaction.module.css";

const Transfer = () => {
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <span>ETH</span>
        <input
          className={styles.input}
          placeholder="0"
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <i className={styles.icon}>{<FaWallet />}</i>
        <input
          className={styles.input}
          placeholder="Address"
          type="text"
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.send}>
        <Button variant="primary" name="Enviar" />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
