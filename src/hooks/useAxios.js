import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const fetched_data = (await axios.get(url)).data;
      setData(fetched_data);
    })();
  }, []);
  return data;
}

export default useAxios;
