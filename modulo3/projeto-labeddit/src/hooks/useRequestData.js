import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url, token, contador) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(url, { headers: { authorization: token } })
      .then((res) => setPost(res.data))
      .catch((err) => {
        alert("Algo deu errado");
        console.log(err);
      });
  }, [contador]);
  return post;
};
