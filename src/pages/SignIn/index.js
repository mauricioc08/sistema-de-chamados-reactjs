import React, { useState } from "react";
import "./signin.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="containerCenter">
      <div className="login">
        <div className="loginArea">
          <img src={logo} alt="Logo do sistema de chamado" />
        </div>

        <form>
          <h1>Entrar</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" value="Acessar">
            Acessar
          </button>
        </form>

        <Link to="/register">Criar uma Conta</Link>
      </div>
    </div>
  );
};

export default SignIn;
