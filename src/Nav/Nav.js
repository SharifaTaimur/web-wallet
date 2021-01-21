import React, { useEffect, useState } from "react";
import "./Nav.css";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h3 className="nav__heading">My Wallet</h3>
      <NotificationsIcon className="nav__avatar" style={{ fontSize: 30 }} />
    </div>
  );
};

export default Nav;
