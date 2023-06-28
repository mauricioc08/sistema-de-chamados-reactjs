import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import "./dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>

        <>
          <Link to="/new" className="new">
            <FiPlus size={25} color="#fff" />
            Novo chamado
          </Link>

          <table>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">Informatica Tech</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ background: "#999" }}>
                    Em aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/12/2023</td>
                <td data-label="#">
                  <button className="action" style={{ background: "#3583f6" }}>
                    <FiSearch color="#fff" size={25} />
                  </button>
                  <button className="action" style={{ background: "#f6a935" }}>
                    <FiEdit2 color="#fff" size={25} />
                  </button>
                </td>
              </tr>

              <tr>
                <td data-label="Cliente">Mercado esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{ background: "#999" }}>
                    Em aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/12/2023</td>
                <td data-label="#">
                  <button className="action" style={{ background: "#3583f6" }}>
                    <FiSearch color="#fff" size={25} />
                  </button>
                  <button className="action" style={{ background: "#f6a935" }}>
                    <FiEdit2 color="#fff" size={25} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
