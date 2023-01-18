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