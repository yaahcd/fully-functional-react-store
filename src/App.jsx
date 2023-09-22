import { Routes, Route } from "react-router-dom";
import Categories from "./components/categories/Categories";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Authentication from "./components/authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Categories />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
} 

export default App;
