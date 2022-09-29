import { FC } from "react";

type ProgressCircleProps = {
  percentage: number;
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
    <div className="h-[38px] w-[38px] bg-tmdbDarkBlue rounded-full flex justify-center items-center">
      <svg width="34px" height="34px" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
          fill="transparent"
          // remaining
          stroke={barColors[getBarColor(props.percentage)].remaining}
          className="scale-95"
          strokeWidth={6}
          strokeDasharray={dashArray}
        />
        <circle
          cx="52.5"
          cy="52.5"
          r="50"
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
      <div className={`font-semibold absolute text-sm text-white ${props.percentage ? "left-[11px]" : ""}`}>
        {props.percentage ? (
          <>
            {props.percentage} <span className="absolute text-[5px] -top-[5px]">%</span>
          </>
        ) : (
          <>Na</>
        )}
      </div>
    </div>
  );
};
export default ProgressCircle;
