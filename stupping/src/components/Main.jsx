import Item from "./Item";

// Main 컴포넌트인만큼 이 안에서도 사용되는 또 다른 컴포넌트가 많음.
export default function Main(){
    // let serverLimit = [1,2,3,4,5,6,7,8,9,10,11,12];
    // .limit(9)를 사용하면 서버에서 데이터를 9개만 줄 수 있다. 
    // 이걸 통해 9개만 받아와서 그 변수의 길이만큼 map함수!
    // 일단 서버 data의 개수를 임의로 배열로 만들어준다!
    return (
        <main>
            {/* 여기 main에서도 item 컴포넌트를 12번 반복할거야! */}
            <Item
                img="img1"
                title="item1"
                price="3000"
            />
            <Item
                img="img2"
                title="item1"
                price="3000"
            />
            <Item
                img="img3"
                title="item1"
                price="3000"
            />
            <Item
                img="img4"
                title="item1"
                price="3000"
            />
            <Item
                img="img5"
                title="item1"
                price="3000"
            />
            <Item
                img="img6"
                title="item1"
                price="3000"
            />
            <Item
                img="img7"
                title="item1"
                price="3000"
            />
            <Item
                img="img8"
                title="item1"
                price="3000"
            />
            <Item
                img="img9"
                title="item1"
                price="3000"
            />
            <Item
                img="img10"
                title="item1"
                price="3000"
            />
            <Item
                img="img11"
                title="item1"
                price="3000"
            />
            <Item
                img="img12"
                title="item1"
                price="3000"
            />
        </main>
    )
}