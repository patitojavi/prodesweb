import { NavLink } from "react-router-dom";

const Navbar = () => {
  const btnLink =
    "block inline-block py-1 hover:text-fuchsia-700 hover:text-accent cursos-pointer mr-4";
  const activeLink = "block inline-block py-1 text-accent mr-4";
  return (
    <header className="text-white bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            className="lg:h-12 md:h-36 w-full object-cover object-center"
            src="https://pillan.inf.uct.cl/~pbenavides/DesWeb/Assets/logoBecrux.png"
            alt="Logo"
          />

          <span className="ml-3 text-xl">Becrux</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Productos y servicios
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Quienes Somos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Contacto
          </NavLink>
        </nav>
        <nav>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Iniciar Sesion
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? activeLink : btnLink)}
          >
            Registrarse
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
