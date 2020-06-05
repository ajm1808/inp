import React, {Component} from 'react';
import './App.css';
import TrumpBot from './components/Chat';
import styled,{keyframes} from 'styled-components';
import Trumpyes from './img/trumpyes.png';
import Trumpno from './img/trumpno.PNG';



// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  padding: 2rem 1rem;
  font-size: 5rem;
  float: left;
  
`;


const Title=styled.h1`
    font-size:1.5em;
    text-align:center;
    color:white;
`;

const SubTitle=styled.h2`
    font-size:1.25em;
    text-align:center;
    color:white;
`;

const Wrapper=styled.section`
    padding:4em;
    background:purple;
    border-radius:25px;
    width:20vw;
    margin-bottom:5px;
    font-family: monospace;
`;



function App (){
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Trump or Not?
        </Title>
        <SubTitle>
          Can you guess which dictator said the following...
        </SubTitle>
      </Wrapper>
      <div className="chatwrap">
        {/* <Rotate><img src={Trumpno}></img></Rotate> */}
        <TrumpBot/>
        {/* <Rotate><img src={Trumpyes}></img></Rotate> */}
      </div>
    </div>
  );
}

export default App;
