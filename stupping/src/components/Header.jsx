// 컴포넌트는 HTML코드를 RETURN해주는 함수야!! 
// 구성
// 1. 파라미터 props
// 2. 변수 state

// 즉 이 Header라는 컴포넌트는 자주 사용된다 라는 의미임
export default function Header(){
    return (
        <header>
            <h2 className="title">Header Component!</h2>
        </header>
    )
}