import { render } from "./react";

const vdom = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {
            style: "color: red",
          },
          children: ["1st Item"],
        },
        {
          tag: "li",
          props: {
            style: "color: blue",
          },
          children: ["2st Item"],
        },
        {
          tag: "li",
          props: {
            style: "color: green",
          },
          children: ["3st Item"],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
