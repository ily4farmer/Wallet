import React, { useState } from 'react';
import styled from 'styled-components';
import { metamask, wc } from './Api/Connect';
import './App.css';

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  padding: 5px 10px;
  background-color: gray;
  color: red;
`

const Address = styled.div`
  height: 40px;
`

function App() {

  const [metamaskAdd, setMetamaskAdd] = useState<string>("")
  const [wcAdd, setWcAdd] = useState<string>("")

  const getAddress = async():Promise<void> => {
    console.log("connect");
    const {wallet} = await metamask()
    setMetamaskAdd(wallet)
  }

  const connectWC = async() => {
    const {wallet} = await wc()
    setWcAdd(wallet)
  }

  return (
    <Wrapper>
     <Button onClick={getAddress}>
       Connect Metamask
     </Button>
     <Address>{metamaskAdd}</Address>
     <Button onClick={connectWC}>
       Connect WC
     </Button>
     <Address>{wcAdd}</Address>
    </Wrapper>
  );
}

export default App;
