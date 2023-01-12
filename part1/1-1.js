/****************************************************************
 * * 1단계: 함수작성
 * - 변경에 용이하지 않은 로직임. case문 내 로직 변경 시, createElement 전체를 테스트해야함.
 ****************************************************************/

function step1() {
  function createElement(type, props) {
    switch (type) {
      case "h1":
        return [document.createElement("h1")].map((element) => {
          Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) =>
            element.setAttribute(name, value)
          );
          return element;
        })[0];
      case "div":
        return [document.createElement("div")].map((element) => {
          Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) =>
            element.setAttribute(name, value)
          );
          return element;
        })[0];
    }
  }
}

/****************************************************************
 * * 2단계: 수정이 용이하도록 리팩토링
 * - 1단계에 비해 수정 및 테스트가 용이해짐.
 * - 추가에 취약한 로직임. case문을 하나 추가하고나면, createElement 전체를 테스트해봐야 하는 문제가 있음.
 ****************************************************************/

function step2() {
  function createH1(props) {
    return [document.createElement("h1")].map((element) => {
      Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  function createDiv(props) {
    return [document.createElement("div")].map((element) => {
      Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  function createElement(type, props) {
    switch (type) {
      case "h1":
        return createH1(props);
      case "div":
        return createDiv(props);
    }
  }
}

/****************************************************************
 * * 3단계: 추가가 용이하도록 리팩토링
 * - 2단계에 비해 추가가 용이해짐.
 * - 수정영역과 테스트영역이 모두 일치함. 견고하고 단단한 프로그래밍.
 * - 그러나, createElement 함수가 creatorMap 변수에 의존하고 있는 문제가 있음.
 ****************************************************************/

function step3() {
  function createH1(props) {
    return [document.createElement("h1")].map((element) => {
      Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  function createDiv(props) {
    return [document.createElement("div")].map((element) => {
      Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  const creatorMap = {
    h1: createH1,
    div: createDiv,
  };

  function createElement(type, props) {
    return creatorMap[type](props);
  }
}

/****************************************************************
 * * 4단계: 의존성 제거
 * - createElement가 가지고 있던 의존성을 제거하였음 (외부에서 주입받도록)
 * - 1단계의 인터페이스는 그대로 유지되고, 내부코드만 안전하게 변경되었음
 ****************************************************************/

function step3() {
  function createH1(props) {
    return [document.createElement("h1")].map((element) => {
      Object.entries({ ...props, "data-id": "title" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  function createDiv(props) {
    return [document.createElement("div")].map((element) => {
      Object.entries({ ...props, "data-id": "layout" }).forEach(([name, value]) => element.setAttribute(name, value));
      return element;
    })[0];
  }

  const creatorMap = {
    h1: createH1,
    div: createDiv,
  };

  const coupler = (map) => (type, props) => map[type](props);
  const createElement = coupler(createMap);
}
