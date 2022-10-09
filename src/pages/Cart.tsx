import { Stack, Button, Title, Group, Divider } from "@mantine/core";
import React from "react";
import { IconTrash } from "@tabler/icons";

function Cart() {
  const [cartItem, setCartItem] = React.useState([]);
  const [pizzasCount, setPizzasCount] = React.useState(0);

  const increment = () => {
    setPizzasCount((pizzasCount as number) + 1);
  };
  const decrement = () => {
    if (pizzasCount === 0)
      alert("Вы уверены что хотите убрать пиццу из корзины?");
    else setPizzasCount((pizzasCount as number) - 1);
  };

  return (
    <>
      <Title order={1} align="center" mt={150}>
        Корзина
      </Title>

      <Stack mt={100}>
        <Divider my="sm" />
        <Group position="apart">
          <Group>
            <img
              src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              width={150}
              style={{ borderRadius: "30%" }}
            />
            <Title order={2}>пицца</Title>
          </Group>
          <Group>
            <Button
              onClick={decrement}
              radius="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
            >
              -
            </Button>
            <Title order={2}>{pizzasCount}</Title>
            <Button
              onClick={increment}
              radius="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
            >
              +
            </Button>
            <Title order={2}>количество</Title>
          </Group>
          <Button
            radius="xl"
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            leftIcon={<IconTrash />}
            mr={40}
          >
            Убрать
          </Button>
        </Group>
        <Divider my="sm" />
      </Stack>
    </>
  );
}

export default Cart;
