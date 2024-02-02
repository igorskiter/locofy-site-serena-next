import type { NextPage } from "next";
import { memo, type CSSProperties } from "react";
import styles from "./button.module.css";

type ButtonType = {

  theme?: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
  children?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
};

const Button: NextPage<ButtonType> = memo(
  ({ children, style, contentStyle, theme = 'style1' }) => {
    const buttonStyle = styles[theme];
    
    return (
      <div className={`${styles.button} ${buttonStyle}`} style={style}>
        <b className={styles.text} style={contentStyle}>
          {children}
        </b>
      </div>
    );
  }
);

export default Button;
