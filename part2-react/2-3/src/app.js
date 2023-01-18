/* @jsx createElement */
import { createElement, render } from "./react";

const vdom = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color: red">1st Item</li>
    <li style="color: blue">2nd Item</li>
    <li style="color: green">3rd Item</li>
  </ul>
</p>

render(vdom, document.querySelector("#root"));
