import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
	ReactNode,
} from "react";

import { ProductProps } from "../types";

interface CartContextType {
	cart: ProductProps[];
	addCart: (item: ProductProps, quantity: number) => void;
	setCart: Dispatch<SetStateAction<ProductProps[]>>;
	totalPrice: number;
	removeProduct: (index: number) => void;
}

type Item = {
	[x: string]: any;
	id: string;
	title: string;
	description: string;
	stock: number;
	price: number;
	srcImg: string[];
	quantity: number;
};

export const CartContext: React.Context<CartContextType> =
	createContext<CartContextType>({
		cart: [],
		addCart: () => {},
		setCart: () => {},
		totalPrice: 0,
		removeProduct: () => {},
	});

// Guardar el carrito en el localStorage
const cartInitialString = localStorage.getItem("cart");
const CartInitial: Item[] = cartInitialString
	? JSON.parse(cartInitialString)
	: [];

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<Item[]>(CartInitial);

	const addCart = (item: Item, quantity: number): void => {
		const newItem: Item = {
			...item,
			quantity: quantity,
		};

		const existingProduct = cart.find(
			(product) =>
				product.id === newItem.id && product.brand === newItem.brand
		);

		if (existingProduct) {
			existingProduct.quantity += newItem.quantity;
			setCart([...cart]);
		} else {
			setCart([...cart, newItem]);
		}
	};
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify([...cart]));
	}, [cart]);

	const totalPrice = cart
		.flatMap((item) =>
			item.products.flatMap((product: { products: any[] }) =>
				product.products.map(
					(prod) => parseFloat(prod.price) * item.quantity
				)
			)
		)
		.reduce((total, value) => total + value, 0);

	const removeProduct = (index: number) => {
		const updatedCart = [...cart];
		updatedCart.splice(index, 1);
		setCart(updatedCart);
	};
	return (
		<CartContext.Provider
			value={{ cart, addCart, setCart, totalPrice, removeProduct }}>
			{children}
		</CartContext.Provider>
	);
};
