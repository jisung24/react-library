export default function Name({ img, name, age}){
    return (
        <div className="card__wrapper">
            <h2>{ img }</h2>
            <h2>{ name }</h2>
            <h2>{ age }</h2>
        </div>
    )
}