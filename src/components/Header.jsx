import Logo from "./Logo";
import hamburgerMenu from "../assets/menu/outline/menu-line-horizontal.svg";
import shoppingBag from "../assets/outline/shopping bag.svg";



function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <div className="flex">
          <img src={hamburgerMenu} alt="menu button" />
          <Logo />
        </div>
        <img src={shoppingBag} alt="shopping bag" />
      </div>
    </header>
  );
}

export default Header;
