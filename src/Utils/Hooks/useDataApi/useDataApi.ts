import axios from "axios";
import { useEffect, useState, useRef } from "react";

export const useDataApi = (initialState: any) => {
  const firstUpdate = useRef(true);
  const [error, setError] = useState<any>(false);
  const [apiUrl, setApiUrl] = useState("");
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;
    if (!cancel) setLoading(true);

    if (!firstUpdate.current) {
      (async () => {
        if (!cancel) setLoading(true);
        try {
          const res = await axios.get(apiUrl);
          if (!cancel) setData(res.data);
        } catch (error) {
          if (!cancel) setError(error);
        } finally {
          if (!cancel) setLoading(false);
        }
      })();
    }

    firstUpdate.current = false;

    return () => {
      cancel = true;
    };
  }, [apiUrl]);

  return { data, error, loading, callApi: setApiUrl };
};
