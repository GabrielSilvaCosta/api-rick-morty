// Services/rickAndMortyApi.ts
import { Character } from '../Types/rickAndMortyTypes';

export const fetchCharacters = async () => {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data: { results: Character[] } = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
