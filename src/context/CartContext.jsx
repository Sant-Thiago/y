import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [items, setItems] = useState([]);

	function addToCart(product) {
		setItems(prev => {
		const exists = prev.find(i => i.id === product.id);

		if (exists) {
			return prev.map(i =>
			i.id === product.id
				? { ...i, quantity: i.quantity + 1 }
				: i
			);
		}

		return [...prev, { ...product, quantity: 1 }];
		});
	}

	function removeFromCart(id) {
		setItems(prev =>
			prev
			.map(item =>
				item.id === id
				? { ...item, quantity: Math.max(0, (item.quantity ?? 1) - 1) }
				: item
			)
			.filter(item => item.quantity > 0)
		);
	}


	function updateQuantity(id, quantity) {
		setItems(prev =>
			prev.map(i => (i.id === id ? { ...i, quantity } : i))
		);
	}

	function clearQuantities() {
	    setItems(prev => prev.map(item => ({ ...item, quantity: 0 })));
	}

	function clearCart() {
		setItems([]);
	}



	function getItem(item) {
		return items.find(it => it.id === item.id)?.quantity || 0;
	} 

	return (
		<CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearQuantities, clearCart, getItem }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}
