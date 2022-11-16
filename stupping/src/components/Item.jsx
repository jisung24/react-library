import Image from "./ItemTitle";

export default function Item({img, title, price}){
    return (
        <div className="item">
            <Image 
                img = { img }
                // 사용하는 곳 마다 값이 달라져! 
            /> 
            {/* 이미지 불러옴! */}
            <div className="item__contents">
                <div className="item__title">{ title }</div>
                <div className="item__title">{ price }</div>
            </div>
        </div>
    )
}