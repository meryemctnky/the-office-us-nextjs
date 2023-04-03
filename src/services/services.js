import axios from "axios"

export const getCharacters = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/characters.json`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting characters: ${error}`);
  }
}

export const getCharacter = async (id) => {
  try {
    const res = await axios(`${process.env.BASE_URL}/characters.json?orderBy="char_id"&equalTo="${id}"`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting character with id ${id}: ${error}`);
  }
};

export const getQuotes = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/quotes.json`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting characters: ${error}`);
  }
}





