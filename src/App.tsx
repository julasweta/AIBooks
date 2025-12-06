
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppEn from "./componets/en/AppEn";
import AppUa from "./componets/AppUa";
import PromptsPage from './pages/PromptsPage';
import Home from "./componets/main/Home";


export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/en/lesson" element={<AppEn />} />
        <Route path="/ua/lesson" element={<AppUa />} />

        <Route path="/prompts" element={<PromptsPage />}/>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}


