import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="containerCenter">
      <div className="login">
        <div className="loginArea">
          <img src={logo} alt="Logo do sistema de chamado" />
        </div>

        <form>
          <h1>Nova Conta</h1>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
          />

          <button type="submit" value="Acessar">
            Cadastrar
          </button>
        </form>

        <Link to="/">Já possui uma conta? Faça login</Link>
      </div>
    </div>
  );
};

export default SignUp;
