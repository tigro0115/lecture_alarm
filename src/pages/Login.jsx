import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false); 

  const navigate = useNavigate();

  const handleLogin = async (event) => {

    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    
    const response = await fetch(
      "로그인 서버 주소",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userID,
          password: password,
        }),
      }
    );
    const result = await response.json();

    if (response.status === 200) {
      setLoginCheck(false);
      // Store token in local storage
      sessionStorage.setItem("token", result.token);
      sessionStorage.setItem("email", result.userID); // 여기서 userid를 저장합니다.
      sessionStorage.setItem("role", result.role); // 여기서 role를 저장합니다.
      sessionStorage.setItem("storeid", result.storeId); // 여기서 role를 저장합니다.
      console.log("로그인성공, 이메일주소:" + result.userID);
      navigate("/"); // 로그인 성공시 홈으로 이동합니다.
    } else {
      setLoginCheck(true);
    }
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleLogin}>
        <label htmlFor="username">아이디</label>
        <input
          type="text"
          id="username"
          value={userID}
          onChange={(e) => setID(e.target.value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="login__check">
            <input
                type="checkbox"
                id="login__check"
                checked={loginCheck}
                onChange={(e) => setLoginCheck(e.target.checked)}
            />
            <label htmlFor="login__check">로그인 상태 유지</label>
        </div>

        {loginCheck && (
        <label  style={{color: "red"}}>이메일 혹은 비밀번호가 틀렸습니다.</label>
        )}
        <button onClick={handleLogin}>로그인</button>

        <div className="login__links">
            <Link to="/findID">아이디 찾기</Link>
            <Link to="/findPassword">비밀번호 찾기</Link>
            <Link to="/signup">회원가입</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;