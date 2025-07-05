import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Nav from "../Nav/Nav";
import Logo from "./Logo";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              py: 2,
            }}
          >
            <Logo />
            <Nav />
            <LocaleSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
