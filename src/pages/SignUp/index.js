import React, { useState, useContext } from "react";
import logo from "../../assets/logo.gif";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      signUp(email, password, name);
    }
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="containerCenter">
      <div className="login">
        <div className="loginArea">
          <img src={logo} alt="Logo do sistema de chamado" />
        </div>

        <form onSubmit={handleSubmit}>
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
            {loadingAuth ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <Link to="/">Já possui uma conta? Faça login</Link>
      </div>
    </div>
  );
};

export default SignUp;
