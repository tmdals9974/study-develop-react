> node version 12.18.2

# 3-2. 해결책 만들기
 > 해당 예제는 3-1 예제에 Redux를 추가하여 수정한 버전이다.

- `One Way Binding`을 이용한 `Flux Architecture`가 해결책으로 떠오름.
- 데이터 흐름 : Action -> Dispatcher -> Store -> View
- UI 상호작용으로 인한 데이터 업데이트 : View -> Action -> Dispatcher -> Store -> View
- 초기 Flux는 다루기 까다로웠으나 `Redux`가 사용하기 편하게 정리함.
- `Redux`가 코어 기능 제공, `Redux Toolkit`을 이용해 기타 기능 제공.
