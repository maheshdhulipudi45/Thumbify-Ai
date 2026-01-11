// import { Outlet } from "react-router-dom";
// import SoftBackdrop from "../components/SoftBackdrop";
// import Lenis  from '../components/lenis';

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import LenisScroll from "../components/lenis";

// export default function Layout() {
//   return (
//     <>

//     <SoftBackdrop/>
//     <LenisScroll/>
//       <Navbar />

      
//       {/* Page Content */}
//       <main className="min-h-screen">
//         <Outlet />
//       </main>

//       <Footer />
//     </>
//   );
// }



import { Outlet, useLocation } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();
  const isAuthOpen = location.pathname === "/auth";

  return (
    <>
      {/* Global BG */}
      <SoftBackdrop />

      {/* Navbar always visible */}
      <Navbar />

      {/* ===== BACKGROUND CONTENT ===== */}
      <div
        className={`transition-all duration-300 ${
          isAuthOpen
            ? "blur-md brightness-75 pointer-events-none select-none"
            : ""
        }`}
      >
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* ===== AUTH MODAL OVERLAY ===== */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* modal */}
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
