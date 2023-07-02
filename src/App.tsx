import { Navbar } from "./components/header/NavBar/Navbar";
import { ItemListContainer } from "./components/main/items-card/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemsDetailsRoute } from "./components/main/items-card/ItemsDetailsRoute";

 const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/item/:id" element={<ItemsDetailsRoute />} />
				<Route path="/Products" element={<ItemListContainer />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
