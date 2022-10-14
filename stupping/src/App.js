/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App(){
  let firstTitle = "hello";
  // blog database => 글 제목, 작성자, 발행일, content => 이렇게 4개! 
  let [ title, titleChange ] = useState(["title1", "title2", "title3", "title4", "title5","title6","title7","title8", "title9", "title10"]); // 단일 data state에 넣기!(거의 쓸 일 없겠지..)
  // 2번째 변수는 state변경을 도와주는 함수!! => 왜냐면 값이 계속 변하니까!! 서버 data에 따라서...
  // useState("title1"); => ["title1", 함수]; ==> 이렇게 사실상 배열이다. 
  // 저 length가 2인 배열을 각 title, titleChange 라는 2개의 변수에다가 각각 담아줌. 

  // useState(["title0", "title1"]);는 [ ["title0", "title1"], 함수] => 2차원배열! 
  // state는 state안에 변수만 바꿔주면 이 state를 사용하고 있는 모든 html { state변수 }들이
  // 자동으로 재랜더링이 된다. 
  let [likeCount, likeCountFunction] = useState(0);
  // 좋아요 버튼은 state로 만들지마...!! => 자주 바뀌는 data만 state로 만드는거야~~ 
  // 그렇다고 일일이 다 state를 사용하는 건 절대 아니야!! 명심하자. 

  // 그럼 한꺼번에 여러개를 받아왔을 때 각각의 값을 변경하는 방법은 뭐야?? 
  // javascript문법이겠지 모... 

  // 2번째 강의 => onClick과 state변수 변경하는 방법 -> 함수를 이용해야만 한다. 분명히!! 
  // 3번쨰 강의 => 그럼 [], obj type의 state는 어떻게 변경해줘? 
  // 자! 만약에 [] => titleChange("title2") => 배열 전체가 title2로 바뀌게 됨. 
  // ==> 배열 전체를 다 가져와서.. => 변경을 해주고싶은 idx값만 변경을 해줘야한다. 
  // ====> 배열함수 장난아니게 많이 쓰이겠지...?? ok 

  // Ui의 상태도 계속 변하니까 state로 저장! 
  let [ui, setUi] = useState(false); // 일단 안 보이게 함.  
  return(
    <div className="container">
      <header className="header">header</header>
      <nav className="nav">nav</nav>
      <main className="main">
        {/* <div className="item item1">
          <div className="item__container">
            <div className="item__title__box">
              <h4 className="title" onClick = {
                () => {
                  // state배열을 변경하고싶어!! 
                  // 그럼 애초에 그 배열 전체를 state함수에 넣어줘야 돼! 
                  // 그럼 변수에 배열을 담아서 배열함수로 조리한다음 그 변수를 state함수안에 
                  // 넣어주면 변경이 된다. 
                  // 배열 => 얉은 복사를 해서 사용해야 해! => 원본훼손 방지! 
                  // 만약 기존 state와 변경 state가 같으면 변경해주지 않아. 
                  let newArr = [...title]; // 얉은복사. 
                  let mapArr = newArr.map((value, idx) => {
                    if(idx === 0){
                      return "0번째 제목";
                    }else{
                      return `${idx}번째 제목`; 
                    }
                  })
                  titleChange(mapArr);
                  // mapArr로 state가 바뀜!! 
                  // 이제 0번째 idx뽑아서 사용하면 돼! 

                }
                // 기존 state => title[0]번째의 값을 title10으로 change시킨다! 
                // 그럼 배열이 아주아주 많을 땐... 그냥 변수를 사용하면 돼! 
                // 기존 state 배열 전체를 저렇게 변경을 해주면, 
                // 그때의 title[0]은 title1 => title10이 된다.!! 
                // ===> 좋아좋아 아주 잘 가고있어...!! 
              }>{ title[0] }</h4>
            </div>
            <div className="item__content__box">
              <div className="blog__user">작성자</div>
              <div className="blog__date">발행일</div>
              <div className="blog__content">
                <div className="like__box">
                  <button className="like__button" onClick = {
                    () => { likeCountFunction(likeCount + 1) }
                  }>👍</button>
                  <span className="like__count">
                    { likeCount }
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div> */}
        {/* 8개의 반복문으로 한 번 해보자!!(for문을 사용할 수 없음!) */}
        {/* 실제 글 data개수대로...!! */}
        {
          title.map((value , idx)=> {
            return <div className = "item" key={ idx }>{ idx + 1 }</div>
            // <Modal></Modal>
            // 원리.. 서버 data를 state변수 안에다가 넣고,
            // 그걸 마치 ejs 빵꾸 뚫듯이 data binding해주면 돼! 
          })
        }
        {
          ui === false ? null : <Ui ittle = { title } setTitle = { titleChange }/>
        }

        

      </main>
      <footer className="footer" onClick = {
        () => setUi(!ui)
        // ui state값을 반대로 바꿔주자!! 
      }>footer</footer>
    </div>
  )
}

/* component만들기 */ 
// 중괄호 밖에다가 App함수 밖에다가 만들어줘야한다. 
// 문제점!! => App()안에 선언돼있는 state변수는 다른 함수에서 절대 못 쓰겠지?? 
// ==> 다른 함수에 있는 let a = 10을 다른 함수에서 쓸 수 없잖아!!!! 
// ====> 그럼 component가... 이런 부분에선 좋지않아! 

/* component언제써? */
// 1. 반복적으로 출현하는 html태그들 축약할때
// 2. 큰 페이지.. => 나중가면 페이지 전환하는거 배움! 
// 3. 자주 변경되는 html ui들을 component로 만들어놓고 갈아끼운다!! 
// ====> 이 세 가지가 거의 다야!! 
// ==> 그럼 전부 다 태그 하나하나 만들어놔? => 절대안돼!! 
// ====> @@@@@@ 책임이 따른다!!!! @@@@@@
// 단점 : state가져다 쓸 때 문제가 생긴다!! 
// Modal함수 안에서 다른 함수에 선언돼있는 state변수 사용 못 해!! 
// ===> 해결할 수 있어!!! 
// ===> state를 가져다가 쓸 때 살짝 불편함이 생긴다...!! 


function Modal(){
  // let numArr = ["item1","item1","item1","item1","item1","item1","item1","item1",] 

  return (
    <div className="item">item</div>
  )
  // 이런 html코드들을 만들어서 return시켜주는 함수 => component라고 해! 
  // 그럼 반복되는 html코드들은 함수이름으로 짧게 축약이가능함.ㅡ
}

// 여기다가 component를 만들어놓는다! 
function Ui(props){
  // 다른 함수안에있는 state가져오기!! 
  // App컴포넌트 안에 Ui컴포넌트 있어 (부모 자식)
  // 부모가 갖고있는 state를 자식도 사용할 수 있어 => props사용!!! 
  // 사용법 
  // 1. 자식스테이트 사용하는 곳에 가서 작명 = {state이름}

  // props전송은 부모 => 자식만 가능 
  // 형제 간 전달 x 
  // 자식에서 부모 전달 x

  // component가 많아지면 props쓰기도 귀찮아짐
  // props로 함수, state변수, 다른 숫자, 문자 등등 다 전송할 수 있어
  return (
    <div className="ui__container">
      <p className="ui__title">{props.title[2]}</p>
      <p className="ui__date">날짜</p>
      <p className="ui__detail">상세내용</p>
      <button onClick={ () => { props.setTitle(["title100", "title2", "title3", "title4", "title5","title6","title7","title8", "title9", "title10"])}}></button>
    </div>
  )
}
export default App;
