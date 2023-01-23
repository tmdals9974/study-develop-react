function createStore(worker) {
  let state; //1. state를 반환해주면 안된다. 직접 반환해줄 경우, 외부에서 수정이 가능해짐 (Flux 아키텍처는 데이터가 한방향으로 흐름)
  let handlers = [];

  function send(action) {
    state = worker(state, action); //3. state를 변경할 수 있는 기능을 제공해주어야 한다. 개발자가 모든 데이터를 변경할 수 있도록 매개변수를 함수로 받는다.
    handlers.forEach((handler) => handler()); //5. state가 변경되었을 때, 등록한 함수를 실행해 줌.
  }

  function getState() {
    //2. state를 읽을 수 있도록 해준다. (임시 코드임. 해당 코드는 외부에서 수정이 가능한 상태이기에 오류.)
    return state;
  }

  function subscribe(handler) {
    //4. 해당 Store를 사용중인 Components에서는, state가 변경되었을 때 다시 getState를 호출해야함. 언제 호출되는지 알려 줄 수 있는 `구독 발행 모델` 구현.
    handlers.push(handler);
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  // 전달 받은 상태의 값을 update하는 로직 작성.
  // 반드시 새로운 객체로 생성하여 반환 필요.
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);

store.subscribe(function () {
  console.log(store.getState());
});

store.send({ type: "increase" }); //type은 redux의 컨벤션임. 객체를 전달하지 않고 숫자를 넘겨도 되고, type을 사용하지 않아도 되나 redux에서 권장하는 컨벤션.
store.send({ type: "increase" });
