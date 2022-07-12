import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/Urls";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);

useEffect(()=>{
    axios.get(url)
    .then(res=>{setData(res.data.trips)   
    })
    .catch(err=>{console.log(err)})
}, [url])
  return data
};