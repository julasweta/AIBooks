// App.js
import { Routes, Route} from "react-router-dom";
import { notFoundRoute, publicRoutes } from "./routing/router";
import MainLayout from "./layouts/MainLayout";



export default function App() {
 

  return (
    <div >
      <Routes>
       


        {/* Публічні роути - доступні всім */}
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout>{element}</MainLayout>}
          />
        ))}


   

        {/* 404 сторінка - має бути в кінці */}
        <Route
          path={notFoundRoute.path}
          element={notFoundRoute.element}
        />
      </Routes>
    </div>
  );
}


