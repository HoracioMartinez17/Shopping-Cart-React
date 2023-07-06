import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../..";


export const CartContainer = () => {
	const { cart, totalPrice, removeProduct } = useContext(CartContext);

	return (
		<>
			<div className="carrito">
				<div className="carrito__contenedor">
					<div className="carrito__header">
						<h4 className="carrito__titulo">Carrito</h4>
						<button type="button" className="carrito__btn-cerrar">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16">
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
							</svg>
						</button>
					</div>
					<div className="carrito__body">
						<div className="carrito__productos">
							{cart.length === 0 && (
								<p>El carrito esta vacio :(</p>
							)}
							{cart.flatMap((item, itemIndex) =>
								item.products.flatMap(
									(product: { products: any[] }) =>
										product.products.map((prod) => (
											<div
												className="carrito__producto"
												key={`${prod.id}-${itemIndex}`}>
												<div className="carrito__producto-info">
													<img
														src={prod.srcImg}
														alt={prod.title}
														className="carrito__thumb"
													/>
													<div>
														<p className="carrito__producto-nombre">
															<span className="carrito__producto-quantity">
																{item.quantity}{" "}
																x{" "}
															</span>
															{prod.title}
														</p>
														<p className="carrito__producto-propiedades">
															Precio:
															<span>
																{prod.price.toLocaleString(
																	"en-US",
																	{
																		style: "currency",
																		currency:
																			"USD",
																	}
																)}
															</span>{" "}
															Color:
															<span>Rojo</span>
														</p>
													</div>
												</div>
												<div className="carrito__producto-contenedor-precio">
													<button
														type="button"
														className="carrito__btn-eliminar-item"
														onClick={() =>
															removeProduct(
																itemIndex
															)
														}>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															viewBox="0 0 16 16">
															<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
														</svg>
													</button>
													<p className="carrito__total">
														Precio Total:{" "}
														{(
															parseFloat(
																prod.price
															) * item.quantity
														).toLocaleString(
															"en-US",
															{
																style: "currency",
																currency: "USD",
															}
														)}
													</p>
												</div>
											</div>
										))
								)
							)}
						</div>
					</div>
					<div className="carrito__footer">
						<div className="carrito__contenedor-total">
							<div>
								<p className="carrito__label">Total:</p>
								<p className="carrito__total">
									{totalPrice.toLocaleString("en-US", {
										style: "currency",
										currency: "USD",
									})}
								</p>
							</div>
							<Link to="/checkout">
								<button
									type="button"
									className="carrito__btn-comprar"
									>
									Comprar
								</button>
							</Link>
						</div>
						<div
							className="carrito__contenedor-btn-regresar"
							>
							<Link to="/">
								{" "}
								<button
									type="button"
									className="carrito__btn-regresar">
									Regresar a la tienda
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
