import React from "react";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import { useAppSelector } from "./redux/hooks/hook";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const theme = useAppSelector((state) => state.themeState.theme);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;
