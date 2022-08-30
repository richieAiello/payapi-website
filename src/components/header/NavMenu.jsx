import { NavLink } from 'react-router-dom';

const NavMenu = ({ className, onClick }) => {
  return (
    <div
      className={`
        h-screen w-[min(100%,300px)] bg-dark-blue absolute top-0 right-0 z-20
        before:h-[1px] before:w-[calc(100%-3rem)] before:bg-water-white before:opacity-[15%] before:mt-24 
        before:mb-10 before:mx-auto before:block md:before:hidden md:w-full md:h-max md:bg-transparent md:static md:block
        ${className}
      `}
    >
      <ul
        className="text-[rgba(251,252,254,.7)] font-bold text-[1.25rem] leading-6 text-center grid gap-y-8 h-max
          md:grid-flow-col md:gap-x-10 md:text-[rgba(54,83,107,.7)] md:w-max md:ml-auto"
      >
        <li>
          <NavLink to="/" className="link--nav" onClick={onClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className="link link--nav"
            onClick={onClick}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="link link--nav"
            onClick={onClick}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="link link--nav"
            onClick={onClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
