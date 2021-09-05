import { OuterLayout } from "./styles/Layouts";
import styled from "styled-components";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import ChartSection from "./components/ChartSection";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
          <ChartSection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

export default App;


const MainStyled = styled.main``;