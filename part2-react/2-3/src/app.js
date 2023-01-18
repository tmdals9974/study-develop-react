/* @jsx createElement */
import { createElement, render } from "./react";

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

render(vdom, document.querySelector("#root"));
