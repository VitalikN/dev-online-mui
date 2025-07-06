"use client";

import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import LocaleSwitcher from "./LocaleSwitcher"; // твій компонент перемикача

const LanguageButtonWithSwitcher = () => {
  const theme = useTheme();
  const [showSwitcher, setShowSwitcher] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleSwitcher = () => {
    setShowSwitcher((prev) => !prev);
  };

  // Закриваємо меню, якщо клік поза ним
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowSwitcher(false);
      }
    }
    if (showSwitcher) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSwitcher]);

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={ref}>
      <IconButton color="primary" onClick={toggleSwitcher}>
        <LanguageIcon
          sx={{
            fontSize: 48,
            color: theme.palette.primary.main,
            borderRadius: "4px",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.palette.primary.dark,
            },
          }}
        />
      </IconButton>

      {showSwitcher && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <LocaleSwitcher />
        </div>
      )}
    </div>
  );
};

export default LanguageButtonWithSwitcher;
