
import { Routes, Route, Link } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppEn from "./componets/en/AppEn";
import AppUa from "./componets/AppUa";


export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/en/lesson" element={<AppEn />} />
        <Route path="/ua/lesson" element={<AppUa />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}


