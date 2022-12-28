import {
  Stack,
  Button,
  Title,
  Group,
  Divider,
  Card,
  Image,
  Text,
  Grid,
} from "@mantine/core";
import React from "react";
import { IconTrash } from "@tabler/icons";
import { isTemplateSpan } from "typescript";
import { Container } from "tabler-icons-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import { removeItem } from "../redux/slices/cartSlice";
import { showNotification } from "@mantine/notifications";

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

  const { items } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const clickToRemove = (name: string) => {
    dispatch(removeItem(name));
    console.log(name);
    showNotification({
      title: "Удалено",
      message: "Товар успешно удален из корзины",
      color: "teal",
    });
  };
  return (
    <>
      {items.length !== 0 ? (
        <>
          <Title order={1} align="center" mt={150} mb={40}>
            Корзина
          </Title>

          <Grid gutter="xl" mr={20} ml={20}>
            {items.map(({ name, imgUrl }) => (
              <>
                <Grid.Col span={3}>
                  <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image src={imgUrl} alt="Norway" />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={500}>{name}</Text>
                    </Group>

                    <Text size="sm" color="dimmed">
                      With Fjord Tours you can explore more of the magical fjord
                      landscapes with tours and activities on and around the
                      fjords of Norway
                    </Text>

                    <Button
                      variant="outline"
                      color="orange"
                      fullWidth
                      mt="md"
                      radius="md"
                      leftIcon={<IconTrash />}
                      onClick={() => clickToRemove(name)}
                    >
                      Убрать
                    </Button>
                  </Card>
                </Grid.Col>
              </>
            ))}
          </Grid>
        </>
      ) : (
        <Title order={1} align="center" mt={150} mb={40}>
          Корзина пуста :(
        </Title>
      )}
    </>
  );
}

export default Cart;
