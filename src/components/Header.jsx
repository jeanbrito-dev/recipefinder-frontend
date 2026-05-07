import { NavLink } from "react-router";
import logo from "../assets/images/logo.svg";

function linkClass({ isActive }) {
  return isActive
    ? "text-black underline underline-offset-4 decoration-orange-300 decoration-2"
    : "text-black/50 hover:text-gray-800";
}

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 shadow">
      {/* Logo */}
      <a href="/" className="shrink-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Navegação */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center gap-8 font-nunito">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/recipes" className={linkClass}>
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Botão */}
      <button
        className="
            shrink-0
            bg-gray-800
            text-white
            px-4
            py-2
            rounded
            font-nunito
            cursor-pointer
            hover:bg-black
            transition-colors
        "
      >
        Browse recipes
      </button>
    </header>
  );
}
