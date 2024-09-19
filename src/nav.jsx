import "./nav.css";

const Nav = () => {
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold">
              <span style={{ color: "#ff0000" }}>U</span>day&apos;s{" "}
              <span style={{ color: "#ff0000" }}>P</span>ortfolio
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#home"
              className="border-transparent hover:border-current inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-red-500"
            >
              Home
            </a>
            <a
              href="#skills"
              className="border-transparent hover:border-current inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-red-500"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="border-transparent hover:border-current inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-red-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border-transparent hover:border-current inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-red-500"
            >
              Contact Me
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                const mobileMenu = document.getElementById("mobile-menu");
                mobileMenu.classList.toggle("hidden");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="border-transparent hover:border-current block pl-3 pr-4 py-2 border-l-4 text-base font-medium hover:text-red-500"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Home
          </a>
          <a
            href="#skills"
            className="border-transparent hover:border-current block pl-3 pr-4 py-2 border-l-4 text-base font-medium hover:text-red-500"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Skills
          </a>
          <a
            href="#projects"
            className="border-transparent hover:border-current block pl-3 pr-4 py-2 border-l-4 text-base font-medium hover:text-red-500"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Projects
          </a>
          <a
            href="#contact"
            className="border-transparent hover:border-current block pl-3 pr-4 py-2 border-l-4 text-base font-medium hover:text-red-500"
            onClick={() =>
              document.getElementById("mobile-menu").classList.add("hidden")
            }
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
