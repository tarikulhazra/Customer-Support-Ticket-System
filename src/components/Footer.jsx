const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and Description */}
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-6">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Our Mission
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact Select
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer transition">
              Products & Services
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Customer Stories
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Download Apps
            </li>
          </ul>
        </div>

        {/* Information & Social Links */}
        <div>
          <h4 className="font-bold text-lg mb-6">Information</h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Join Us
            </li>
          </ul>

          <h4 className="font-bold text-lg mt-8 mb-6">Social Links</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <span>🌐</span> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              <span>🌐</span> @CS — Ticket System
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-xs mt-16 pt-8 border-t border-gray-800">
        © 2023 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
