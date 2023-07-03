import React from "react";
import "./modal.css";
import { FiX } from "react-icons/fi";

const Modal = () => {
  return (
    <div className="modal">
      <div className="container">
        <button className="close">
          <FiX size={25} color="#fff" />
          Voltar
        </button>

        <main>
          <h2>Detalhes do chamado</h2>
          <div className="row">
            <span>
              Cliente: <i>Mercado</i>
            </span>
          </div>
          <div className="row">
            <span>
              Assunto: <i>Suporte</i>
            </span>
            <span>
              Cadastrado em: <i>22/08/2023</i>
            </span>
          </div>
          <div className="row">
            <span>
              Status: <i>Aberto</i>
            </span>
          </div>
          <>
            <h3>Complemento</h3>
            <p>
              Aqui vai todo o complemento do chamado...Aqui vai todo o
              complemento do chamado.Aqui vai todo o complemento do chamado.Aqui
              vai todo o complemento do chamado.Aqui vai todo o complemento do
              chamado.Aqui vai todo o complemento do chamado.Aqui vai todo o
              complemento do chamado..
            </p>
          </>
        </main>
      </div>
    </div>
  );
};

export default Modal;