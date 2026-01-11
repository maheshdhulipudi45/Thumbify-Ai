// import React from "react";

// const Auth = () => {
//   const [state, setState] = React.useState("login");

//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (state === "login") {
//       console.log("Login data:", formData);
//     } else {
//       console.log("Register data:", formData);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4">

//       {/* =========================
//          FORM CARD
//       ========================== */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md text-center bg-white/5 border border-white/10 rounded-2xl px-8 backdrop-blur-lg z-10"
//       >
//         <h1 className="text-white text-3xl mt-10 font-medium">
//           {state === "login" ? "Login" : "Sign up"}
//         </h1>

//         <p className="text-gray-400 text-sm mt-2">
//           Please sign in to continue
//         </p>

//         {/* NAME (only signup) */}
//         {state !== "login" && (
//           <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               className="text-white/60"
//               strokeWidth="2"
//             >
//               <circle cx="12" cy="8" r="5" />
//               <path d="M20 21a8 8 0 0 0-16 0" />
//             </svg>

//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="w-full bg-transparent text-white placeholder-white/60 outline-none"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}

//         {/* EMAIL */}
//         <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="text-white/75"
//             strokeWidth="2"
//           >
//             <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
//             <rect x="2" y="4" width="20" height="16" rx="2" />
//           </svg>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             className="w-full bg-transparent text-white placeholder-white/60 outline-none"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* PASSWORD */}
//         <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="14"
//             height="14"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             className="text-white/75"
//             strokeWidth="2"
//           >
//             <rect width="18" height="11" x="3" y="11" rx="2" />
//             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//           </svg>

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full bg-transparent text-white placeholder-white/60 outline-none"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* FORGOT */}
//         {state === "login" && (
//           <div className="mt-4 text-left">
//             <button
//               type="button"
//               className="text-sm text-indigo-400 hover:underline"
//             >
//               Forgot password?
//             </button>
//           </div>
//         )}

//         {/* SUBMIT */}
//         <button
//           type="submit"
//           className="mt-4 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition"
//         >
//           {state === "login" ? "Login" : "Sign up"}
//         </button>

//         {/* SWITCH */}
//         <p
//           onClick={() =>
//             setState((prev) => (prev === "login" ? "register" : "login"))
//           }
//           className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
//         >
//           {state === "login"
//             ? "Don't have an account?"
//             : "Already have an account?"}
//           <span className="text-indigo-400 hover:underline ml-1">
//             Click here
//           </span>
//         </p>
//       </form>

//       {/* =========================
//          SOFT BACKDROP (GLOBAL BG)
//       ========================== */}
//       {/* <div className="fixed inset-0 -z-10 pointer-events-none">
//         <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[60rem] h-[30rem] bg-gradient-to-tr from-indigo-800/35 to-transparent rounded-full blur-3xl" />
//         <div className="absolute right-12 bottom-12 w-[26rem] h-[14rem] bg-gradient-to-bl from-indigo-700/35 to-transparent rounded-full blur-2xl" />
//       </div> */}
//     </div>
//   );
// };

// export default Auth;



import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState("login");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state === "login") {
      console.log("Login data:", formData);
      // success → navigate("/generate")
    } else {
      console.log("Register data:", formData);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">

      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="absolute -top-10 right-0 text-white/60 hover:text-white transition"
        aria-label="Close"
      >
        ✕
      </button>

      {/* =========================
         FORM CARD
      ========================== */}
      <form
        onSubmit={handleSubmit}
        className="w-full text-center bg-white/5 border border-white/10 rounded-2xl px-8 backdrop-blur-lg"
      >
        <h1 className="text-white text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Please sign in to continue
        </p>

        {/* NAME (signup only) */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white placeholder-white/60 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* EMAIL */}
        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>

          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-indigo-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* FORGOT */}
        {state === "login" && (
          <div className="mt-4 text-left">
            <button
              type="button"
              className="text-sm text-indigo-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-linear-to-r from-pink-500 to-indigo-500 transition"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        {/* SWITCH */}
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-indigo-400 hover:underline ml-1">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
