/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function AppJSX(){
    // jsx문법 기본정리! 
    // 1. 컴포넌트 render부분은 꼭 하나의 태그만 반환해야 한다. 부모 둘x
    // 2. 데이터 바인딩 => 중괄호로 해준다. 
    const myName = "jisung"; // 함수스코프 변수! 
    // style = { 여기안에 객체로 styling을 해준다.! }
    // 리엑트 원리는 component들...!! 
    // 자바스크립트가 엄청 잘 돼 있어야돼!! 
    // jsx : js안에서 html을 사용할 수 있다!!!!!!!

    // 쉽게 얘기해서 js이용해서 html쉽게 짜는거야.....!!! 
    const list = ['우유', '딸기', '바나나'];
  return (
    <div className="container" style = { { width : '200px', height : '300px '}}>
        <p>{`hello ${myName}`}</p>
        {
          list.map((value) => {
            return <li>{ value }</li>
            // js변수는 반드시 {}안에...!! 그냥 value하면 문자열 value표시됨. 
            // jsx에서 {}안에 for, if문 사용 못 함.
          })
        }
        
    </div>
  )
}


export default AppJSX;
