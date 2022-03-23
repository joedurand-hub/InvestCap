import Head from "next/head";
import React from "react";
import styles from './layout.module.css'

function Layout({ title, description, keywords, children, navbar, footer }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="content-language" content="es-es" />
        <meta name="description" content={description} />
        <meta name="author" content="Investcap" />
        <meta name="copyright" content="&copy; 2022 Investcap." />
        <meta name="keywords" content={keywords} />
      </Head>
      {navbar}
      <main className={styles.layout_content}>{children}</main>
      {footer}
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "Invescap",
  description:
    "Birthday App is an application for you to store, manage and consult all the birthdays that you will have soon, in an orderly manner and even send your greetings.",
  keywords:
    "Exchange, criptomonedas, peer, to, peer, peer to peer, P2P, p2p, BitCoin, Bitcoin, bitcoin, Ethereum, ethereum, Ether, USDT, DAI, USDC, UST, USD, usdt, dai, usdc, ust, usd, swap, cripto, crypto, Cripto, Crypto, Blockchain",
};
