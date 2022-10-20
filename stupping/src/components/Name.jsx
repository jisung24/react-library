// 우리가 사용하다보니까 카드 안에있는 name도 컴포넌트로 재사용하고싶어!!
function Name({ name }){

    return (
        <h1 className="user__name">
            { name }
        </h1>
    )
}

export default Name;