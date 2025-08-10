import styles from "./services.module.css";
import iconMonitor from "../../assets/Vector.png"
import bancoDeDados from "../../assets/HardDrives.png"
import infinit from "../../assets/infinit.png"

export default function Services() {


  return (
   <div className={styles.container}>

      <div className={styles.container_title}>
          <h1>Meus serviços</h1>
          <h2>Como posso ajudar o seu negócio</h2>
      </div>

      <div className={styles.services_container}>
          <div className={styles.services}>
            <div className={styles.content_service}>
              <img src={iconMonitor} alt="" />
              <h1>Websites e Aplicativos</h1>
              <h2>Desenvolvimento de interfaces</h2>
            </div>
          </div>
          <div className={styles.services}>
            <div className={styles.content_service}>
              <img src={bancoDeDados} alt="" />
              <h1>API e banco de dados</h1>
              <h2>Criação de serviços do sistema </h2>
            </div>
          </div>
          <div className={styles.services}>
            <div className={styles.content_service}>
              <img src={infinit} alt="" />
              <h1>DevOps</h1>
              <h2>Gestão e infraestrutura da aplicação</h2>
            </div>
          </div>
      </div>
   </div>
  );
}
