import styled from "styled-components/macro";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <CardContainer>
      <Card />
    </CardContainer>
  );
}

export default App;

const CardContainer = styled.div`
  background-color: #131518;
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
