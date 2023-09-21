import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import NavigationBar from "./components/navigationBar/NavigationBar";
import SignIn from "./components/signIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Categories />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
} 

export default App;
