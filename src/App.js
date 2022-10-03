import styled from "styled-components";
import Cards from "./components/Cards";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import PreviousNextMethods from "./components/Corusel";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Main />
        <Cards />
        <PreviousNextMethods/>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div``;
