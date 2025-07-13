import Link from "next/link";
// import Logo from "../Header/Logo";
import Nav from "../Nav/Nav";
import CustomButton from "../ui/CustomButton";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import { IconButton } from "@mui/material";
import SvgIcon from "../SvgIcon/SvgIcon";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <div>
          <Link href="tel:+380932344567">
            <IconButton
              sx={{
                backgroundColor: "#1877F2",
                color: "#fff",
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              <SvgIcon id="phone" width={24} height={24} />
            </IconButton>
            <span>+380 93 234 45 67</span>
          </Link>

          <SocialNetworks />
        </div>
        <Nav />
        <CustomButton>ЗВ’ЯЗАТИСЬ</CustomButton>
      </div>
    </footer>
  );
};

export default Footer;
