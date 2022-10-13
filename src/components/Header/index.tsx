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
import {
  IconUser,
  IconShoppingCart,
  IconSunHigh,
  IconMoon,
  IconUserCircle,
  IconLogout,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hook";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useAppDispatch } from "../../redux/hooks/hook";
import { removeUser, setUser } from "../../redux/slices/userSlice";
import { useAuth } from "../../redux/hooks/useAuth";

interface FormsProps {
  handleClick: (email: string, pass: string) => void;
}

const useStyles = createStyles(() => ({
  header: {
    textAlign: "center",
  },
}));

const Header: React.FC<FormsProps> = () => {
  const [opened, setOpened] = React.useState(false);
  const [opened1, setOpened1] = React.useState(false);
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const [emailReg, setEmailReg] = React.useState("");
  const [pswReg, setPswReg] = React.useState("");
  const [emailAuth, setEmailAuth] = React.useState("");
  const [pswAuth, setPswAuth] = React.useState("");

  const handleOpenModal1 = () => {
    setOpenModal(true);
  };
  const theme = useAppSelector((state) => state.themeState.theme);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setOpened1(false);
      })
      .catch(() => alert("Invalid user!"));
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setOpened(false);
      })
      .catch(console.error);
  };

  const { isAuth, email } = useAuth();

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
            <Link to="/">
              <img
                src={MantineImg}
                className="w-28 rounded-full"
                style={{
                  width: "100px",
                  borderRadius: "10%",
                  marginRight: "10px",
                }}
              />
            </Link>
            <h1 className="font-bold text-6xl ml-4">Mantine</h1>
          </Group>

          <Group>
            <Menu shadow="md" width={300}>
              {isAuth && (
                <>
                  <IconUserCircle />
                  <p>{email}</p>
                </>
              )}
              <Menu.Target>
                <Button
                  variant="gradient"
                  gradient={{ from: "orange", to: "red" }}
                >
                  Меню
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                {!isAuth ? (
                  <>
                    <Menu.Label>Авторизация</Menu.Label>
                    <Menu.Item
                      onClick={() => setOpened(true)}
                      icon={<IconUser />}
                    >
                      Регистрация
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => setOpened1(true)}
                      icon={<IconUser />}
                    >
                      Войти в аккаунт
                    </Menu.Item>
                  </>
                ) : (
                  <>
                    <Menu.Label>Действия с аккаунтом</Menu.Label>
                    <Menu.Item
                      onClick={() => dispatch(removeUser())}
                      icon={<IconLogout />}
                    >
                      Выйти из аккаунта
                    </Menu.Item>
                  </>
                )}
                <Menu.Label>Разное</Menu.Label>
                <Menu.Item
                  onClick={() => dispatch(switchTheme())}
                  icon={theme === "light" ? <IconMoon /> : <IconSunHigh />}
                >
                  Сменить тему
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Link to="/cart">
              <Button
                variant="gradient"
                gradient={{ from: "orange", to: "red" }}
                mr={100}
                leftIcon={<IconShoppingCart />}
              >
                Корзина
              </Button>
            </Link>
          </Group>
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
          <Input
            placeholder="email"
            size="md"
            className="mb-2"
            value={emailReg}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setEmailReg(event.target.value)}
          />
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
          value={pswReg}
          onChange={(event) => setPswReg(event.target.value)}
          label="Введите свой пароль"
          placeholder="Пароль"
          required
        />
        <Group position="center" mt="xl">
          <Button
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            onClick={() => handleRegister(emailReg, pswReg)}
          >
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
          <Input
            value={emailAuth}
            onChange={(event: {
              target: { value: React.SetStateAction<string> };
            }) => setEmailAuth(event.target.value)}
            placeholder="email"
            size="md"
            className="mb-2"
          />
        </Input.Wrapper>
        <PasswordInput
          value={pswAuth}
          onChange={(e) => setPswAuth(e.target.value)}
          label="Введите свой пароль"
          placeholder="Пароль"
          required
        />
        <Group position="center" mt="xl">
          <Button
            onClick={() => handleLogin(emailAuth, pswAuth)}
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
          >
            Войти
          </Button>
        </Group>
      </Drawer>
    </MantineHeaeder>
  );
};

export default Header;
