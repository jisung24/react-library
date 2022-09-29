/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {

  let [title, titleChange] = useState(["제목1", "제목2", "제목3"]);
  // title은 배열이니까... 이 title배열을 map함수 안에 갖다 써주면 돼!
  // 그럼 map은 모든 배열에서 발동 가능하니까 써줄 수 있음. 

  let [like, likeChange] = useState(["👍", "👍", "👍"]);
  // 글의 수 만큼 state를 담아준다... => 하나로 만들면 하나 누르면 다른거까지 좋아요 click됨.
  let [likeCount, likeCountChange] = useState([0,0,0]);

  // 동적인 UI현재상태 저장! 
  let [posts, setPosts] = useState(false); //ui현재상태 저장 => 닫힘 or 열림..등등
  // 숫자로 0 1로 표현해도 문제없음 => 굳이 문자가 아니어도 돼!! 
  // 쉽게 말해서 ui도 state변수에 넣어서 변수처럼 다뤄보자!!! 
  return (
    <div className="container">
      <header className="header">blog</header>
      <nav className="side__nav">sideNav</nav>
      <main className="main">
        <p onClick={() => { setPosts(!posts)}}>click해봐</p>
        {
          // if문 사용못함.
          posts === false ? <Posts/> : null
          // posts state가 닫힘이면 posts출력! 아니면 아무것도 출력하지마.... null
        } 
        {/** component!! => 코드 간략화 가능, 여러 div간략화.. 이름덕분에 한 눈에 뭔지 알아볼 수 있음.  */}
        {/* map함수를 사용해서 반복문 쓰기 
        자! 그럼 서버에서 받아온 data의 개수만큼 반복해주고 싶을 때는... ?

        그럼 저 배열대신 state를 사용하면 돼!!!
        */}
        {
          
          title.map((value, index) => {
            return (
              <div className="list">
                <h4>{ value }</h4>
                <p>2월 17일 발행</p>
                <p>{index + 1}번째 글</p>
                <span onClick={() => { likeCountChange(likeCount[index] + 1)}}>{like[index] }</span>
                <span className="likeCnt">{ likeCount[index] }</span>
                {/** 어차피 좋아요 수나 title수나 같아서 같은 index활용가능. */}
              </div>
            )
          })
        }
      </main>
      <footer className="footer">footer</footer>
    </div>

    
  );
}

// react component만들기! 
// html모델화 시켜서 코드 간략화 가능. 
// 나중에 코드가 너무 길어지면 어떤 div인지 알 수가 없음.... 
// - 그러니까 class처럼 그냥 가져다가 쓰자! 

// 1. component함수 만들기. 
// 2. return 안에 내가 원하는 반복되는 html담기! 
// 3. jsx문법에다가 <컴포넌트함수명></컴포넌트함수명>

// 컴포넌트 언제써????? 
// - 1. 반복되는 html div코드들... => list들!! => component로 만들기
      // - 예를들어.. 내 노트북 상품 보여주기 박스들!!!!!!!!!  
// - 2. 큰 페이지들!! 
// -3. 자주 변경되는 html UI들! => 항상 사용은 아닌데.. 그래도 성능상 좋을 수 있음.

// 컴포넌트 문제점!!! 
// - state가져다가 쓸 때 문제생겨!!
//    - state는 app함수안에 있는데 component는 새로운 함수야! => 다른함수의 변수를 가져다가 써야 함. 
//    - 

function Posts(){
  // 이름은 class처럼 맨 앞 대문자 국룰. 
  return (
    <div className="posts">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

  // 동적인 ui만들기
  // 1. html,css로 미리 그 디자인을 완성을 시켜놓자!! 일단 보이게...
  // 2. ui의 현재 상태를 state로 저장
  // 3. state에 따라 UI가 어떻게 보일지 미리 작성한다. 
}
export default App;
