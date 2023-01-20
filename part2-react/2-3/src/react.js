const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
}

export function createDOM(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) => element.setAttribute(name, value));

  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

function makeProps(props, children) {
  return {
    ...props,
    children: children.length === 1 ? children[0] : children,
  };
}

/**
 * ? 예시용 미사용 함수. 
 * * Hook의 구현 방식을 설명. 자세한 내용은 README를 참조. 
 */
function useState(initValue) {
  let position = currentComponent - 1;
  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (nextValue) => {
    hooks[position] = nextValue;
  };

  return [hooks[position], modifier];
}

export function createElement(tag, props, ...children) {
  props = props || {};

  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      /* 
        실제로 리액트 코드에서는 class Component 일 경우에는, 
          1. 최초 생성되는 경우에만 instance를 생성
          2. 이미 생성된 instance의 경우에는 context를 유지하며 render만 재호출
        과 같은 형식으로 rerender 하는 로직이 포함되어 있을 것임.
      */
      const instance = new tag(makeProps(props, children));
      return instance.render();
    }

    hooks[currentComponent] = null;
    currentComponent++;

    if (children.length > 0) {
      return tag(makeProps(props, children));
    } else {
      return tag(props);
    }
  }

  return { tag, props, children };
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}

/**
 * ? 예시용 미사용 함수. 
 * * Hook의 구현 방식을 설명. 자세한 내용은 README를 참조. 
 */
export const render2 = (function () {
  let prevDom = null;

  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    // prevDom과 vdom을 비교하여 변경된 부분만 DOM Update 수행 로직 작성 부분

    container.appendChild(updateDOM(vdom));
  };
})();
