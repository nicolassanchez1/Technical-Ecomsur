import React from "react";
import { store, persistor } from "./redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import ProductDescription from "./pages/product-description/ProductDescription";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  const { pathname } = useLocation();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {pathname !== "/checkout" && <Header />}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
