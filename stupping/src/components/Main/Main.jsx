// 여기서는 컴포넌트를 가장 작은 단위로 하나하나 만드는 역할! 

import Card from "./Card";

// 이제 각각 만든 컴포넌트를 export시켜서 App.js에 보내는 형태야! 



export default function Main(){

    return (
        <main className="main">
            {/* 즉 반복되는 카드에 props라는 구멍을 뚫어서 원하는 값을 우리가 여기서 넣어주면 돼! */}
           <Card
            img = "img1"
            name = "안녕"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
           <Card
            img = "img1"
            name = "김지성"
            age = "25"
           />
        </main>
    )
}

//  Main;