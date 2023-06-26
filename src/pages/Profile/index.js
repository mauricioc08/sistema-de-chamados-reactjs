import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import avatar from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";
import "./profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha Conta">
          <FiSettings size={25} />
        </Title>

        <div className="container">
          <form className="formProfile">
            <label className="labelAvatar">
              <span>
                <FiUpload color="#fff" size={25} />
              </span>
              <input type="file" accept="image/*" /> <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  alt="foto de perfil"
                  width={250}
                  height={250}
                />
              ) : (
                <img
                  src={avatarUrl}
                  alt="foto de perfil"
                  width={250}
                  height={250}
                />
              )}
            </label>

            <label>Nome</label>
            <input type="text" placeholder="Seu Nome" />

            <label>Email</label>
            <input type="email" placeholder="email@email.com" disabled={true} />

            <button type="submit">Salvar</button>
          </form>
        </div>

        <div className="container">
          <button className="logoutBtn">Sair</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
