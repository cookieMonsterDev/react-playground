import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface useAxiosTypes<T> {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  body?: T;
  config?: AxiosRequestConfig<any> | undefined
}

const useAxios = <T = any>({ method, url, body, config }: useAxiosTypes<T>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<T>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
  
      axios[method](url, body, config)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          setError(error.response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData()
  }, [url, method, body, config]);

  return {data, error, loading}
};

export default useAxios;
