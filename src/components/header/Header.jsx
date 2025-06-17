// import React from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = ({ isAuth }) => {
//   return (
//     <header>
//       <div className="logo">E-Learning</div>

//       <div className="link">
//         <Link to={"/"}>Home</Link>
//         <Link to={"/courses"}>Courses</Link>
//         <Link to={"/about"}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"}>Account</Link>
//         ) : (
//           <Link to={"/login"}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./header.css";

// const Header = ({ isAuth }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="logo">E-Learning</div>
//       <button
//         className="menu-toggle"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         ☰
//       </button>

//       <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
//         <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
//         ) : (
//           <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Header = ({ isAuth }) => {
//   return (
//     <header>
//       <div className="logo">E-Learning</div>

//       <div className="link">
//         <Link to={"/"}>Home</Link>
//         <Link to={"/courses"}>Courses</Link>
//         <Link to={"/about"}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"}>Account</Link>
//         ) : (
//           <Link to={"/login"}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./header.css";

// const Header = ({ isAuth }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="logo">E-Learning</div>
//       <button
//         className="menu-toggle"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         ☰
//       </button>

//       <nav className={nav-links ${menuOpen ? "open" : ""}}>
//         <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
//         <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
//         ) : (
//           <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">E-Learning</div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
        <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
        {isAuth ? (
          <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
        ) : (
          <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
