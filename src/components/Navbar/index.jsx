import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopingCardContext } from "../../context";

function Navbar() {
  const context = useContext(ShopingCardContext);
  const isActiveStyle = "underline font-bold underline-offset-4";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-4 items-center h-16">
          <div className="flex items-center space-x-4 ">
            <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-indigo-500">
              Tienda
            </NavLink>

            <ul className="flex space-x-2">
              <li className="text-black py-1 hover:underline underline-offset-4">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? isActiveStyle : "";
                  }}
                >
                  All
                </NavLink>
              </li>
              <li className="text-black py-1 hover:underline underline-offset-4">
                <NavLink
                  to="/clothes"
                  className={({ isActive }) => {
                    return isActive ? isActiveStyle : "";
                  }}
                >
                  Clothes
                </NavLink>
              </li>
              <li className="text-black py-1 hover:underline underline-offset-4">
                <NavLink
                  to="/electronics"
                  className={({ isActive }) => {
                    return isActive ? isActiveStyle : "";
                  }}
                >
                  Electronics
                </NavLink>
              </li>
              <li className="text-black py-1 hover:underline underline-offset-4">
                <NavLink
                  to="/toys"
                  className={({ isActive }) => {
                    return isActive ? isActiveStyle : "";
                  }}
                >
                  Toys
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex ml-auto space-x-8">
            <a
              href="mail:javier@gmail.com"
              className="text-gray-600 hover:text-indigo-500 font-medium"
            >
              javier@gmail.com
            </a>
            <NavLink to="/my-account" className="text-gray-600 hover:text-indigo-500 font-medium">
              Account
            </NavLink>

            <NavLink to="/my-orders" className="text-gray-600 hover:text-indigo-500 font-medium">
              Orders
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/cart" className="relative text-lg text-gray-600 hover:text-indigo-500">
              🛒
              <span className="absolute top-[-9px] right-0 text-[10px] w-4 h-4 flex justify-center items-center bg-black text-white rounded-full">
                {context.cart}
              </span>
            </NavLink>
           
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="menu-toggle"
              className="text-gray-600 hover:text-indigo-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="hidden md:hidden bg-gray-100">
        <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          Inicio
        </a>
        <a href="#products" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          Productos
        </a>
        <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          Nosotros
        </a>
        <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          Contacto
        </a>
        <a href="#cart" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          🛒 Carrito
        </a>
        <a href="#profile" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">
          👤 Perfil
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
