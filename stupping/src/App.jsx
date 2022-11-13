/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main/Main';
import Navigation from './components/Nav';
import Footer from './components/Footer';

/* import 컴포넌트이름 from '파일경로' */

function App(){
    // 봐봐 그냥 함수야.. js함수 안에 return ()에다가 html코드 적는거야! 
    // JSX : 이 처럼, javascript안에 html을 적는 문법을 jsx라고 해! 
    // 순수 자바스크립트 파일이 아니라 , react component file이라면 
    // 확장자를 jsx라고 적어준다! 
    return (
        <div className="container">
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </div>
    )
}


export default App;
