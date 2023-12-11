import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../components/auth-service";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // async function submit(e) {
  //   e.preventDefault();
  //   axios.post("http://localhost:5000/api/login", {username, password})
  //   .then((res) => {
  //     if (res.data.accessToken) {
  //         localStorage.setItem('jwt', JSON.stringify(res.data));
  //     }
  //     return res.data;
  // })
  //   .catch(err => console.log(err));
  // }

  const submit = async(e) => {
    e.preventDefault();
    try {
      await authService.login(username, password)
      .then(() => {
        navigate("/");
        window.location.reload();
      },
      (error) => {
        console.log(error)
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <h2>Welcome back! We're glad to see you're making good financial decisions!</h2>

      <form onSubmit={submit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
