/* eslint-disable react/prop-types */
import logo from "../assets/Mosque.png";
const NavMenu = ({ routes }) => (
  <ul className="flex">
    {routes.map((route, i) => (
      <li key={i}>
        <a
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          href={route.href}
        >
          {route.name}
        </a>
      </li>
    ))}
  </ul>
);

const AuthNavMenu = () => (
  <ul className="mb-2 lg:mb-0">
    <li>
      <button className="bg-btn-color hover:bg-opacity-90 text-white  rounded transition py-3 px-8 font-normal mb-6 sm:mb-0 text-base">
        Donate Now
      </button>
    </li>
  </ul>
);

export default function Header() {
  const routes = [
    { name: "Home", href: "#", isActive: true },
    { name: "About", href: "#", isActive: false },
    { name: "Services", href: "#", isActive: false },
    { name: "Contact", href: "#", isActive: false },
  ];
  return (
    <div>
      <div className="ezy__nav4 py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
        <nav>
          <div className="container px-4">
            <div className="flex items-center justify-between">
              <a className="font-black text-3xl min-w-[33%]" href="/">
                <img src={logo} />
              </a>
              <button
                className="block lg:hidden cursor-pointer h-10 z-20"
                type="button"
                id="hamburger"
              >
                <div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
                <div className="h-0.5 w-7 bg-black dark:bg-white"></div>
                <div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
              </button>
              <div
                className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
                id="navbar"
              >
                <NavMenu routes={routes} />

                <AuthNavMenu />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
