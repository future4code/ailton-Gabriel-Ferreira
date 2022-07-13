import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDetails = (url, token) => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const takeData = async () => {
      try {
        const res = await axios.get(url, {headers: {auth: token}});
        setData(res.data.trip);
        console.log(res.data.trip)
      } catch (err) {
        console.log(err);
      }
    };
    takeData();
  }, [url]);

  return data;
};
