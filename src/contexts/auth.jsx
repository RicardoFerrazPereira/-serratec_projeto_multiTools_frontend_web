import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MySwal from "sweetalert2";
import api from "./../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    console.log("login auth", { username, password });
    api
      .post("/usuario/authenticate", { username, password })
      .then((response) => {
        const loggedUser = response.data.user;
        const token = response.data.token;
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(loggedUser);
        navigate("/projeto");
      })
      .catch(function (error) {
        if (error.response) {
          MySwal.fire({
            icon: "warning",
            title: "E-mail e/ou senha estão incorretos",
            confirmButtonText: "voltar",
          });
          navigate("/");
        }
      });
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
