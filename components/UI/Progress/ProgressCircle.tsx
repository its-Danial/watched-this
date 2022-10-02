import { FC } from "react";

type ProgressCircleProps = {
  percentage: number;
  size: "lg" | "sm";
};

const ProgressCircle: FC<ProgressCircleProps> = (props) => {
  const dashArray = Math.PI * 100;
  const dashOffset = Math.PI * (100 - props.percentage);

  const barColors = {
    low: { completed: "#db2360", remaining: "#571435" },
    medium: { completed: "#d2d531", remaining: "#423d0f" },
    high: { completed: "#21d07a", remaining: "#204529" },
    none: { completed: "#d4d4d4", remaining: "#666666" },
  };

  const getBarColor = (percentage: number) => {
    if (percentage >= 70) return "high";
    if (percentage >= 40) return "medium";
    if (percentage > 0) return "low";
    return "none";
  };

  return (
    <div className="h-full w-full relative bg-tmdbDarkBlue rounded-full flex justify-center items-center">
      <svg width="88%" height="88%" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="52.5%"
          cy="52.5%"
          r="50%"
          fill="transparent"
          // remaining
          stroke={barColors[getBarColor(props.percentage)].remaining}
          className="scale-95"
          strokeWidth={6}
          strokeDasharray={dashArray}
        />
        <circle
          cx="52.5%"
          cy="52.5%"
          r="50%"
          fill="transparent"
          // completed
          stroke={barColors[getBarColor(props.percentage)].completed}
          className="scale-95"
          strokeWidth={6}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      {/* <div className={`font-semibold absolute text-sm text-white ${props.percentage ? "left-[11px]" : ""}`}>
        {props.percentage ? (
          <>
            {Math.round(props.percentage)} <span className="absolute  -top-[5px]">%</span>
          </>
        ) : (
          <>Na</>
        )}
      </div> */}
      <div
        className={`font-semibold absolute text-white ${props.size === "lg" ? "text-2xl" : "text-sm"} ${
          props.percentage ? (props.size === "lg" ? "left-[15px]" : "left-[11px]") : ""
        }`}
      >
        {props.percentage ? (
          <>
            {Math.round(props.percentage)}
            <span className={`absolute ${props.size === "lg" ? "text-[10px]" : "text-[5px]"}  -top-[5px]`}>%</span>
          </>
        ) : (
          <>Na</>
        )}
      </div>
    </div>
  );
};
export default ProgressCircle;
