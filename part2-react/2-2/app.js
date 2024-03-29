function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  node.children.map(createDOM).forEach(element.appendChild.bind(element));
  //1. node.children.map(createDOM).forEach(i => element.appendChild(i)); 
  //2. node.children.map(createDOM).forEach(element.appendChild); //element의 context를 갖고있지 못함.

  return element;
}

//DOM의 구성요소 : 태그, 속성, 자식
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
          props: {},
          children: ["1st Item"],
        },
        {
          tag: "li",
          props: {},
          children: ["2st Item"],
        },
        {
          tag: "li",
          props: {},
          children: ["3st Item"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));
