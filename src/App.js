import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <div className="text-2xl font-bold py-5 bg-black text-white text-center flex">
        Hello world
        <nav className="p-2 m-2 w-96 justify-between text-lg ">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/team">Team </a>
          <a href="/login">Login</a>
        </nav>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
