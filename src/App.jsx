import MainPage from "./Frontend/MainPage";
import { Route, Routes } from "react-router-dom";
import Courses from './Frontend/Courses'
import Login from './Frontend/Login'
import Demo from "./Frontend/Demo";
// import HirePage from './Frontend/HirePage'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<MainPage />}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/demo" exact element={<Demo/>}></Route>
      <Route path="/explore-program" exact element={<Courses />}></Route>
      </Routes>
  );
}

export default App;