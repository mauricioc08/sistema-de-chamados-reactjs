import React, { useContext, useEffect, useState } from "react";
import "./rules.css";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { db } from "../../services/firebaseConnections";
import {
  collection,
  getDocs,
  doc,
  orderBy,
  query,
  deleteDoc,
} from "firebase/firestore";
import { FiGlobe, FiX } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import { toDate, format } from "date-fns";

const Rules = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastDocs, setLastDocs] = useState();

  function deleteUser() {
    alert("testttttt");
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const listRef = collection(db, "users");
    const querySnapshot = await getDocs(listRef);
    const userList = [];
    querySnapshot.forEach((doc) => {
      userList.push(doc.data());
    });
    console.log(userList);
    setUsers(userList);
  }

  return (
    <>
      <Header />
      {user.rules == "1" && (
        <div className="content">
          <Title name="Regras">
            <FiGlobe size={25} />
          </Title>

          <div className="container dashboard">
            <table>
              <thead>
                <tr>
                  <th scope="col">Usuários</th>
                  <th scope="col">Email</th>
                  <th scope="col">Nivel de acesso</th>
                  <th scope="col">Cadastrado</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td data-label="Cliente">{item.nome}</td>
                    <td data-label="Email">{item.email}</td>
                    <td data-label="Status">
                      <span
                        className="badge"
                        style={{
                          background:
                            item.rules == "1"
                              ? "rgb(102, 102, 236)"
                              : "rgb(192, 212, 7)",
                        }}
                      >
                        {item.rules}
                      </span>
                    </td>
                    <td data-label="Cadastrado"></td>
                    <td data-label="#">
                      <button
                        onClick={deleteUser}
                        className="action"
                        style={{ background: "rgba(247, 3, 3, 0.856)" }}
                        title="Excluir Dados de Usuário"
                      >
                        <FiX size={25} color="#fff" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
