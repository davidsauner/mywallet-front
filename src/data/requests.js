import axios from "axios";
import { createContext, useState } from "react";

const BASE_URL = "http://localhost:5000";

export function signup(body) {
  const response = axios.post(`${BASE_URL}/sign-up`, body);
  return response;
}

export function signin(body) {
  const response = axios.post(`${BASE_URL}/sign-in`, body).catch((error) => {
    return error.response;
  });
  return response;
}

export function createTransaction(body, type, jwt) {
    const transaction = {
      ...body,
      type,
    };
  
    const response = axios
      .post(`${BASE_URL}/transactions`, transaction, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return response;
  }
  
  export function findAllTransactions(jwt) {
    const response = axios
      .get(`${BASE_URL}/transactions`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
  
    return response;
  }
  

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [jwt, setJwt] = useState("");

  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      {children}
    </AuthContext.Provider>
  );
}

export const RefreshContext = createContext();
function RefreshProvider({ children }) {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
}
