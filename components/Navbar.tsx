import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useState, useCallback } from "react";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
        <img className="h-4 lg:h-7 " src="/images/logo.png" alt="logo netflix" />
        <div className="flex-row ml-8 hidden gap-7 lg:flex">
          <NavbarItem label="Acceuil" />
          <NavbarItem label="Séries" />
          <NavbarItem label="Films" />
          <NavbarItem label="Nouveautés les plus regardées" />
          <NavbarItem label="Ma liste" />
          <NavbarItem label="Par langues" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Naviguer</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="avatar profile" />
              <BsChevronDown className="text-white transition" />
              <AccountMenu visible />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
