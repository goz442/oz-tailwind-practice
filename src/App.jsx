import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { CartProvider } from "./context/cartContext";
import { MenuProvider } from "./context/menuContext";

function App() {
  return (
    <MenuProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="p-6 md:p-10">
            <Menu />
            <Cart />
          </main>
        </div>
      </CartProvider>
    </MenuProvider>
  );
}

export default App;