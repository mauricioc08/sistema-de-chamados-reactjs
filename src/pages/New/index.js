import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlusCircle } from "react-icons/fi";
import "./new.css";
import React, { useState } from "react";

const New = () => {
  const [customers, setCustomers] = useState([]);
  const [complemento, setComplemento] = useState("");
  const [assunto, setAssunto] = useState("Suporte");
  const [status, setStatus] = useState("Aberto");

  function handleOptionChange(e) {
    setStatus(e.target.value);
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Novos chamado">
          <FiPlusCircle size={25} />
        </Title>

        <div className="conatiner">
          <form className="formProfile">
            <label>Clientes</label>
            <select>
              <option key={1} value={1}>
                Mercado esquina
              </option>
              <option key={2} value={2}>
                Loja informatica
              </option>
            </select>

            <label>Assunto</label>
            <select>
              <option value="Suporte">Suporte</option>
              <option value="Visita Tecnica">Visita Tecnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <label>Status</label>
            <div className="status">
              <input
                type="radio"
                name="radio"
                value="Aberto"
                onChange={handleOptionChange}
                checked={status === "Aberto"}
              />
              <span>Em Aberto</span>
              <input
                type="radio"
                name="radio"
                value="Progresso"
                onChange={handleOptionChange}
                checked={status === "Progresso"}
              />
              <span>Progresso</span>
              <input
                type="radio"
                name="radio"
                value="Atendido"
                onChange={handleOptionChange}
                checked={status === "Atendido"}
              />
              <span>Atendido</span>
            </div>
            <label>Complemento</label>
            <textarea
              type="text"
              placeholder="Descreva seu problema (opcional)."
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
