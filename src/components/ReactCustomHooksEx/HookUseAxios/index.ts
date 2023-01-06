import { useState, useEffect, useRef } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface useAxiosTypes<T> {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  body?: T;
  config?: AxiosRequestConfig<any>;
}

type Cache<T> = { [url: string]: T }

const useAxios = <T = any>({ method, url, body, config }: useAxiosTypes<T>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const cancelRequest = useRef<boolean>(false);
  const cache = useRef<Cache<T>>({})

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      setLoading(true);

      if (cache.current[url]) {
        setData(cache.current[url])
        return
      }

      try {
        const { data } = await axios[method](url, body, config);
        cache.current[url] = data
        if (cancelRequest.current) return;

        setData(data);
      } catch (error) {
        if (cancelRequest.current) return;

        setError(error.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = false;
    };
  }, [url, method, body, config]);

  return { data, error, loading };
};

export default useAxios;
