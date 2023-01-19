# 2.3 setup webpack & babel

- babel과 webpack을 설치하여 번들링/트랜스파일러 기능 지원.
- 외부에서 짭리액트 내부 소스를 알지 않아도 되게끔 render 함수 지원.

# 2.4 createElement

- 개발자가 직접 vdom 객체를 만드는 것은 번거롭고 코드가 길어짐. 따라서 객체 생성함수 지원.

# 2.5 jsx

- 객체생성함수를 지원하더라도 가독성이나 사용성에서 떨어지는 측면이 있음.
- 리액트팀은 위 문제를 해결하기 위해 모든 개발자가 아는 `html tagging` 형식 지원.
- jsx 문법을 사용하면 `babel-loader > @babel/preset-react` 를 통해서 `React.createElement` 함수로 변환. (babel - try it out에서 테스트 가능)
- 해당 강의에서는 React 객체가 없기 때문에, `@jsx` 옵션을 통해 직접 만든 `createElement` 함수와 연결.

# 2.6 함수 컴포넌트

- 함수컴포넌트의 작동방식 : jsx내에 `대문자로 시작하는 태그`가 들어오면 createElement 내 매개변수로 넘길 때 문자열이 아닌 `객체`로 넘김 -> createElement 함수 내에서 객체를 처리하여 컴포넌트를 처리.
- 해당 강의에서는 `@babel/preset-react`에서 객체로 넘겨주고 있기에, createElement 함수를 수정하여 처리.
- 소스 원본

```javascript
/* @jsx createElement */
function Title(props) {
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const vdom = (
  <p>
    <Title>React 잘 만들기</Title>
    <ul>
      <Item color="red">1st Item</Item>
      <Item color="blue">2nd Item</Item>
      <Item color="green">3rd Item</Item>
    </ul>
  </p>
);
```

- 트랜스파일링 된 소스

```javascript
/* @jsx createElement */
function Title(props) {
  return createElement("h1", null, props.children);
}

function Item(props) {
  return createElement(
    "li",
    {
      style: `color:${props.color}`,
    },
    props.children
  );
}

const vdom = createElement(
  "p",
  null,
  createElement(Title, null, "React 잘 만들기"),
  createElement(
    "ul",
    null,
    createElement(Item, { color: "red" }, "1st Item"),
    createElement(Item, { color: "blue" }, "2nd Item"),
    createElement(Item, { color: "green" }, "3rd Item")
  )
);
```

# 2.7 클래스 컴포넌트

- 함수컴포넌트와 마찬가지로 `jsx`에서 `createElement에 객체로` 넘겨주기 때문에, createElement 내에서 `클래스로 넘어온 객체를 구분`해서 처리.
- 클래스 내에서는 전달받은 `props를 context에 담아주기`만 하면 별도 처리할 내용이 없음.
- `rerender` 될 경우에는 instance를 새로 생성하는 것이 아닌, `context를 유지하며 render 함수를 재호출`하는 로직이 포함되어야함. 복잡하기에 해당 강의에서는 패스.
- 현재 구조에서는, `react가 control 할 수 있는 영역`이 함수 컴포넌트보다 `클래스 컴포넌트가 훨씬 넓어서` 더 많은 기능과 이득을 제공해 줄 수 있음.
  실제로도 초기 react에선 클래스 컴포넌트를 더 많이 사용하였으나, react에서 `Hook` 기능을 제공함으로서 함수 컴포넌트를 더 많이 사용하게 됨.

# 2.8 Virtual DOM

- rerender 할 경우, 이전 DOM과 새로운 DOM을 비교하여 바뀐 부분만 업데이트 하는 것 보다 render 메소드에서 이전 객체와 새로운 객체를 비교하는 것이 훨씬 효율적임.
- 가상 DOM을 만들고, Real DOM과 비교하여 변경된 부분만 업데이트하는 개념이 Virtual DOM임.
