import React from "react";
import styles from "./nav.module.css";
import Button from "../../Button/Button";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const { logout, user } = useMoralis();
  const walletAddress = user && user.get("ethAddress");
  
  const logOut = async () => {
    router.push('/')
      await logout();
   
    }

  return (
    <nav className={styles.navbar_layout}>
      <h1 className={styles.navbar_title}>Investcap</h1>
      <div className={styles.buttonsContainer}>
        <div className={styles.nav_wallet_address}>
          <p className={styles.nav_wallet_title}>Billetera conectada</p>
          <p className={styles.wallet_address}>{walletAddress && walletAddress.slice(0, 7)}...{walletAddress && walletAddress.slice(35)}</p>
        </div>
        <Button
          name={"Desconectar"}
          onClick={() => {
            logOut()
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
