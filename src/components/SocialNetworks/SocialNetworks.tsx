import { IconButton, Stack } from "@mui/material";
import SvgIcon from "../SvgIcon/SvgIcon";
import Link from "next/link";

const networks = [
  {
    id: "instagram",
    href: "https://www.instagram.com/vitaliknozhenko",
    // color:
    background: `radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      )`,
  },

  {
    id: "facebook",
    href: "https://www.facebook.com/vitaliknozhenko",
    color: "#1877F2",
  },
  {
    id: "tictok",
    href: "https://www.tiktok.com/@vitaliknozhenko",
    color: "#000000",
  },
];

const SocialNetworks = () => {
  return (
    <Stack direction="row" spacing={2}>
      {networks.map(({ id, href, color }) => (
        <Link href={href} target="_blank" key={id}>
          <IconButton
            sx={{
              backgroundColor: color,
              color: "#fff",
              width: 40,
              height: 40,
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <SvgIcon id={id} width={24} height={24} />
          </IconButton>
        </Link>
      ))}
    </Stack>
  );
};

export default SocialNetworks;
