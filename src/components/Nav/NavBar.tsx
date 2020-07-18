import React, { useState, useEffect } from "react";
import { links } from "../../parameters/config";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../parameters/config";
import "./Nav.scss";

const NavBar = () => {
  const [history, setHistory] = useState<number[]>([]);
  const [update, setUpdate] = useState<boolean>(false);
  let [prevNumber, currentNumber] = history;
  const location = useLocation();

  if (history.length > 2) history.shift();

  const updateHistory = () => {
    routes.forEach((route, index: number) => {
      if (
        currentNumber === index ||
        (currentNumber === undefined && prevNumber === index)
      )
        return;

      if (route.path === location.pathname) setHistory((h) => [...h, index]);
    });
  };

  useEffect(() => updateHistory(), [history, update]);

  return (
    <nav className="nav">
      <ul className="nav__link-conteiner">
        {links.map((link) => (
          <li className="nav__item" key={link.id}>
            <NavLink
              exact
              to={link.pathname}
              className="nav__link"
              data-text={link.text}
              onClick={() => setUpdate(!update)}
            >
              {link.text}
            </NavLink>
            <span
              className={
                prevNumber > currentNumber && currentNumber === link.id
                  ? "nav__overlay nav__overlay--slide-left"
                  : "nav__overlay" &&
                    prevNumber > currentNumber &&
                    prevNumber === link.id
                  ? "nav__overlay nav__overlay--slide-left-hide"
                  : "nav__overlay" &&
                    prevNumber < currentNumber &&
                    currentNumber === link.id
                  ? "nav__overlay nav__overlay--slide-right"
                  : "nav__overlay" &&
                    prevNumber < currentNumber &&
                    prevNumber === link.id
                  ? "nav__overlay nav__overlay--slide-right-hide"
                  : "nav__overlay" &&
                    prevNumber === link.id &&
                    currentNumber === undefined
                  ? "nav__overlay nav__overlay--slide-left"
                  : "nav__overlay"
              }
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
