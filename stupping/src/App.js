/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {

  const content = "blog content";
  let [title, titleChange] = useState(["title1", "title2"]); // 서버에서 값 2개 받아옴. 
  // state : 변경될 수 있는 중요한 값들은 변수가 아니라 state에 저장한다. => 변경할 수 있는 함수와 함께...! 
  // useState()함수 파라미터에다가 저장할 값을 직접 넣어주면 돼!! [array] {obj} "string"
  let [like, likeInc] = useState(0);
  // likeInc(state값 + 1) => state값에서 +1해주고싶어! 
  // 10으로 바꾸고 싶으면 (10)써주면 돼! 변경 될 값...! state값 + 1로 바꾸고싶다!! 이런식으로 해석하면 돼! 
  // 꼭 OnClick으로 바꿔야 해...? 
  return (
    <div className="container">
      <header className="header">blog</header>
      <nav className="side__nav">sideNav</nav>
      <main className="main">
        <div className="list">
          <h4 onClick={
            () => {
              // 여기가 이제 함수내용! 
              let copy = [...title];
              copy[0] = "gogo~~";
              titleChange(copy);
            }
           }>{ title[0] }</h4>
          <p>{ content }</p>
          <button className="likebtn" onClick={ () => { likeInc(like + 1) }}>👍</button>
          
          <span>{ like }</span>
        </div>
        <div className="list">
          <h4>{ title[1] }</h4>
          <p>{ content }</p>
        </div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
