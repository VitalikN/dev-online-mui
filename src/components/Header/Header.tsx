"use client";

import Nav from "../Nav/Nav";
import Logo from "./Logo";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomButton from "../ui/CustomButton";
import LanguageButtonWithSwitcher from "../LocaleSwitcher/LanguageButtonWithSwitcher";

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
            }}
          >
            <Logo />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "35px",
              }}
            >
              <Nav />

              <CustomButton>ЗВ’ЯЗАТИСЬ</CustomButton>

              <LanguageButtonWithSwitcher />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
