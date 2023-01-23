# 3-5. 비동기처럼 보이는 동기의 한계

3-4강 예제에서 만든 reducer에서, 만약 `fetch`를 사용하게 된다면 오류가 발생함.

return 값을 받아서 state를 update 해야하는데, return이 `비동기적으로 되다보니 동기코드인 redux에서는 처리하지 못함`.

따라서 현재 구조의 reducer에서는 비동기처리가 불가능하며, reducer가 순수 함수여야함. (같은 입력값을 넣으면 항상 같은 출력값이 나오는 함수. => 외부에 의존성이 없어야함.)

그렇다면, 비동기 작업은 어떻게 해결해야하는가 ? Redux가 제공하는 `Middleware`에서 처리해야함.