import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render에다가 우리가 root(index.html)에 넣어주고 싶은 컴포넌트를 적어준다! 
// App이란 컴포넌트를 우리는 index.html div란 요소에다가 넣어주는 것. 
// => root.render (이 안에 내가 띄울 컴포넌트를 넣어줘~ 라는 뜻. )

// 최종적으로 띄워줄 컴포넌트를 연결시켜주면 돼!! 
// 작은 컴포넌트 + 작은 + ... + = App컴포넌트 
// App컴포넌트를 div.root안에 꽂아주면 돼! 
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
