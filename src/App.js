import { OuterLayout } from "./styles/Layouts";
import styled from "styled-components";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";
import MessaginSection from "./components/MessaginSection";
import PaymentSection from "./components/PaymentSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { Fade } from 'react-reveal'

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
        <Fade left>
          <CardSection />
        </Fade>
        <Fade right>
          <ChartSection />
        </Fade>
        <Fade left>
          <MessaginSection />
        </Fade>
        <Fade right>
          <PaymentSection />
        </Fade>
        <Fade left>
          <FAQSection />
        </Fade>
        </MainStyled>
      </OuterLayout>
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
}

export default App;


const MainStyled = styled.main``;