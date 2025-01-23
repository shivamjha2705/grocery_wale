import { Tilt } from "react-tilt";

const TiltWrapper = ({ children, options, style, className }) => {
  // Default options for the tilt effect
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt
      options={{ ...defaultOptions, ...options }} // Merge default options with custom options
      style={style}
      className={className}
    >
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
