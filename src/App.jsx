import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Auth/LogIn";
import Details from "./pages/Details/Details";
import HomeLayout from "./pages/Home/HomeLayout";
import Listings from "./pages/Listings/Listings";
import History from "./pages/History/History";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/history" element={<History />} />
          <Route path=":id" element={<Details />} />
        </Route>
        
        <Route path="/LogIn" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
