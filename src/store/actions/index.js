import { MOVIES_LIST, MOVIE_DATA, GET_USER } from "../types";
import axios from "axios";

export const getUser = () => {
  const request = axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.data;
    });
  return {
    type: GET_USER,
    payload: request,
  };
};

export const moviesList = () => {
  return {
    type: MOVIES_LIST,
    payload: [
      { id: 1, name: "hulk miror" },
      { id: 2, name: "pacific rim" },
      { id: 3, name: "Ranwa" },
    ],
  };
};
export const movieData = () => {
  return {
    type: MOVIE_DATA,
    payload: {
      id: 1,
      name: "Pulp fiction",
      actors: ["Travolta", "Thurman"],
      year: 1990,
      director: "Tarantino",
    },
  };
};
