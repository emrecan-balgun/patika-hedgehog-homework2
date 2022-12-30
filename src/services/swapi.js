import axios from "axios";

import { PEOPLE_API_LINK, SWAPI_CATEGORIES_LINK } from "../constants";

const getAllPeople = async () => {
    return await axios.get(PEOPLE_API_LINK);
};

const getAllCategories = async () => {
    return await axios.get(SWAPI_CATEGORIES_LINK);
}

export { getAllPeople, getAllCategories };