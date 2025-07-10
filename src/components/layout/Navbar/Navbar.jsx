import Logo from "../../Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavLinks from "./NavLinks";
import HorizontalRule from "./HorizontalRule";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-12 md:py-0 lg:pt-20 ps-12 md:ps-20 lg:ps-32">
      <Logo />
      <HorizontalRule />
      <BurgerMenu />
      <NavLinks />
    </nav>
  );
}
