
// import { MenuIcon, XIcon } from "lucide-react";
// import { PrimaryButton } from "./Buttons";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { href, Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Generate", href: "/generate" },
//     { name: "Community", href: "/community" },
//     {name:"Contact",href:"/contact"}
//   ];

//   return (
//     <motion.nav
//       className="fixed top-5 left-0 right-0 z-50 px-4"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 250, damping: 70 }}
//     >
//       <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
//         <Link to="/">
//           <img src="/thumbifyai-logo.svg" alt="logo" className="h-9" />
//         </Link>

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
//           {navLinks.map((link) => (
//             <Link
//               to={link.href}
//               key={link.name}
//               className="hover:text-white transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center gap-3   text-white">
//           <PrimaryButton
//             onClick={() => navigate("/auth")}
//             className="max-sm:text-xs hidden sm:inline-block  bg-linear-to-r from-pink-500 to-indigo-500 text-white  "
//           >
//             Get Started
//           </PrimaryButton>
//         </div>

//         <button onClick={() => setIsOpen(true)} className="md:hidden">
//           <MenuIcon className="size-6" />
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             to={link.href}
//             onClick={() => setIsOpen(false)}
//           >
//             {link.name}
//           </Link>
//         ))}

//         <PrimaryButton
//           onClick={() => {
//             setIsOpen(false);
//             navigate("/auth");
//           }}    className="max-sm:text-xs hidden sm:inline-block  bg-linear-to-r from-pink-500 to-indigo-500 text-white  "
//         >
//           Get Started
//         </PrimaryButton>

//         <button
//           onClick={() => setIsOpen(false)}
//           className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
//         >
//           <XIcon />
//         </button>
//       </div>
//     </motion.nav>
//   );
// }

import { MenuIcon, XIcon } from "lucide-react";
import { PrimaryButton } from "./Buttons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();

 const navLinks = user
  ? [
      { name: "Home", href: "/" },
      { name: "Generate", href: "/generate" },
      { name: "My Generations", href: "/mygenerations" },
      { name: "Community", href: "/community" },
    ]
  : [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Generate", href: "/generate" },
      { name: "Contact", href: "/contact" },
    ];


  // 🔐 Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 70 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
        {/* LOGO */}
        <Link to="/">
          <img src="/thumbifyai-logo.svg" alt="logo" className="h-9" />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              className="hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-3 text-white relative">
          {!user ? (
            <PrimaryButton
              onClick={() => navigate("/auth")}
              className="bg-linear-to-r from-pink-500 to-indigo-500"
            >
              Get Started
            </PrimaryButton>
          ) : (
            <>
              {/* AVATAR */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative group w-11 h-11 rounded-full 
                           bg-gradient-to-br from-pink-500 to-indigo-500
                           flex items-center justify-center 
                           font-bold uppercase text-white
                           ring-2 ring-white/20
                           hover:ring-indigo-400/70
                           transition-all duration-300"
              >
                {user.email.charAt(0)}

                {/* Glow */}
                <span
                  className="absolute inset-0 rounded-full 
                             bg-indigo-500/30 blur-md 
                             opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"
                />
              </button>

              {/* DROPDOWN */}
              {dropdownOpen && (
                <div
                  className="absolute right-0 top-16 w-52 
                             rounded-2xl overflow-hidden
                             bg-black/60 backdrop-blur-xl
                             border border-white/10
                             shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                             animate-scaleIn"
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-xs text-gray-400">Signed in as</p>
                    <p className="text-sm text-white truncate font-medium">
                      {user.email}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left text-sm
                               text-red-400 hover:text-red-300
                               hover:bg-white/5 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* MOBILE ICON */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg font-medium 
                    fixed inset-0 bg-black/40 backdrop-blur-md z-50 
                    transition-all duration-300 ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {!user ? (
          <PrimaryButton
            onClick={() => {
              setIsOpen(false);
              navigate("/auth");
            }}
            className="bg-linear-to-r from-pink-500 to-indigo-500"
          >
            Get Started
          </PrimaryButton>
        ) : (
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="text-red-400 text-lg"
          >
            Logout
          </button>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}
