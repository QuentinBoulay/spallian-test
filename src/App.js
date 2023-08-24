import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import People from "./pages/People.js";
import Planet from "./pages/Planet.js";
import Starship from "./pages/Starship.js";
import Species from "./pages/Species.js";
import Film from "./pages/Film.js";
import Vehicle from "./pages/Vehicle.js";
import DetailCard from "./pages/DetailCard.js";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemUrl, setItemUrl] = useState("");
  const [theme, setTheme] = useState(null);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider
          value={{
            theme,
            setTheme,
            currentPage,
            setCurrentPage,
            itemUrl,
            setItemUrl,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planet />} />
              <Route path="/starships" element={<Starship />} />
              <Route path="/species" element={<Species />} />
              <Route path="/films" element={<Film />} />
              <Route path="/vehicles" element={<Vehicle />} />
              <Route path={`/:theme/:id`} element={<DetailCard />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
