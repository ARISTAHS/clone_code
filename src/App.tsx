import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout';
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout></Layout>,
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

])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
