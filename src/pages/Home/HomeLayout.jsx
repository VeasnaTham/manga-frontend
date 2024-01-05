import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Navigation from "../../Navigation/Nav";

function HomeLayout() {
  const [category, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Outlet />
    </>
  );
}
export default HomeLayout;
