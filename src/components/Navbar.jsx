const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 lg:px-12 border-b">
      <div className="flex-1">
        <a className="text-xl font-bold">CS - Ticket System</a>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 hidden lg:flex text-gray-500 text-sm">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        <button className="btn bg-[#7E3AF2] hover:bg-[#6c2bd9] text-white btn-sm px-5">+ New Ticket</button>
      </div>
    </div>
  );
};
export default Navbar;