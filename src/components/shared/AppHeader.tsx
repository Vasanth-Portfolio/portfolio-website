import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import logoDark from "../../images/logo.png";
import logoLight from "../../images/logo_dark.png";
import { motion } from "framer-motion";

interface NavLink {
  path: string;
  label: string;
  ariaLabel: string;
}

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const location = useLocation();

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  const navLinks: NavLink[] = [
    { path: "/", label: "Home", ariaLabel: "Home" },
    { path: "/projects", label: "Projects", ariaLabel: "Projects" },
    { path: "/about", label: "About Me", ariaLabel: "About Me" },
    { path: "/contact", label: "Contact", ariaLabel: "Contact" },
  ];

  const filteredLinks = navLinks.filter(
    (link) => link.path !== location.pathname
  );

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link to="/">
              {activeTheme === "dark" ? (
                <img src={logoDark} className="w-36" alt="Dark Logo" />
              ) : (
                <img src={logoLight} className="w-36" alt="Dark Logo" />
              )}
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-yellow-400 hover:text-yellow-300 text-xl" />
            )}
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          {filteredLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 ${
                index > 0
                  ? "border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                  : ""
              }`}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          {filteredLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
            aria-label="Theme Switcher"
            className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <div className="bg-yellow-100 hover:bg-yellow-200 transition-colors duration-200">
                <FiSun className="text-yellow-500 text-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
