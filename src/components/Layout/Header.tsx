import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import {separateSlash} from 'utilities/string';

function Header(): ReactElement {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const staticText = {
    logo: "RADIANCE",
    routes: [
      { text: "General", route: "/" },
      { text: "Stream", route: "/stream" },
      { text: "Display", route: "/display" },
      { text: "Video", route: "/video" },
      { text: "Audio", route: "/audio" },
      { text: "Subtitles", route: "/subtitles" },
    ],
  };


  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>{staticText.logo}</h1>
      <ul className={styles.ul}>
        {staticText.routes.map((route, index) => {
          return (
            <li key={index} className={styles.li}>
              <Link
                className={splitLocation[1] === separateSlash(route.route) ? styles.activeLink : styles.link}
                to={route.route}
              >
                {route.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const styles = {
  header: "flex justify-between",
  logo: "text-3xl",
  ul: "flex border-b",
  li: "-mb-px mr-1",
  activeLink:
    "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold",
  link: "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold",
};

export default Header;
