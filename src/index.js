import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// html 문서에서 id가 root인 DOM 요소를 가져와서 React의 루트 컨테이너로 설정. 이 컨테이너 안에 React 컴포넌트들이 렌더링 됨.
// 즉, html의 id가 root인 DOM 요소가 React의 가장 큰 바깥 컨테이너가 되고, 그 컨테이너에 App 컴포넌트가 전달 되어 렌더링 된다. 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode>:
// React 컴포넌트가 더 안전하고 일관성 있게 동작하도록 돕는 래퍼 컴포넌트. 개발 모드에서만 활성화되며, 배포 시에는 제거 됨.