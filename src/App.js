import React, {Component} from 'react';
import './App.css';
import TrumpBot from './components/Chat';
import styled,{keyframes} from 'styled-components';
import Trumpyes from './img/trumpyes.jpg';

// // Create the keyframes
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;
// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 5rem;
// `;


const Title=styled.h1`
    font-size:1.5em;
    text-align:center;
    color:white;
`;

const Wrapper=styled.section`
    padding:4em;
    background:grey;
    border-radius:15px;
    width:50vw;
`;



function App (){
  return (
    <div className="App">
      <Wrapper>
        <Title>
          Which dictator said this...
        </Title>
      </Wrapper>
      <TrumpBot/>
      {/* <Rotate><img src={Trumpyes}></img></Rotate> */}
    </div>
  );
}

export default App;
