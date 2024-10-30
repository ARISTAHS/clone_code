import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  //firebase에 유저 정보 요청 -> 만약 있다면 유저 정보 전달. 없다면 null을 리턴
  onAuthStateChanged(auth, (user) => {
    if (user === null) {
      // 비로그인 상태에서 실행할 함수
      return <Navigate to="/login" />;
    }
  });

  //const user = auth.currentUser;

  // 유저가 null 인지 여부 확인 후 페이지 이동
  // if(user === null){
  //  return <Navigate to="/login" />
  // }

  return children; // App.tsx에 있는 ProtectedRoute 태그에 감싸져있는 자식 페이지 의미함
}
