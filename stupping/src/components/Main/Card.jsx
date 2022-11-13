import Name from "./Name";

export default function Card({ img, name, age}){
    return (
        <div className="card__wrapper">
            <h2>{ img }</h2>
            <Name
                name = { name }
            />
            <h2>{ age }</h2>
        </div>
    )
}