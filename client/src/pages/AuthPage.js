import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (error) {}
  };
  const handleLogin = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (error) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-3">
        <h1>Сократи ссылку</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Введите email"
                  type="text"
                  id="email"
                  name="email"
                  value={form.email}
                  className="yellow-input"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="Введите пароль"
                  type="password"
                  id="password"
                  value={form.password}
                  name="password"
                  className="yellow-input"
                  onChange={handleChange}
                />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              style={{ marginRight: 10 }}
              className="btn yellow darken-4"
              disabled={loading}
              onClick={handleLogin}
            >
              Войти
            </button>
            <button
              className="btn grey lighten-1 white-text"
              onClick={handleRegistration}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
