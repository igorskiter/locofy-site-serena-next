'use client'
 
import { usePathname } from 'next/navigation';

import type { NextPage } from "next";
import Link from "next/link";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./menu.module.css";

type MenuType = {
  name?: string;
  pathMenu: string;

  /** Style props */
  aboutLetterSpacing?: CSSProperties["letterSpacing"];

  /** Action props */
  onClick?: () => void;
  selected?: boolean;
};

const Menu: NextPage<MenuType> = memo(
  ({ name, onClick, aboutLetterSpacing, pathMenu }) => {
    const pathname = usePathname()
    const aboutStyle: CSSProperties = useMemo(() => {
      return {
        letterSpacing: aboutLetterSpacing,
      };
    }, [aboutLetterSpacing]);

    const classNameMenu = pathname === pathMenu
      ? `${styles.menu} ${styles.selected}`
      : styles.menu;

    return (
      <Link
        className={classNameMenu}
        href={pathMenu}
        onClick={onClick}
        style={aboutStyle}
      >
        {name}
      </Link>
    );
  }
);

export default Menu;
