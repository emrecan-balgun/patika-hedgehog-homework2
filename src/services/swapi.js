import axios from 'axios';

import { PEOPLE_API_LINK } from '../constants';

const getAllPeople = async () => {
  return await axios.get(PEOPLE_API_LINK);
};

const getFilmTitle = async (URL) => {
  return await axios.get(URL);
};

export { getAllPeople, getFilmTitle };
