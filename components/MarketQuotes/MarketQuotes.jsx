import axios from "axios";
import React, {useState, useReducer, useEffect} from 'react'
import TableCoins from './TableCoins'
import RowCoins from './RowCoins'
import { quotesReducer, quotesInitialState } from '../../reducers/marketQuotesReducer'
import styles from './market.module.css'


const MarketQuotes = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1')
    setCoins(res.data)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getData()
    }, 9000);
    return () => clearInterval(interval);
  }, [])

  const [state, dispatch] = useReducer(quotesReducer, quotesInitialState)
  return (
    <>
    <div className={styles.market}>
      <input className={styles.search} type="text" placeholder="Buscá una criptomoneda" onChange={(e) => setSearch(e.target.value)}/>
    <TableCoins coins={coins} search={search}/>
    </div>
    </>
  )
}

export default MarketQuotes