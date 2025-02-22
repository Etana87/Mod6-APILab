import axios from 'axios';
import { Character } from './Character.api-model';

const API_URL = 'http://localhost:3001/characters';

export const getCharacterCollection = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<Character[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching character collection:', error);
    return [];
  }
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  try {
    const response = await axios.get<Character>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with id ${id}:`, error);
    return null;
  }
};

export const updateCharacter = async (character: Character): Promise<boolean> => {
  try {
    await axios.put(`${API_URL}/${character.id}`, character);
    return true;
  } catch (error) {
    console.error('Error updating character:', error);
    return false;
  }
};
