import React from "react";
import { Card, Image, Group, Text, Badge, Button, Loader } from "@mantine/core";
import { IPizza } from "../pages/Home";
import { ShoppingCart } from "tabler-icons-react";

const PizzaCard: React.FC<IPizza> = ({ imageUrl, name }) => {
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

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button
          variant="outline"
          color="orange"
          fullWidth
          mt="md"
          radius="md"
          leftIcon={<ShoppingCart />}
        >
          В корзину
        </Button>
      </Card>
    </>
  );
};

export default PizzaCard;
