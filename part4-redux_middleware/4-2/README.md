# 4-2. 미들웨어 파이프라인 구현
 - 기존 컨셉을 해치지 않는 선에서 비동기 처리를 해주기 위해, 외부에서 코드를 주입받는 middleware architecture 구현
 - `Monkey patching` : 기존 dispatch 함수를 다른 걸로 교체하고 중간에 끼워넣는 코드 테크닉 