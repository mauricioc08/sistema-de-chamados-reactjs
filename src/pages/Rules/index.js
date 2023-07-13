import React, { useContext, useEffect, useState } from "react";
import "./rules.css";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { db, auth } from "../../services/firebaseConnections";
import {
  collection,
  getDocs,
  doc,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { FiGlobe, FiX } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import avatar from "../../assets/avatar.png";
import { toast } from "react-toastify";

const Rules = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  async function deleteUser(userId) {
    if (window.confirm("Tem certeza que deseja excluir este chamado?")) {
      try {
        await deleteDoc(doc(db, "users", userId));
        setUsers(users.filter((user) => user.id !== userId));
        toast.success("Chamado excluído com sucesso!");
      } catch (error) {
        toast.error("Erro ao excluir o chamado:", error);
      }
    }
  }

  useEffect(() => {
    const unsubscribe = loadUsers();
    return () => unsubscribe();
  }, []);

  const loadUsers = () => {
    const listRef = collection(db, "users");
    const usersQuery = query(listRef, orderBy("created", "desc"));
    return onSnapshot(usersQuery, (snapshot) => {
      const userList = [];
      snapshot.forEach((doc) => {
        userList.push(doc.data());
      });
      console.log(userList);
      setUsers(userList);
    });
  };

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
                  <th scope="col">Foto de Perfil</th>
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
                    <td data-label="Cadastrado">
                      {item.avatarUrl === null ? (
                        <img
                          src={avatar}
                          alt="foto de perfil"
                          width={40}
                          height={40}
                        />
                      ) : (
                        <img
                          src={item.avatarUrl}
                          alt="foto de perfil"
                          width={40}
                          height={40}
                        />
                      )}
                    </td>
                    <td data-label="#">
                      <button
                        onClick={() => deleteUser(item.uid)}
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
