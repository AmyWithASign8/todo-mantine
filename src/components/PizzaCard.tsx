import React from "react";
import { Card, Image, Group, Text, Badge, Button, Loader } from "@mantine/core";
import { IPizza } from "../pages/Home";
import { ShoppingCart } from "tabler-icons-react";
import { IconCheck } from "@tabler/icons";
import { addItem } from "../redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";

const PizzaCard: React.FC<IPizza> = ({ imageUrl, name }) => {
  const [btnCheck, setBtnCheck] = React.useState(false);
  const { items } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const clickAddToCart = (name: string, imgUrl: string) => {
    dispatch(addItem({ name, imgUrl }));
    setBtnCheck(true);
    console.log(items);
  };

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={imageUrl} alt="Norway" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        {btnCheck ? (
          <Button
            variant="light"
            color="green"
            fullWidth
            mt="md"
            radius="md"
            leftIcon={<IconCheck />}
          >
            Добавлено
          </Button>
        ) : (
          <Button
            variant="outline"
            color="orange"
            fullWidth
            mt="md"
            radius="md"
            leftIcon={<ShoppingCart />}
            onClick={() => clickAddToCart(name, imageUrl)}
          >
            В корзину
          </Button>
        )}
      </Card>
    </>
  );
};

export default PizzaCard;
