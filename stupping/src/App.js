/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App(){
  let firstTitle = "hello";
  // blog database => 글 제목, 작성자, 발행일, content => 이렇게 4개! 
  let [ title, titleChange ] = useState(["title4", "title1"]); // 단일 data state에 넣기!(거의 쓸 일 없겠지..)
  // 2번째 변수는 state변경을 도와주는 함수!! => 왜냐면 값이 계속 변하니까!! 서버 data에 따라서...
  // useState("title1"); => ["title1", 함수]; ==> 이렇게 사실상 배열이다. 
  // 저 length가 2인 배열을 각 title, titleChange 라는 2개의 변수에다가 각각 담아줌. 

  // useState(["title0", "title1"]);는 [ ["title0", "title1"], 함수] => 2차원배열! 
  // state는 state안에 변수만 바꿔주면 이 state를 사용하고 있는 모든 html { state변수 }들이
  // 자동으로 재랜더링이 된다. 
  let [likeNumber, likeFunction ] = useState([0]); 
  let [likeButton, likeButtonFunction ] = useState(['👍','👍','👍','👍']);
  return(
    <div className="container">
      <header className="header">header</header>
      <nav className="nav">nav</nav>
      <main className="main">
        <div className="item item1">
          <div className="item__container">
            <div className="item__title__box">
              <h4 className="title">{ title[0] }</h4>
            </div>
            <div className="item__content__box">
              <div className="blog__user">작성자</div>
              <div className="blog__date">발행일</div>
              <div className="blog__content">
                <div className="like__button">
                  <button className="like" onClick={() => {
                    likeFunction(likeNumber + 1);
                  }}>{ likeButton[0] }</button>
                  <span className="like__count">
                    {likeNumber[0]}
                    {/* 상자의 개수만큼 이것도 변수를 가져와야함! 서버에서! */}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="item item2">item2</div>
        <div className="item item3">item3</div>
        <div className="item item4">item4</div>
        <div className="item item5">item5</div>
        <div className="item item6">item6</div>
        <div className="item item7">item7</div>
        <div className="item item8">item8</div>
        <div className="item item9">item9</div>
      </main>
      <footer className="footer">footer</footer>
    </div>
  )
}

export default App;
