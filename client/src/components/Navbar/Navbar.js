import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

function Navbar() {
  const location = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <nav className={styles.navbar}>

      {isAuth ? (
        <React.Fragment>
          <Link to="/home"> Главная </Link>
          <Link
            to={{ pathname: "/menu", state: { background: location } }}
          ></Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to="/" className={styles.main}></Link>
          <Link to="/login" className={styles.login}></Link>
          <Link to="/signup" className={styles.auth}></Link>
        </React.Fragment>
      )}
    </nav>
  );
}

export default Navbar;
