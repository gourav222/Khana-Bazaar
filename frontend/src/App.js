import './App.css';
import Foodie from './components/Foodie';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import FoodRow from './components/FoodRow';
function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Foodie/>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
