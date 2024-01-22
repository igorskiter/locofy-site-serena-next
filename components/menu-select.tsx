import type { NextPage } from "next";
import { memo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./menu-select.module.css";

const MenuSelect: NextPage = memo(() => {
  const router = useRouter();

  const onHomeClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Link className={styles.home} href="/" onClick={onHomeClick}>
      Home
    </Link>
  );
});

export default MenuSelect;
