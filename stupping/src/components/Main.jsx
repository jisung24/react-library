// 여기서는 컴포넌트를 가장 작은 단위로 하나하나 만드는 역할! 

// 이제 각각 만든 컴포넌트를 export시켜서 App.js에 보내는 형태야! 

import UserCard from "./Card";

function Main(){

    return (
        <main className="main">
            <UserCard name="김지성" age="20"/>
            <UserCard name="장종운" age="21" />
            <UserCard name="이재혁" age="22" />
            <UserCard name="조홍래" age="23" />
            <UserCard name="박현태" age="24" />
        </main>
    )
}

export default Main;