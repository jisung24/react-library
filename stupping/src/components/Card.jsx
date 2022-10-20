// 카드주인의 이름, 직업을 state로 변하게 만들어놓고 사용하면
// 컴포넌트의 재사용성이 훨씬 더 높아지겠지????  

import Name from './Name';

function UserCard({ news, name, age }){
    // let { name , age } = props객체...!! 
    // props는 객체 형태로 전달이 되며, 그 속성에 접근하고 싶으면
    // js destructure문법으로 접근하면 된다.!! 

    // props전달하기!! 
    // 이 컴포넌트를 사용하는 곳에서 정의해줘야 한다. 
    // 와 이거 진짜 이해 잘 된다.... props를 이용하자!! 

    // 차별되는 data => props로 변경해주면 돼! 

    // 새로 들어온 사람들한테 new라는 span을 주기...!! ( 컴포넌트 차별성! )
    return (
        <div className="user__card">
            <div className="user__image">
                { news === true ? <span>news</span> : null }
                {/* 그 이 컴포넌트의 값은 사용하는 곳에서 넣으니까
                조건은 여기서 달아줘야돼! 그래야 값을 사용하는 곳에서
                조건에 맞는 값이면 나타남. 
                */}
            </div>
            <div className="user__profile">
               <Name name="지성"/>
                <p className="user__age">
                    { age }
                </p>
            </div>
        </div>
    )
}

export default UserCard;