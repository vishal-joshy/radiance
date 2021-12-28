import React, { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {}

function Header({}: Props): ReactElement {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const logo = "RADIANCE";

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>{logo}</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={splitLocation[1] === "" ? styles.activeLink : styles.link} to="/">
            General
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={splitLocation[1] === "video" ? styles.activeLink : styles.link}
            to="/video"
          >
            Video
          </Link>
        </li>
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
