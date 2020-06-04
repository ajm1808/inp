import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Trumpyes from '../img/trumpyes.jpg';
import Trumpno from '../img/trumpno.PNG';
import styled from 'styled-components';



// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};




const steps = [
  {
    id: '1',
    message: 'Who said this?',
    trigger: 2,
  },
  {
    id:'2',
    message:'“Beauty and elegance, whether in a woman, a building, or a work of art, is not just superficial or something pretty to see.”',
    trigger:3,
  },
  {
    id:'3',
    options:[
      {value:1,label:'Trump',trigger:'4'},
      {value:2,label:'Stalin',trigger:'6'},
      {value:3,label:'Mussolini',trigger:'6'},
      {value:4,label:'Hitler',trigger:'6'},
    ]
  },
  {
    id:'4',
    component:(
      <div className="trumpPic">
        <p>Correct, it was</p>
        <img id="trumpImg" src={Trumpyes}/>
      </div>
    ),
    trigger:7,
  },
  {
    id:'5',
    component:(
      <div className="trumpPic">
        <p>Not this guy!</p>
        <img id="trumpImg" src={Trumpno}/>
      </div>
    ),
  },
  {
    id:'6',
    message: "Nope, try again!",
    trigger:2,
  },
  {
    id:'7',
    message:"I'll turn my life into a masterpiece",
    trigger:8,
  },
  {
    id:'8',
    options:[
      {value:1,label:'Trump',trigger:'10'},
      {value:2,label:'Stalin',trigger:'9'},
      {value:3,label:'Mussolini',trigger:'11'},
      {value:4,label:'Hitler',trigger:'9'},
    ]
  },
  {
    id:'9',
    message: "Nope, try again!",
    trigger:8,
  },
  {
    id:'10',
    component:(
      <div className="trumpPic">
        <p>Not this guy!</p>
        <img id="trumpImg" src={Trumpno}/>
      </div>
    ),
    trigger:8,
  },
  {
    id:'11',
    message: "Correct!",
    trigger:12,
  },
  {
    id:'12',
    message:"The world belongs to the man with guts!",
    trigger:13,
  },
  {
    id:'13',
    options:[
      {value:1,label:'Trump',trigger:'15'},
      {value:2,label:'Stalin',trigger:'14'},
      {value:3,label:'Mussolini',trigger:'14'},
      {value:4,label:'Hitler',trigger:'16'},
    ]
  },
  {
    id:'14',
    message: "Nope, try again!",
    trigger:13,
  },
  {
    id:'15',
    component:(
      <div className="trumpPic">
        <p>Not this guy!</p>
        <img id="trumpImg" src={Trumpno}/>
      </div>
    ),
    trigger:13,
  },
  {
    id:'16',
    message: "Correct!",
    trigger:17,
  },
  {
    id:'17',
    message:"Success is the sole earthly judge of right and wrong",
    trigger:18,
  },
  {
    id:'18',
    options:[
      {value:1,label:'Trump',trigger:'20'},
      {value:2,label:'Stalin',trigger:'19'},
      {value:3,label:'Mussolini',trigger:'19'},
      {value:4,label:'Hitler',trigger:'21'},
    ]
  },
  {
    id:'19',
    message:"Nope, try again",
    trigger:18,
  },
  {
    id:'20',
    component:(
      <div className="trumpPic">
        // <p>Not this guy!</p>
        <img id="trumpImg" src={Trumpno}/>
      </div>
    ),
    trigger:18,
  },
  {
    id:'21',
    message:"Correct",
    trigger:22,
  },
  {
    id:'22',
    message:"Good people don't go into government",
    trigger:23,
  },
  {
    id:'23',
    options:[
      {value:1,label:'Trump',trigger:'25'},
      {value:2,label:'Stalin',trigger:'24'},
      {value:3,label:'Mussolini',trigger:'24'},
      {value:4,label:'Hitler',trigger:'24'},
    ]
  },
  {
    id:'24',
    message:"Nope, try again",
    trigger:23
  },
  {
    id:'25',
    component:(
      <div className="trumpPic">
        <p>Correct, it was</p>
        <img id="trumpImg" src={Trumpyes}/>
      </div>
    ),
    trigger:26,
  },
  {
    id:'26',
    message:"Thanks for playing - remember, democracy dies in darkness",
    end:true,
  }


];

const TrumpBot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
);

export default TrumpBot;