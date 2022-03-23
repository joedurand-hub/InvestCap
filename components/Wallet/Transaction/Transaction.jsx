import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import Button from "../../Button/Button";
import styles from "./transaction.module.css";


const Transfer = () => {
  const Web3 = require("web3");
  let web3;
  if (typeof window !== "undefined") {
    web3 = new Web3(window.ethereum)
  }
  const { user } = useMoralis();
  const [amount, setAmount] = useState();
  const [recipient, setRecipient] = useState("");


  let address = user && user.get("ethAddress")

  const transaction = async function () {    
    const valueInETH = amount * 1e18;
    if(window.ethereum) {
      return web3.eth.sendTransaction(
        {
        from: address,
        to: recipient,
        value: valueInETH,
      },
      function (error, transactionHash) {
        if (error) {
          alert("tx rechazada");
          console.log(error);
        } else {
          alert("la transacción fue realizada con exito");
          console.log(transactionHash);
        }
      }
      );
    }
  };

  console.log(amount)
  console.log(recipient)

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <input
          className={styles.input}
          placeholder="0"
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className={styles.span}>ETH</span>
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

      <div className={styles.container_send}>
        <div className={styles.send}>
          <Button variant="primary" name="Enviar" onClick={transaction} />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
