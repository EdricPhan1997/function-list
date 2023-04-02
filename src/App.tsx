import React from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import Connect from "./components/Button/ConnectWallet";

const App = () => {
  return (
    <Box bg="yellow">
      <Connect />
    </Box>
  );
};

export default App;

const Layout = styled.div`
  font-size: 16px;
  width: 100vw;
  min-height: 100svh;
  background-color: blue;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  .title {
    // ti le cua em tuong ung font-size voi the cha boc ben ngoai cua no
    font-size: 1em;
    width: 50%;
    background-color: red;
  }

  .rem {
    // mac dinh lay the the root html a ac dinhh font size === 16px
    font-size: 2rem;
  }
`;
