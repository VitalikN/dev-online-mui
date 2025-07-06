"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import navButtonStyles from "@/components/ui/navButtonStyles";

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
      <Box
        sx={{
          display: "flex",
          gap: "35px",
          alignItems: "center",
        }}
      >
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
      </Box>
    </Box>
  );
};

export default Nav;
