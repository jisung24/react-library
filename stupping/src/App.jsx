/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';


/* import 컴포넌트이름 from '파일경로' */

function App(){
    // App component인데 결국 여기다가 내가 만든 웹 사이트 전체가 다 들어간다.
    // 여기에다가 이제 Component들을 전부 import해와야해!! 
    return (
        <div className="container">
            <Header/>
            <nav>Nav</nav>
            <Main/>
            {/* Main안에 Item Component는 이미 정의 돼서 안 해줘도 돼!  */}
            <footer>Footer</footer>
        </div>
    )
}


export default App;
