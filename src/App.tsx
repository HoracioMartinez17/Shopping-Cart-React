import { AppRouter } from "./routes/AppRouter";
import "./page/items-card/itemCartStyles.css";
import './page/loginPage/login.css'
import { CartProvider } from ".";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";


const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
		<CartProvider>
			<AppRouter />
			</CartProvider>
			</BrowserRouter>
			</AuthProvider>

	);
};

export default App;
