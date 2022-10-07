import React from "react";
import MantineImg from "../../assets/img/Mantine.png";
import {
  Drawer,
  Button,
  Group,
  Input,
  PasswordInput,
  createStyles,
  Menu,
  Center,
  Modal,
  Header as MantineHeaeder,
} from "@mantine/core";
import InputMask from "react-input-mask";
import { switchTheme } from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";
import { IconUser } from "@tabler/icons";

const useStyles = createStyles(() => ({
  header: {
    textAlign: "center",
  },
}));

function Header() {
  const [opened, setOpened] = React.useState(false);
  const [opened1, setOpened1] = React.useState(false);
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const [closeModal, setCloseModal] = React.useState(false);

  const handleOpenModal1 = () => {
    setOpenModal(true);
  };

  return (
    <MantineHeaeder
      height={100}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "10",
      }}
    >
      <Group>
        <Group noWrap position="apart" style={{ width: "100%" }}>
          <Group>
            <img
              src={MantineImg}
              className="w-28 rounded-full"
              style={{ width: "100px" }}
            />
            <h1 className="font-bold text-6xl ml-4">Mantine</h1>
          </Group>

          <Menu shadow="md" width={300}>
            <Menu.Target>
              <Button
                variant="gradient"
                gradient={{ from: "orange", to: "red" }}
                mr={100}
              >
                Меню
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu></Menu>
              <Menu.Label>Авторизация</Menu.Label>
              <Menu.Item onClick={() => setOpened(true)} icon={<IconUser />}>
                Регистрация
              </Menu.Item>
              <Menu.Item onClick={() => setOpened1(true)} icon={<IconUser />}>
                Войти в аккаунт
              </Menu.Item>
              <Menu.Label>Разное</Menu.Label>
              <Menu.Item onClick={() => dispatch(switchTheme())}>
                Сменить тему
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
      <Drawer
        className="text-3xl"
        position="right"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Регистрация"
        padding="xl"
        size="xl"
        classNames={{
          header: classes.header,
        }}
      >
        <Input.Wrapper
          className="text-left"
          label="Пожалуйста введите свой email"
          required
        >
          <Input placeholder="email" size="md" className="mb-2" />
        </Input.Wrapper>
        <Input.Wrapper
          className="text-left"
          label="Пожалуйста введите свой телефон"
          required
        >
          <Input
            component={InputMask}
            mask="+7 (999) 999-99-99"
            placeholder="+7 (999) 999-99-99"
          />
        </Input.Wrapper>
        <PasswordInput
          label="Введите свой пароль"
          placeholder="Пароль"
          required
        />
        <Group position="center" mt="xl">
          <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
            Регистрация
          </Button>
        </Group>
      </Drawer>
      <Drawer
        className="text-3xl"
        position="right"
        opened={opened1}
        onClose={() => setOpened1(false)}
        title="Войти"
        padding="xl"
        size="xl"
        classNames={{
          header: classes.header,
        }}
      >
        <Input.Wrapper
          className="text-left"
          label="Пожалуйста введите свой email"
          required
        >
          <Input placeholder="email" size="md" className="mb-2" />
        </Input.Wrapper>
        <PasswordInput
          label="Введите свой пароль"
          placeholder="Пароль"
          required
        />
        <Group position="center" mt="xl">
          <Button
            onClick={() => handleOpenModal1()}
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
          >
            Войти
          </Button>
        </Group>
      </Drawer>
    </MantineHeaeder>
  );
}

export default Header;
