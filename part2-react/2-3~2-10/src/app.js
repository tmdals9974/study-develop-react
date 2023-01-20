/* @jsx createElement */
import { Component, createElement, render } from "./react";

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

const App = () => (
  <p>
    <Title>React 잘 만들기</Title>
    <ul>
      <Item color="red">1st Item</Item>
      <Item color="blue">2nd Item</Item>
      <Item color="green">3rd Item</Item>
    </ul>
  </p>
);

render(<App />, document.querySelector("#root"));
