
import { Routes, Route, Link } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppEn from "./componets/en/AppEn";
import AppUa from "./componets/AppUa";


export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/auth">Auth</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/en/lesson" element={<AppEn />} />
        <Route path="/ua/lesson" element={<AppUa />} />
      </Routes>
    </div>
  );
}


