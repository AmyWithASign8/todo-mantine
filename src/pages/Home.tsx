import React from "react";
import { Grid, Container, Loader, Group, Input, Alert } from "@mantine/core";
import axios from "axios";
import PizzaCard from "../components/PizzaCard";
import { IconSearch, IconAlertCircle } from "@tabler/icons";

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

function Home() {
  const [pizza, setPizza] = React.useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchInput, setSearchInput] = React.useState("");
  const [dataError, setDataError] = React.useState(false);
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => {
        setPizza(data);
      })
      .catch(() => setDataError(true));
  }, []);
  const loader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const filteredSearchInput = pizza.filter((card) => {
    return card.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  React.useEffect(() => {
    loader();
  }, [searchInput]);

  return (
    <>
      <Group>
        {dataError ? (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="Внимание!"
            color="red"
            mt="20%"
            ml="auto"
            mr="auto"
          >
            Что-то пошло не так! Не удалось получить данные, пожалуйста
            проверьте ваш еподключение к интернету.
          </Alert>
        ) : (
          <>
            <Input.Wrapper
              label="Поиск пицц..."
              mt={150}
              ml={30}
              mr="0"
              mb="auto"
            >
              <Input
                icon={<IconSearch />}
                placeholder="Введите название"
                style={{ width: "300px" }}
                value={searchInput}
                onChange={(e: any) => setSearchInput(e.target.value)}
              />
            </Input.Wrapper>
            {isLoading && (
              <Container mt={500}>
                <Loader />
              </Container>
            )}
            {!isLoading && (
              <Container size="xl" mt={150}>
                {filteredSearchInput.length === 0 ? (
                  <p>К сожалению ничего найти не удалось :(</p>
                ) : (
                  <Grid gutter="xl">
                    {filteredSearchInput.map((obj) => (
                      <Grid.Col span={4}>
                        <PizzaCard key={obj.id} {...obj} />
                      </Grid.Col>
                    ))}
                  </Grid>
                )}
              </Container>
            )}
          </>
        )}
      </Group>
    </>
  );
}

export default Home;
