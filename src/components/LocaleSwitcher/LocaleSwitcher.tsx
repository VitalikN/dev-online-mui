"use client";

import { usePathname, useRouter, Locale } from "@/i18n/routing";
import { useParams } from "next/navigation";

import CustomButton from "@/components/ui/CustomButton";
import { Box } from "@mui/material";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onLocaleChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error — типовий виняток із next-intl
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "flex-start",
      }}
    >
      <CustomButton
        onClick={() => onLocaleChange("en")}
        sx={{
          maxWidth: "40px",
          maxHeight: "30px",
          padding: "15px",
          minWidth: "unset",
          fontSize: "14px",
          lineHeight: "1",
        }}
      >
        En
      </CustomButton>
      <CustomButton
        onClick={() => onLocaleChange("uk")}
        sx={{
          maxWidth: "40px",
          maxHeight: "30px",
          padding: "10px",
          minWidth: "unset",
          fontSize: "14px",
          lineHeight: "1",
        }}
      >
        Укр
      </CustomButton>
    </Box>
  );
};

export default LocaleSwitcher;
