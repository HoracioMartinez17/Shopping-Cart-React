import { Navigate, Route, Routes } from "react-router-dom";
import { ItemListContainer, ItemsDetailsRoute } from "..";
import { CartContainer, Home } from "../../page";
import Checkout from "../../page/checkout/Ckeckout";
import { Layout } from "../..";

export const HomeRoute = () => {
	return (
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/item/:id" element={<ItemsDetailsRoute />} />
					<Route path="/products/:brand"element={<ItemListContainer />}/>
					<Route path="/cart" element={<CartContainer />} />
					<Route path="/checkout" element={<Checkout />} />
                    <Route path="/" element={<Navigate to="/home" />} />
				</Routes>
			</Layout>
	);
};
