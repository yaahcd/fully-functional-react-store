import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Authentication from "./components/authentication/Authentication";
import Shop from "./components/shop/Shop";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Categories />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
