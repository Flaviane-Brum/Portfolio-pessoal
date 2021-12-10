import { useAppContext } from "../../GlobalContext";
import styles from "./sobre.module.scss";
import Head from "next/head";
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiGit,
  DiNpm,
} from "react-icons/di";
import {
  MdLocationCity,
  MdLocationOn,
  MdOutlineEmail,
  MdWork,
} from "react-icons/md";
import {
  FaGraduationCap,
  FaRegCalendarAlt,
  FaBookOpen,
  FaLaptopCode,
  FaWhatsapp,
} from "react-icons/fa";
const arrayIcons = [
  { name: "ReactJs", icone: DiReact, color: "#60D7F7" },
  { name: "Javascript", icone: DiJavascript, color: "#EFD81D" },
  { name: "HTML5", icone: DiHtml5, color: "#F7621E" },
  { name: "CSS3", icone: DiCss3, color: "#016DB4" },
  { name: "Sass", icone: DiSass, color: "#C76494" },
  { name: "Git", icone: DiGit, color: "#E94E31" },
  { name: "Npm", icone: DiNpm, color: "#C53635" },
];
const Sobre = () => {
  const { active, btnMobile } = useAppContext();

  return (
    <>
      <Head>
        <title>Sobre | Meu portfólio</title>
        <meta
          name="description"
          content="Aqui escrevo um pouco sobre mim, meus cursos, e processos de aprendizagem."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aqui escrevo um pouco sobre mim, meus cursos, e processos de aprendizagem."
        />
      </Head>
      <main
        className={`  ${styles.sobre} ${active && "anime-right  "} ${
          btnMobile && styles.BtnMobileActive
        } `}
      >
        <section className={`${styles.container}  `}>
          <h1
            className={`${styles.titleSobre} 
             
            }`}
          >
            Sobre mim
          </h1>
          <article
            className={`${styles.textoSobreMim} 
             
            `}
          >
            <h2>Seja Bem-vindo(a)!</h2>
            <p>
              Me chamo Flaviane, sou estudante de Análise e desenvolvimento de
              sistemas, estou no 5º semestre. Sou apaixonada por tecnologia e
              estou em busca de uma oportunidade na área de desenvolvimento Web,
              para adquirir mais conhecimento no assunto e poder evoluir mais
              rápido. Meu objetivo é me tornar desenvolvedora front-end.
            </p>
            <div className={`${styles.endereco} `}>
              <h2>Contato</h2>
              <ul className={`${styles.ulDark} `}>
                <li>
                  <MdLocationOn size={25} /> Rio Grande do Sul
                </li>

                <li>
                  <MdLocationCity size={25} /> Porto Alegre
                </li>

                <li>
                  {" "}
                  <MdOutlineEmail size={25} /> flavianebs3@gmail.com
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=55519938335295&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Meu%20nome%20%C3%A9%20Flaviane%20e%20estou%20%C3%A0%20sua%20disposi%C3%A7%C3%A3o."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={25} /> (51)9383-3529
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className={`${styles.conhecimentos} `}>
            <h2>Conhecimentos</h2>
            <div className={styles.gridConhecimentos}>
              <div className={`${styles.habilidades}`}>
                <h3>
                  {" "}
                  <FaLaptopCode size={25} /> Habilidades
                </h3>
                <div className={styles.skillsIcons}>
                  {arrayIcons.map((icon) => (
                    <small key={icon.name}>
                      <icon.icone color={icon.color} />
                      {icon.name}
                    </small>
                  ))}
                </div>
              </div>

              <div className={styles.educacao}>
                <div>
                  <h3>
                    <FaGraduationCap size={25} />
                    Educação
                  </h3>
                  <div className={styles.faculdade}>
                    <FaRegCalendarAlt /> <span>2019 - 2022</span>
                    <p>Escolas e Faculdades QI (Cursando)</p>
                    <small>Análise e desenvolvimento de sistemas</small>
                  </div>
                  <div className={styles.faculdade}>
                    <FaRegCalendarAlt /> <span>2018 - 2019</span>
                    <p>Colégio Estadual Protásio Alves</p>
                    <small>Curso técnico informática para internet</small>
                  </div>
                  <div className={styles.faculdade}>
                    <FaRegCalendarAlt /> <span>2016 - 2017</span>
                    <p>Colégio AGIR</p>
                    <small>Ensino médio</small>
                  </div>
                </div>
              </div>
              <div className={styles.gridExperiencia}>
                <div className={`${styles.experiencia} `}>
                  <div>
                    <h3>
                      <MdWork size={25} />
                      Experiência
                    </h3>
                    <p>
                      Atualmente não possuo experiências registradas em
                      programação, mas estou sempre em busca de melhores
                      práticas e também em busca de aprender/experimentar novas
                      tecnologias. Minhas experiências atuais são os projetos
                      que fiz, e os que ainda estou desenvolvendo. Eles podem
                      ser encontrados no meu{" "}
                      <a
                        href="https://github.com/Flaviane-Brum?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </p>
                  </div>
                </div>
                <div className={`${styles.cursos} `}>
                  <h3>
                    {" "}
                    <FaBookOpen size={25} />
                    Cursos / Especializações
                  </h3>
                  <div className={`${styles.cursoContainer}  `}>
                    <div className={`${styles.curso} `}>
                      <p>Web Design Completo</p>
                      <span>Origamid</span>
                      <small>Ano de conclusão: 2020</small>
                      <small>carga horária: 44 horas</small>
                    </div>
                    <div className={`${styles.curso}`}>
                      <p> CSS com SASS</p>
                      <span>Origamid</span>
                      <small>Ano de conclusão: 2021</small>
                      <small>carga horária: 12 horas</small>
                    </div>
                    <div className={`${styles.curso} `}>
                      <p> React Completo</p>
                      <span>Origamid</span>
                      <small>Ano de conclusão: 2021</small>
                      <small>carga horária: 36 horas</small>
                    </div>
                    <div className={`${styles.curso}`}>
                      <p> Frontend Do Zero Ao Profissional</p>
                      <span>B7web</span>
                      <small>Ano de conclusão: 2021</small>
                      <small>carga horária: 36 horas</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Sobre;
