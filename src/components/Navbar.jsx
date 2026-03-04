const Navbar = () => {
  return (
    <div className="border-b bg-base-100 sticky top-0 z-50">
      {/* 1400px Container */}
      <div className="max-w-[1400px] mx-auto navbar px-4 lg:px-0">
        <div className="navbar-start">
          {/* Mobile Menu (Dropdown) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          {/* Logo - Size increased to text-3xl */}
          <a className="text-2xl md:text-3xl font-bold cursor-pointer whitespace-nowrap">
            CS - <span className="text-[#7E3AF2]">Ticket System</span>
          </a>
        </div>

        <div className="navbar-end w-full">
          {/* Desktop Menu - Font size increased to text-base/lg */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-base text-gray-600">
              <li>
                <a className="hover:text-[#7E3AF2]">Home</a>
              </li>
              <li>
                <a className="hover:text-[#7E3AF2]">FAQ</a>
              </li>
              <li>
                <a className="hover:text-[#7E3AF2]">Changelog</a>
              </li>
              <li>
                <a className="hover:text-[#7E3AF2]">Blog</a>
              </li>
              <li>
                <a className="hover:text-[#7E3AF2]">Download</a>
              </li>
              <li>
                <a className="hover:text-[#7E3AF2]">Contact</a>
              </li>
            </ul>
          </div>
          {/* Button */}
          <button className="btn bg-[#7E3AF2] hover:bg-[#6c2bd9] text-white border-none ml-4 px-6 font-bold min-h-0 h-11">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
