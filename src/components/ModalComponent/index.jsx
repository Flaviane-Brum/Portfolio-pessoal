import styles from "./Modal.module.scss";

import { FaWindowClose, FaTools, FaLink, FaGithubAlt } from "react-icons/fa";
import SliderComponent from "../SliderComponent";

const ModalComponent = ({ modal, setModal, active }) => {
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModal(null);
      console.log(event.currentTarget);
      console.log(event.target);
    }
  }

  function closeModal() {
    setModal(null);
  }
  return (
    <div
      className={`${styles.projetoContainer} 
      ${active ? "scale-in-center" : "animeLeft"}  `}
    >
      <div className={`${styles.modal}`} onClick={handleOutsideClick}>
        <div className={`${styles.containerModal} `}>
          <h1 className={styles.modalTitle}>
            {`${modal.title} `}
            <span onClick={closeModal} className="animeLeft">
              <FaWindowClose />
            </span>
          </h1>
          <div className={styles.projetoDescricao}>
            <SliderComponent modal={modal} />
            <div className={styles.projetoDescricaoItem}>
              <div className={styles.projetoInfo}>
                <h2>Informações do projeto</h2>
                <p>{modal.description}</p>
              </div>
              <div className={styles.projetoDetalhes}>
                <h3>
                  {" "}
                  <FaTools /> Tecnologias
                </h3>
                <ul className={styles.tecs}>
                  {modal.tecnologias.map((tec, index) => (
                    <li key={index}>{tec.tech}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <span>
                    <FaLink /> Link do projeto:
                    <a
                      href={modal.linkProjeto}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Projeto
                    </a>
                  </span>
                  <span>
                    <FaGithubAlt /> Link do código no GitHub:
                    <a
                      href={modal.linkRepository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Código
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
