import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(_url, _params = null) {
  const [params, setParams] = useState(_params);
  const [url, setUrl] = useState(_url);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url != null) {
        if (params == null) {
            axiosGet(setData, url, params);
        }
        else{
            axiosPost(setData, url, params);
        }
    }
  }, [url, params]);
  const get = (url, params) => {
    setParams(params);
    setUrl(url);
  }
  return [data, get];
}



async function axiosGet(setData, url){
    const fetched_data = (await axios.get(url)).data;
    setData(fetched_data);
} 

async function axiosPost(setData, url, data){
    const fetched_data = (await axios.post(url, data)).data;
    setData(fetched_data);
} 

export default useAxios;
