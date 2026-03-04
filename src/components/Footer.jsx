const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* 1. Logo and About Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 italic tracking-tight">
              CS — Ticket System
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              Our Customer Support Ticket System provides a seamless way to
              track, manage, and resolve client issues efficiently.
            </p>
          </div>

          {/* 2. Company Links */}
          <div>
            <h4 className="font-bold text-base mb-6">Company</h4>
            <ul className="text-gray-400 text-sm space-y-4">
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact Sales
              </li>
            </ul>
          </div>

          {/* 3. Services Links */}
          <div>
            <h4 className="font-bold text-base mb-6">Services</h4>
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

          {/* 4. Information List (Moved to Left of Socials) */}
          <div>
            <h4 className="font-bold text-base mb-6">Information</h4>
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
          </div>

          {/* 5. Social Links (Last Column) */}
          <div>
            <h4 className="font-bold text-base mb-6">Social Links</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold italic">
                  X
                </span>{" "}
                @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold italic">
                  in
                </span>{" "}
                @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold italic">
                  f
                </span>{" "}
                @CS — Ticket System
              </a>
              <a
                href="mailto:support@cst.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="text-lg">✉</span> support@cst.com
              </a>
            </div>
          </div>
        </div>

        {/* Inline Copyright and Developed By Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-500 text-xs mt-16 pt-8 border-t border-gray-800">
          <p>© 2026 CS — Ticket System. All rights reserved.</p>
          <span className="hidden md:block">|</span>
          <p>
            Developed by{" "}
            <a
              href="https://weborbido.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              Web Orbido
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
