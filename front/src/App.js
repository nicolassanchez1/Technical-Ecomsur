import React from "react";
import { store,persistor } from "./redux/store/store";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // const [response, setResponse] = useState("");

  // // // call server to see if its running
  // useEffect(() => {
  //   const getApiResponse = () => {
  //     fetch("http://localhost:5000/")
  //       .then((res) => res.text())
  //       .then((res) => setResponse(res));
  //   };
  //   getApiResponse();
  // }, []);
  // -------------------------------------------------

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <ProductList />
      </PersistGate>
    </Provider>
  );
};

export default App;
