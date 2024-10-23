import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout></Layout>,
    //layout 상위 컴포넌트 아래에 하위 컴포넌트 설정 -> children 사용
    children:[
      {
        path:"",
        element:<Home/>,       
      },
      {
        path: "profile",
        element:<Profile/>
      }
    ]
  },
  //Layout 하위요소에 두지않고 로그인은 별도 라우팅 분리
  {
    path: "/login",
    element:<Login/>
  },
  {
    path:"/create-account",
    element:<CreateAccount/>
  }

]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
  box-sizing: border-box;
  }
  body{
    background-color:black;
    color:white;
    font-family: 'system-ui', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading , setLoading] = useState(true);
  const init = async() => {
    //firebase 응답 기다림
    await auth.authStateReady();
    setLoading(false);
    
    //로딩 화면 setTimeout 함수로 테스트 확인.
    //setTimeout(()=> setLoading(false),2000);
  }

  useEffect(()=>{
    init();
  },
  []);

  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/> }
    </Wrapper>
  )
}

export default App
