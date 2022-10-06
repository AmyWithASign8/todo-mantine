import React from "react";
import MantineImg from "../../assets/img/Mantine.png";
import {
  Drawer,
  Button,
  Group,
  Input,
  TextInput,
  PasswordInput,
  createStyles,
  ActionIcon,
  Menu,
  Center,
  Text,
} from "@mantine/core";
import InputMask from "react-input-mask";
import { useAppDispatch } from "../../redux/hooks/hook";
import { switchTheme } from "../../redux/slices/themeSlice";
import { useDispatch } from "react-redux";
import { IconAdjustments } from "@tabler/icons";

const useStyles = createStyles(() => ({
  header: {
    textAlign: "center",
  },
}));

function Header() {
  const [opened, setOpened] = React.useState(false);
  const { classes } = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <header className="fixed">
        <div className="bg-slate-800 text-slate-200 flex items-center">
          <Group noWrap position="apart">
            <img src={MantineImg} className="w-28 rounded-full" />
            <h1 className="font-bold text-6xl ml-4">Mantine</h1>
            <Group position="right" mr={100}>
              <Menu shadow="md" width={300}>
                <Menu.Target>
                  <Button>Toggle menu</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => setOpened(true)}>
                    <Center>Регистрация</Center>
                  </Menu.Item>
                  <Menu.Item onClick={() => dispatch(switchTheme())}>
                    <Center>Сменить тему</Center>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </div>
        <div className="ml-auto"></div>
      </header>
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
          label="Пожалуйста введите свой пароль"
          placeholder="Пароль"
          required
        />
        <Group position="center" mt="xl">
          <Button>Регистрация</Button>
        </Group>
      </Drawer>
    </>
  );
}

export default Header;
