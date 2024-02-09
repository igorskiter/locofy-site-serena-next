import PropTypes from "prop-types";
import { CSSProperties } from "react";

const VerticalProgressBar = ({ percentage }) => {
  const progressBarStyle: CSSProperties = {
    width: `10px`,
    minHeight: "100%",
    background: "#f0f0f0",
    position: "relative",
    borderRadius: "6px",
    overflow: "hidden",
    border: '1px solid #D9D9D9' ,
  };

  const fillStyle: CSSProperties = {
    width: "100%",
    height: `${percentage}%`,
    background: "#00C5C0", // Cor de preenchimento da barra de progresso
    position: "absolute",
    bottom: 0,
    transition: "height 0.5s ease"// Adiciona uma transição suave na altura
  };

  return (
    <div style={progressBarStyle}>
      <div style={fillStyle}></div>
    </div>
  );
};

VerticalProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default VerticalProgressBar;
