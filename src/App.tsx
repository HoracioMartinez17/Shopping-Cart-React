import { AppRouter } from "./routes/AppRouter";
import "./page/items-card/itemCartStyles.css";
import './page/loginPage/login.css'
import "./page/checkout/checkout.css";
import { CartProvider } from ".";import AuthProvider from "./context/AuthProvider";
;

const App = () => {
	return (
		<>
		<AuthProvider>
		<CartProvider>
			<AppRouter />
			</CartProvider>
			</AuthProvider>
			</>
	 
	);
};

export default App;
