const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and About Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 italic tracking-tight">
              CS — Ticket System
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Our Customer Support Ticket System provides a seamless way to
              track, manage, and resolve client issues efficiently. Built for
              high-performance teams to ensure no customer query goes
              unanswered.
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
                Contact Sales
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

          {/* Information & Socials */}
          <div>
            <h4 className="font-bold text-lg mb-6">Information</h4>
            <ul className="text-gray-400 text-sm space-y-4 mb-8">
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

            <h4 className="font-bold text-lg mb-4">Social Links</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  X
                </span>{" "}
                @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                  in
                </span>{" "}
                @CS — Ticket System
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
              >
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
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

        {/* Copyright Section Updated */}
        <div className="text-center text-gray-500 text-xs mt-16 pt-8 border-t border-gray-800">
          <p>© 2026 CS — Ticket System. All rights reserved.</p>
          <p className="mt-2">
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
