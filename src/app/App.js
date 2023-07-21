import './App.css';
import React from "react";
import Header from '../features/Header';
import 'tailwindcss/tailwind.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import SideBar from '../features/SideBar';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-slate-100 to-slate-400">
      <Header />
      <main>

      </main>
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;