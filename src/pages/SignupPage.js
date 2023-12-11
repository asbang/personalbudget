import React, { useState } from "react";
import axios from "axios";
import authService from "../components/auth-service";
import { useNavigate } from "react-router-dom";


function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // async function submit(e) {
  //   e.preventDefault();
  //   axios.post("http://localhost:5000/api/signup", {username, password})
  //   .then((res) => {
  //       if (res.data.accessToken) {
  //           localStorage.setItem('jwt', JSON.stringify(res.data));
  //       }
  //       return res.data;
  //   })
  //   .catch(err => console.log(err));
  // }

  const navigate = useNavigate();
    
  async function submit(e) {
    e.preventDefault();
    try {
      await authService.signup(username, password)
      .then((res) => {
        navigate("/");
        window.location.reload();
      },
      (error) => {
        console.log(error)
      })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1>Sign Up!</h1>
      <h2>Make budget planning easier</h2>

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

export default SignupPage;
