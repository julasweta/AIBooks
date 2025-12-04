import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === apiKey) {
      localStorage.setItem("auth", "true");
      setError("");
      navigate('/ua/lesson')
    } else {
      setError("Невірні дані");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Вхід</h2>

        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введіть email"
          />
        </label>

        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введіть пароль"
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn-login">
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;