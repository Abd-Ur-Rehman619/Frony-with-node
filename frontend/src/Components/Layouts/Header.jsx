import { Link, NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Icon from "../../assets/icon.png";
import Cart from "../../assets/Cart.png";

import styles from "../StylingFiles/header.module.css";
import { Clear, Menu } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLog } from "../../store/cartSlice";

export default function Header() {
  const Log = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function logoutHandler() {
    localStorage.removeItem("token");
    dispatch(changeLog());
  }

  const content = (
    <div className="flex flex-col justify-between absolute top-16 left-0 right-0 w-full z-20 h-96 bg-slate-500 translate-x-1 lg:hidden">
      <div className="flex justify-around items-center p-3">
        {" "}
        {Log && (
          <>
            <Link to="/cart">
              <IconButton>
                <img src={Cart} alt="Custom Icon" />
              </IconButton>
            </Link>
            <button onClick={logoutHandler} className={styles.mobileNav}>
              LogOut
            </button>
          </>
        )}
      </div>

      <nav className="flex flex-col justify-center items-center mb-6">
        <NavLink to="/" className={styles.mobileNav}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.mobileNav}>
          About
        </NavLink>
        {!Log ? (
          <>
            <NavLink to="/signup" className={styles.mobileNav}>
              SignUp
            </NavLink>
            <NavLink to="/login" className={styles.mobileNav}>
              Login
            </NavLink>
          </>
        ) : (
          <NavLink to="/orders" className={styles.mobileNav}>
            Orders
          </NavLink>
        )}
      </nav>
    </div>
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.dashboardDiv}>
          <Link to="/">
            <div className={styles.navDiv}>FORNY</div>
          </Link>

          <nav className="hidden lg:flex lg:space-x-4 lg:gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLinks
              }
            >
              About
            </NavLink>
            {!Log ? (
              <>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.navLinks
                  }
                >
                  SignUp
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.navLinks
                  }
                >
                  Login
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLinks
                }
              >
                Orders
              </NavLink>
            )}
          </nav>

          <div className={styles.textFieldDiv}>
            <div>
              <TextField
                hiddenLabel
                size={"small"}
                className="bg-[#F5F5F5]"
                placeholder="What are you looking for?"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <img src={Icon} alt="Custom Icon" />
                    </IconButton>
                  ),
                }}
              />
            </div>

            <div className="hidden lg:items-center lg:flex ">
              {Log && (
                <>
                  <Link to="/cart" className={styles.cartWishLinks}>
                    <IconButton>
                      <img src={Cart} alt="Custom Icon" />
                    </IconButton>
                  </Link>
                  <button onClick={logoutHandler} className={styles.navLinks}>
                    LogOut
                  </button>
                </>
              )}
            </div>
          </div>

          {/* <div className="block md:hidden">{isMenuOpen && content}</div> */}
          {isMenuOpen && content}

          <div className={styles.menu}>
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Clear style={{ width: "2rem", height: "2rem" }} />
              ) : (
                <Menu style={{ width: "2rem", height: "2rem" }} />
              )}
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
}
