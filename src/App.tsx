import { Navbar } from "./components/header/NavBar/Navbar";
import { ItemListContainer } from "./components/main/items-card/ItemListContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemsDetailsContainer } from "./components/main/items-card/ItemsDetailsContainer";
import { ProductsList } from "./components/main/products/ProductsList";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/item" element={<ItemsDetailsContainer itemId={6} />} />
				<Route path="/Products" element={<ProductsList/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
