import { OuterLayout } from "./styles/Layouts";
import Header from "./components/Header";
import CardSection from "./components/CardSection";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection />
        </MainStyled>
      </OuterLayout>
    </div>
  );
}

export default App;


const MainStyled = styled.main``;