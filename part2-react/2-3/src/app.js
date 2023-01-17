import { createElement, render } from "./react";

const vdom = createElement("p", {},
  createElement("h1", {}, "React 만들기"),
  createElement("ul", {},
    createElement("li", { style: "color: red" }, "1st Item"),
    createElement("li", { style: "color: blue" }, "2nd Item"),
    createElement("li", { style: "color: green" }, "3rd Item")
  )
);

render(vdom, document.querySelector("#root"));
