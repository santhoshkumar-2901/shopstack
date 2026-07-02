import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import {Toaster} from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();

  return (
    <>
      <div
        className="min-h-screen bg-base-200 transition-colors duration-300"
        data-theme={theme}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
