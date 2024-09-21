import { createGlobalStyle } from "styled-components";

// 전역 스타일 설정 (#root, 애니메이션, 스크롤바)

const GlobalStyle = createGlobalStyle`

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #root {
    background-color: #0a0a0a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard';
    color: white;
    height: 100vh;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 100%, 0.158);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #e640916b;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
