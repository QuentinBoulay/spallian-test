import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import People from "./pages/People.js";
import Planet from "./pages/Planet.js";
import Starship from "./pages/Starship.js";
import CardDetails from './card/CardDetails.js';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient()

const App = () => {
  const [theme, setTheme] = useState(null);



  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/planet" element={<Planet />} />
              <Route path="/starship" element={<Starship />} />
              <Route path={`/${theme}/:userId`} element={<CardDetails />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;