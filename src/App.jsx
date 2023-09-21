import { Routes, Route } from "react-router-dom"
import Categories from "./components/categories/Categories";
import NavigationBar from "./components/navigationBar/NavigationBar";

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Categories/>}/>

      </Route>
    </Routes>
  )
}

export default App;
