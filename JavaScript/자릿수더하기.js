// 자릿수 더하기

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
// N	answer
// 123	6
// 987	24

// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n) {
  var answer = 0;
  const str = String(n).split("");

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}

// 잘된 풀이 - reduce(누적계산메소드) 사용

// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }

// (n+"").split("")              숫자를 문자로 바꾸고 split('')으로 배열로 바꾼다.
// reduce((acc, curr) => acc + parseInt(curr), 0)
// reduce는 첫번째 인자로 콜백함수를 받고, 두번째로 초기값을 받는다.

// 매개변수

// callback
// 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.

// accumulator
// 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.

// currentValue
// 처리할 현재 요소.

// currentIndex (Optional)
// 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

// array (Optional)
// reduce()를 호출한 배열.

// initialValue (Optional)
// callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.

// 반환 값
// 누적 계산의 결과 값.
