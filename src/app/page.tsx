import Link from "next/link";
import styles from "./Styles/styles.module.css";

const Home = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Bem vindo aos personagens de Rick and Morty
      </h1>
      <p className={styles.description}>
        Clique no botão abaixo para ver os personagens:
      </p>

      <Link href="/rick">
        <button className={styles.btn}>Ver Personagens</button>
      </Link>
    </main>
  );
};

export default Home;
