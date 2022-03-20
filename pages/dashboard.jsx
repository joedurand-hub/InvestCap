import Layout from "../components/Layout/Layout";
import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer/Footer";
import Section from "../components/Layout/Section/Section";
import Aside from "../components/Layout/Sidebar/Sidebar";
import MarketCuotes from "../components/MarketQuotes/MarketQuotes";
import SelectorModal from "../components/Modal/Selector-modal";
import Modal from "../components/Modal/Modal";
// Renderizado de Modal con Transferencia de criptos
// Renderizado de Sidebar con Cotizaciones del mercado
// Renderizado de SWAP de criptomonedas}

function Dashboard() {

  return (
    <Layout navbar={<NavBar />} footer={<Footer />}>
      <Section>
          <SelectorModal />  
      </Section>
      <Aside>
        <MarketCuotes>Market</MarketCuotes>
      </Aside>
    </Layout>
  );
}

export default Dashboard;
