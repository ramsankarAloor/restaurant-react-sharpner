import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onCloseClick={hideCart} />}
      <Header onCartClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
