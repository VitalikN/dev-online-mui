"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Box, Stack, Button } from "@mui/material";
import navButtonStyles from "@/styles/navButtonStyles";

type NavProps = {
  closeMenu?: () => void;
};

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const t = useTranslations("Navigation");

  const handleLinkClick = () => {
    closeMenu?.();
  };

  const navItems = [
    { label: t("About"), href: "#About" },
    { label: t("Portfolio"), href: "#Portfolio" },
    { label: t("Prices"), href: "#Prices" },
    { label: t("FAQ"), href: "#FAQ" },
  ];

  return (
    <Box component="nav">
      <Stack direction="row" spacing={2}>
        {navItems.map(({ label, href }) => (
          <Button
            key={href}
            component={Link}
            href={href}
            onClick={handleLinkClick}
            sx={navButtonStyles}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Nav;
