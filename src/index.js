import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeStoreProvider } from './Content/ThemeContext';
// import {BrowserGlobalStyles as Router} from 'react-router-dom'

import GlobalStyles from './Component/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
// function emitCommit(id){
//   setInterval(()=>{
//     window.dispatchEvent(
//       new CustomEvent(`lession-${id}`,{
//         detail : `Noi dung comment của lession ${id}`
//       })
//     )
//   },2000)
// }
// emitCommit(1)
// emitCommit(2)
// emitCommit(3)
root.render(
  <React.StrictMode>
   <GlobalStyles>
     <App />
   </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
