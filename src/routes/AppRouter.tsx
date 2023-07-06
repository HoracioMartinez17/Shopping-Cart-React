import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { HomeRoute } from "../components/homeRoute/HomeRoute";
import { Login } from "../page/loginPage/Login";
export const AppRouter = () => {
	return (

				<Routes>
					<Route path="/login" element={<Login/>} />

					<Route path="/*" element={
          <ProtectedRoutes>
            <Routes>
            <Route path="/*" element={<HomeRoute />} />
            </Routes>
          </ProtectedRoutes>
        } />


				</Routes>

	);
};
