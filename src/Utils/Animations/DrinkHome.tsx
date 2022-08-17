import { animated, useSpring, useSpringRef, useChain } from "react-spring";
import StrawHome from "./StrawHome";

const DrinkHome = () => {
  const animationLineMap = {
    full: { x1: "20", x2: "105", y1: "40.5", y2: "40.5" },
    empty: { x1: "28.9963", x2: "96.0038", y1: "131", y2: "131" },
  };

  const drinkRef = useSpringRef();
  const strawRef = useSpringRef();

  const drinkProps = useSpring({
    from: { ...animationLineMap.empty },
    to: { ...animationLineMap.full },
    config: { duration: 600 },
    ref: drinkRef,
  });
  const strawProps = useSpring({
    from: { opacity: 0, transform: "translate(-50%, -100%)" },
    to: { opacity: 1, transform: "translate(-50%, -50%)" },
    config: { duration: 500 },
    ref: strawRef,
  });

  useChain([drinkRef, strawRef]);

  return (
    <div className="relative w-min">
      <animated.div
        style={strawProps}
        className="absolute top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2"
      >
        <StrawHome />
      </animated.div>
      <svg
        width="125"
        height="151"
        viewBox="0 0 125 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M124.737 1.11837C124.808 0.523371 124.343 0 123.744 0H1.00014C0.399625 0 -0.0654635 0.525548 0.00756371 1.12161L16.7559 137.824C17.6775 145.347 24.0657 151 31.6446 151H93.552C101.15 151 107.547 145.32 108.447 137.775L124.737 1.11837ZM105.886 15.1025C105.947 14.5128 105.484 14 104.892 14H19.1115C18.5175 14 18.0545 14.5146 18.117 15.1053L30.9292 136.105C30.9831 136.614 31.4122 137 31.9237 137H92.4257C92.9383 137 93.3679 136.612 93.4204 136.102L105.886 15.1025Z"
          fill="#E85A4F"
        />
        <animated.line
          x1={drinkProps.x1}
          y1={drinkProps.y1}
          x2={drinkProps.x2}
          y2={drinkProps.y2}
          stroke="#E85A4F"
          strokeWidth="13"
        />
      </svg>
    </div>
  );
};

export default DrinkHome;
