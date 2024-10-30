import { useState } from "react";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Error,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-components";

export default function CreateAccount(){

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {target : {name, value}} = e;
    if(name === "email"){
      setEmail(value);
    } else if(name === "password"){
      setPassword(value);
    }
  };

  const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); //에러 메시지가 있는 상황에서 버튼 누를시 에러메시지 사라짐

    if( isLoading || email === "" || password === "") return;
    try{
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); //로그인 이후 자동 홈화면으로 이동 -> useNavigate Hooks 사용
    } catch(e){
      //setError
      console.log(e);
      if(e instanceof FirebaseError){
        console.log(e.code, e.message);
        setError(e.message);
      }
    } finally{
      setLoading(false);
    }
   
    console.log(name,email,password);
  };

  return(
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>
        
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required></Input>
        <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required></Input>
        <Input type="submit" value={isLoading ? "Loading..." : "Log in"}></Input>
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?{" "} <Link to="/create-account">Create one &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}