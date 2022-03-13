import { BsFillTerminalFill, BsGithub, BsMoonFill, BsSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";
import Link from "next/link";
import HamburgerIcon from "../Icons/HamburgerIcon";
import { useMobileNavMenu } from "../../context/MobileNavMenu";

export default function Header() {
  const { setTheme, theme } = useTheme();
  const { onOpen } = useMobileNavMenu();

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const themeIconsProps = {
    className: "s-svg dark:text-slate-400 dark:hover:text-white text-gray-500 hover:text-gray-900",
    size: 18,
  };

  return (
    <header className="bg-white dark:bg-slate-900 px-4 py-2 h-12 flex items-center justify-between border-b-gray-300">
      <div className="flex flex-row items-center">
        <BsFillTerminalFill className="mr-2 text-primary dark:text-gray-300" />
        <h3 className="text-slate-900 dark:text-white"> Francisco5g </h3>
      </div>

      <HamburgerIcon onOpen={onOpen} />

      <div className="hidden md:flex md:items-center">
        <div className="text-slate-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
          <Link href="/">
            <a className="">
              <strong> Projetos </strong>
            </a>
          </Link>
        </div>

        <div className="w-[1px] h-5 bg-gray-300 dark:bg-slate-700 md:mx-6" />

        <div className="flex justify-center md:justify-between w-14">
          {/* prettier-ignore */}
          <button onClick={handleToggleTheme} >
            {theme === "dark" ? <BsSunFill {...themeIconsProps} /> : <BsMoonFill {...themeIconsProps} />}
          </button>

          <Link passHref href="#">
            <a target="_blank">
              <BsGithub className="text-gray-500 dark:text-slate-400 dark:hover:text-white hover:text-gray-900" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
