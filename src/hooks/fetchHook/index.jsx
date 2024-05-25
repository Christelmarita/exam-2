import { useState, useCallback, useContext } from "react";
import { AuthContext } from "../../utils/authContext";
import { getApiKey } from "../../utils/getApiKey";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const performFetch = useCallback(
    async (options = {}) => {
      setLoading(true);
      try {
        const headers = new Headers({
          "Content-Type": "application/json",
          ...options.headers,
        });

        if (user?.accessToken) {
          headers.append("Authorization", `Bearer ${user.accessToken}`);
        }

        let apiKey = localStorage.getItem("apiKey");
        if (!apiKey && user?.accessToken) {
          apiKey = await getApiKey(user.accessToken);
          localStorage.setItem("apiKey", apiKey);
        }

        if (apiKey) {
          headers.append("X-Noroff-API-Key", apiKey);
        }

        const response = await fetch(url, {
          ...options,
          headers,
        });

        const json = await response.json();

        if (!response.ok) {
          console.error("Error Response:", json);
          throw new Error(`HTTP error! status: ${response.status}, message: ${json.message}`);
        }

        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [url, user]
  );

  return { data, loading, error, performFetch };
};

export default useFetch;
