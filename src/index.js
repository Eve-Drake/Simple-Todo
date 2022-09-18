import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Todo from "./Todo";
import App from "./App";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App/>}> </Route>
      <Route path="Todo" element={<Todo/>}> </Route>
    </Routes>
  </BrowserRouter>,
);