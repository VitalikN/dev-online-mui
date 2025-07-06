"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "27.2px",
  textAlign: "center",
  color: "#ffffff",
  width: "213px",
  height: "51px",
  borderRadius: "4px",
  padding: "12px 56px",
  border: "none",
  cursor: "pointer",
  opacity: 1,
  backgroundColor: theme.palette.primary.main,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default CustomButton;
