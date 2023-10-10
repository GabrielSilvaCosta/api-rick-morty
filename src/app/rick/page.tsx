import React from "react";
import Image from "next/image";
import { fetchCharacters } from "../Services/rickAndMortyApi";
import styles from "../page.module.css";

const CharacterList = async () => {
  try {
    const characters = await fetchCharacters();

    return (
      <>
        <h1 className={styles.title}>Personagens</h1>
        <ul className={styles.characterList}>
          {characters.map((character) => (
            <li key={character.id} className={styles.characterItem}>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className={styles.characterImage}
              />
              <h2 className={styles.characterName}>{character.name}</h2>
            </li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    console.error("Error ao buscar Personagem:", error);
    return <p>Error fetching data</p>;
  }
};

export default CharacterList;
