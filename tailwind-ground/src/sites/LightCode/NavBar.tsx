import { useState } from "react";

const tabs = [
  {
    href: "#home",
    text: "Home",
  },
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "#testimonial",
    text: "Testimonial",
  },
  {
    href: "#pricing",
    text: "Pricing",
  },
  {
    href: "#blog",
    text: "Blog",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="container flex justify-between items-center">
        <div className="w-20 py-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-color-white">Light</span>
            Code
          </a>
        </div>
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            {tabs.map((e) => (
              <li
                key={e.href}
                className="hover:text-color-secondary ease-in duration-200"
              >
                <a href={e.href}>{e.text}</a>
              </li>
            ))}
            <li>
              <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                free trial
              </button>
            </li>
          </ul>
          <div
            className="lg:hidden cursor-pointer relative z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i
              className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>

          {isMenuOpen && (
            <div className="bg-color-primary-dark h-[100vh] absolute inset-0">
              <ul className="h-full grid place-items-center py-20">
                {tabs.map((e) => (
                  <li
                    key={e.href}
                    className="hover:text-color-secondary ease-in duration-200"
                  >
                    <a href={e.href} onClick={handleClick}>
                      {e.text}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                    free trial
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
