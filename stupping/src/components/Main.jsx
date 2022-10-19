// 여기서는 컴포넌트를 가장 작은 단위로 하나하나 만드는 역할! 

// 이제 각각 만든 컴포넌트를 export시켜서 App.js에 보내는 형태야! 

import UserCard from "./Card";

function Main(){

    return (
        <main className="main">
            <UserCard 
                name="김지성" 
                age="20" 
                news={ true }
            />
            <UserCard 
                name="장종운" 
                age="21" 
                news={ false }
            />
            <UserCard 
                name="김지성" 
                age="20" 
                news={ true }
            />
            <UserCard 
                name="김지성" 
                age="20" 
                news={ true }
            />
            <UserCard 
                name="김지성" 
                age="20" 
                news={ true }
            />
        </main>
    )
}

export default Main;