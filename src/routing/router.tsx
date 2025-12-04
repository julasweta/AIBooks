import AppUa from "../componets/AppUa";
import AppEn from "../componets/en/AppEn";
import Login from "../pages/AuthPage";
import NotFoundPage from "../pages/NotFoundPage";




export const publicRoutes = [

  { path: "/en/lesson", element: <AppEn /> },
  { path: "/ua/lesson", element: <AppUa /> },
  { path: "/auth", element: <Login /> },


];





export const notFoundRoute = {
  path: "*",
  element: <NotFoundPage />,
};
