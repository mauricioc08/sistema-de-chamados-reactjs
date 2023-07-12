import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import avatarImg from "../../assets/avatar.png";
import { FiHome, FiUser, FiSettings, FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img
          src={user.avatarUrl === null ? avatarImg : user.avatarUrl}
          alt="foto do usuário"
        />
      </div>
      <Link to="/dashboard">
        <FiHome color="#fff" size={24} />
        Chamados
      </Link>

      <Link to="/customers">
        <FiUser color="#fff" size={24} />
        Clientes
      </Link>

      <Link to="/profile">
        <FiSettings color="#fff" size={24} />
        Perfil
      </Link>
      {user.rules == "1" && (
        <Link to="/rules">
          <FiGlobe color="#fff" size={24} />
          Regras
        </Link>
      )}
    </div>
  );
};

export default Header;
