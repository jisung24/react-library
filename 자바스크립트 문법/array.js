'use strict';
// 2022-09-30 map

// 1. map
// - arr의 개수만큼 callback함수를 실행시켜줌. 
// - 첫 번째 파라미터 => 배열의 각각의 원소
// - 두 번째 파라미터 => index
// - 세 번째 파라미터 => 그 배열..
// - return값에 뭘 넣으면 그 값을 배열에 담아줌. 
let cpuName = ["cpu1","cpu2","cpu3"];
let newCpuName = cpuName.map((value) => {
    return "cpu4"
    // return 값은 기존의 값을 모두 지우고 이걸 cpuName의 length만큼 넣어준다. 
})
console.log(newCpuName);

let numArr = [1, 2, 3, 4, 5];
let newArr = numArr.map(value => value * 2);
console.log(newArr);