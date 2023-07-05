import { Navbar } from "./components/header/NavBar/Navbar";
import  {ItemListContainer}  from "./components/main/items-card/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemsDetailsRoute } from "./components/main/items-card/ItemsDetailsRoute";
import { useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Footer } from "./components/footer/Footer";
import { CartContainer } from "./components/main/items-card/CartContainer";


interface Brand {
	id: string;
  }
  
  interface Item {
	id: string;
	products: Brand[];
	cantidad: number

  }

const App = () => {
	const [cart, setCart] = useState<Item[]>([]);

	const addCart = (item: Item, cantidad: number) => {
		const newItem: Item = {
		  ...item,
		  cantidad: cantidad
		};
	  
		const existingProduct = cart.find( (product) => product.id === newItem.id && product.cantidad === newItem.cantidad);
	  
		if (existingProduct) {
		  existingProduct.cantidad += newItem.cantidad;
		  setCart([...cart]);
		} else {
		  setCart([...cart, newItem]);
		}
		 // Guardar el carrito en el localStorage
		 localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
	  };
	  useEffect(() => {
		const savedCart = localStorage.getItem('cart');
	  
		if (savedCart) {
		  setCart(JSON.parse(savedCart));
		}
	  }, []);
// 	const cantProductsInCart = () => { 
// return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
// 	}
	return (
		
		<CartContext.Provider value= { {cart, addCart, setCart } }>
		<BrowserRouter>
		  <Navbar />
		  <Routes>
			<Route path="/" element={<ItemListContainer />} />
			<Route path="/item/:id" element={<ItemsDetailsRoute />} />
			<Route path="/products/:brand" element={<ItemListContainer />} />
			<Route path="/cart" element={<CartContainer/>} />
		  </Routes>
		  <Footer/>
		</BrowserRouter>
		</CartContext.Provider>
		
	  );
	};

export default App;
