import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./menu.module.css";

type MenuType = {
  about?: string;

  /** Style props */
  aboutLetterSpacing?: CSSProperties["letterSpacing"];

  /** Action props */
  onAboutTextClick?: () => void;
};

const Menu: NextPage<MenuType> = memo(
  ({ about, onAboutTextClick, aboutLetterSpacing }) => {
    const aboutStyle: CSSProperties = useMemo(() => {
      return {
        letterSpacing: aboutLetterSpacing,
      };
    }, [aboutLetterSpacing]);

    return (
      <Link
        className={styles.about}
        href="/about-us"
        onClick={onAboutTextClick}
        style={aboutStyle}
      >
        {about}
      </Link>
    );
  }
);

export default Menu;
