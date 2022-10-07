import { ColorScheme, MantineProvider, Grid, Container } from "@mantine/core";
import axios from "axios";
import React from "react";
import Header from "./components/Header";
import PizzaCard from "./components/PizzaCard";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hook";

export interface IPizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

function App() {
  const [pizza, setPizza] = React.useState<IPizza[]>([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => setPizza(data));
  }, []);

  const theme = useAppSelector((state) => state.themeState.theme);
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme }}
    >
      <div className="App">
        <Header />
        <Container size="xl" mt={150}>
          <Grid gutter="xl">
            {pizza.map((obj) => (
              <Grid.Col span={4}>
                <PizzaCard key={obj.id} {...obj} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;
