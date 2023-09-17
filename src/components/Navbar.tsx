import { AppBar, Container } from "@mui/material";
import { css } from "@emotion/react";
import { Logo } from "assets/icon";
import { AppRoutePath } from "router/types";

export const NAVBAR_HEIGHT = 74;
const styles = {
  root: css({
    padding: "0 32px",
    height: NAVBAR_HEIGHT,
    background: "white",
  }),
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const navItems = [
  {
    label: "Инвестици",
    path: AppRoutePath.Dashboard,
  },
  {
    label: "Франшизы",
    path: AppRoutePath.Dashboard,
  },
  {
    label: "Готовый бизнес",
    path: AppRoutePath.Dashboard,
  },
];

const Navbar = () => {
  return (
    <AppBar css={styles.root} color="primary" position="sticky">
      <Container>
        <Logo />
      </Container>
    </AppBar>
  );
};

export default Navbar;
