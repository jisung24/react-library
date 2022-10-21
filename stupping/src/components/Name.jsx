// 우리가 사용하다보니까 카드 안에있는 name도 컴포넌트로 재사용하고싶어!!
function Name({ name }){ // 객체로 들어감...!! props객체 안에 name속성이 들어감. 
    // name값은 이 컴포넌트를 사용하는 쪽에서 정의를 해 준다. 

    return (
        <h1 className="user__name">
            { name }
        </h1>
    )
}

export default Name;