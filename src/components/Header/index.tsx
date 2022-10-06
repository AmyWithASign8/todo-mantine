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
} from "@mantine/core";
import InputMask from "react-input-mask";
import { switchTheme } from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";

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
    <>
      <Group className="fixed">
        <Group className="bg-slate-800 text-slate-200">
          <Group noWrap position="apart">
            <img src={MantineImg} className="w-28 rounded-full" />
            <h1 className="font-bold text-6xl ml-4">Mantine</h1>
            <Group position="right" mr={100}>
              <Menu shadow="md" width={300}>
                <Menu.Target>
                  <Button>Меню</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Input.Wrapper label="Авторизация">
                    <Menu.Item onClick={() => setOpened(true)}>
                      <Center>Регистрация</Center>
                    </Menu.Item>
                    <Menu.Item onClick={() => setOpened1(true)}>
                      <Center>Войти в аккаунт</Center>
                    </Menu.Item>
                  </Input.Wrapper>

                  <Input.Wrapper label="Разное">
                    <Menu.Item onClick={() => dispatch(switchTheme())}>
                      <Center>Сменить тему</Center>
                    </Menu.Item>
                  </Input.Wrapper>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Group>
        <div className="ml-auto"></div>
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
          <Button>Регистрация</Button>
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
          <Button onClick={() => handleOpenModal1()}>Войти</Button>
        </Group>
      </Drawer>
    </>
  );
}

export default Header;
