import axios from "axios";
import { useState, useEffect } from "react";

export const useApplyToTrip = (url, bodyParam) => {
  const body = bodyParam.initialState;
  axios
    .post(url, { headers: { ContentType: "application/json" }, body })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
