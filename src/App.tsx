import { ColorScheme, MantineProvider } from "@mantine/core";
import React from "react";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hook";

function App() {
  const theme = useAppSelector((state) => state.theme);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme as ColorScheme }}
    >
      <div className="App">
        <Header />
      </div>
    </MantineProvider>
  );
}

export default App;
