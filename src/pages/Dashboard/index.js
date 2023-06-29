import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import "./dashboard.css";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  orderBy,
  limit,
  startAfter,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnections";
import { format } from "date-fns";

const listRef = collection(db, "chamados");

const Dashboard = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpyt, setIsEmpyt] = useState(false);
  const [lastDocs, setLastDocs] = useState();
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function loadChamados() {
      const q = query(listRef, orderBy("created", "desc"), limit(5));

      const querySnapshot = await getDocs(q);
      setChamados([]);
      await updateState(querySnapshot);

      setLoading(false);
    }
    loadChamados();
    return () => {};
  }, []);

  async function updateState(querySnapshot) {
    const isCollectionEmpy = querySnapshot.size === 0;

    if (!isCollectionEmpy) {
      let lista = [];

      querySnapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          assunto: doc.data().assunto,
          cliente: doc.data().cliente,
          clienteId: doc.data().clienteId,
          created: doc.data().created,
          createdFormat: format(doc.data().created.toDate(), "dd/MM/yyyy"),
          status: doc.data().status,
          complemento: doc.data().complemento,
        });
      });
      const lastDocs = querySnapshot.docs[querySnapshot.docs.length - 1];
      setChamados((chamados) => [...chamados, ...lista]);
      setLastDocs(lastDocs);
    } else {
      setIsEmpyt(true);
    }
    setLoadingMore(false);
  }

  async function handleMore() {
    setLoadingMore(true);
    const q = query(
      listRef,
      orderBy("created", "dist"),
      startAfter(lastDocs),
      limit(5)
    );
    const querySnapshot = await getDocs(q);
    await updateState(querySnapshot);
  }

  if (loading) {
    return (
      <div>
        <Header />
        <div className="content">
          <Title name="Tickets">
            <FiMessageSquare size={25} />
          </Title>

          <div className="container dashboard">
            <span>Buscando chamados...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>

        <>
          {chamados.length === 0 ? (
            <div className="container dashboard">
              <span>Nenhum chamado encontrado...</span>
              <Link to="/new" className="new">
                <FiPlus size={25} color="#fff" />
                Novo chamado
              </Link>
            </div>
          ) : (
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
                  {chamados.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="Cliente">{item.cliente}</td>
                        <td data-label="Assunto">{item.assunto}</td>
                        <td data-label="Status">
                          <span
                            className="badge"
                            style={{ background: "#999" }}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td data-label="Cadastrado">{item.createdFormat}</td>
                        <td data-label="#">
                          <button
                            className="action"
                            style={{ background: "#3583f6" }}
                          >
                            <FiSearch color="#fff" size={25} />
                          </button>
                          <button
                            className="action"
                            style={{ background: "#f6a935" }}
                          >
                            <FiEdit2 color="#fff" size={25} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {loadingMore && <h3>Buscando chamados...</h3>}
              {!loadingMore && !isEmpyt && (
                <button className="btnMore" onClick={handleMore}>
                  Buscar mais
                </button>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Dashboard;
