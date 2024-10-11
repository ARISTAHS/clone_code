import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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


function App() {
  

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
