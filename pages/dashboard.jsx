import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer/Footer";
import Section from "../components/Layout/Section/Section";
import Aside from "../components/Layout/Sidebar/Sidebar";
import MarketCuotes from "../components/MarketQuotes/MarketQuotes";
import SelectorModal from "../components/Modal/Selector-modal";
import { useMoralis } from "react-moralis";

// Renderizado de Modal con Transferencia de criptos
// Renderizado de Sidebar con Cotizaciones del mercado
// Renderizado de SWAP de criptomonedas

function Dashboard() {
  const { authenticate, isAuthenticated, authError, account, user } = useMoralis();

  return (
    <Layout navbar={<NavBar />} footer={<Footer />}>
      <Section>
      {/* <h1>Welcome {user ? user.get("username") : null}</h1> */}
      <Aside>
        <MarketCuotes/>
      </Aside>
          <SelectorModal />  
      </Section> 
    </Layout>
  );
}

export default Dashboard;
