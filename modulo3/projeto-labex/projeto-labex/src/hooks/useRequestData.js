import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  
  useEffect(() => {
    const takeData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data.trips);
      } catch (err) {
        alert.log(err);
      }
    };
    takeData();
  }, [url]);

  return data;
};
