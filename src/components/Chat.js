import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Trump from '../img/Trump.jpg';

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
    message: 'Who said these quotes?',
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
      {value:1,label:'Trump',trigger:'5'},
      {value:2,label:'Stalin',trigger:'4'},
      {value:3,label:'Mussolini',trigger:'4'},
      {value:4,label:'Hitler',trigger:'4'},
    ]
  },
  {
    id:'4',
    message:'Wrong answer fool!',
    trigger:'2',
  },
  {
    id:'5',
    component:(
      <div>
        <p>Correct, it was</p>
        <img src={Trump}/>
      </div>
    )
  }

];

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />;
  </ThemeProvider>
);

export default Chat;