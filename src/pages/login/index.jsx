import "./style.css";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://localhost:5000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("successfully logged in");
    } catch (err) {
      alert("Error: ", err.response.data.error);
    }
  };

  return (
    <div className="container">
      <h1>Preparação para decolar</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Me manter na nave
          </label>
          <a href="#">Esqueci a senha</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          Primeira vez na nave? <a href="#">Junte-se a tripulação</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
