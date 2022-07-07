import axios from "axios";
import { choosePerson, getProfile, getMatches } from "../constants/Urls";

export const match = (idPar, choicePar, setFunction, hookValue) => {
  const body = {
    id: idPar,
    choice: choicePar,
  };
  axios
    .post(choosePerson, body)
    .then((res) => {
      console.log(res);
      setFunction(!hookValue);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const seeProfile = (setFunction) => {
  axios
    .get(getProfile)
    .then((res) => {
      setFunction(res.data.profile);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMatchesFunc = (setFunction) => {
  axios
    .get(getMatches)
    .then((res) => {
      setFunction(res.data.matches)
    })
    .catch((err) => {
      console.log(err);
    });
};
