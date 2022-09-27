import { createRef, FC, RefObject, useLayoutEffect, useRef, useState } from "react";

type SwitchProps = {
  optionTitles: string[];
  onToggle: (pickedOptionTitle: string) => void;
};

type Selector = {
  isToggled: boolean;
  optionTitle: string;
  width: number | undefined;
};

const Switch: FC<SwitchProps> = (props) => {
  const [selectors, setSelectors] = useState<Selector[]>([]);
  const [currentToggled, setCurrentToggled] = useState<Selector & { index: number; offsetLeft: number }>({
    index: 0,
    isToggled: true,
    optionTitle: props.optionTitles[0],
    width: 110,
    offsetLeft: 0,
  });
  const selectorItemRef = useRef<RefObject<HTMLDivElement>[]>(props.optionTitles.map(() => createRef()));

  useLayoutEffect(() => {
    if (selectors.length >= props.optionTitles.length) {
      return;
    }
    props.optionTitles.map((optionName, index) => {
      setSelectors((prevState) => [
        ...prevState,
        {
          isToggled: index === 0 ? true : false,
          optionTitle: optionName,
          width: 110,
        },
      ]);
    });
  }, []);

  const handlerToggleClick = (sectorIndex: number) => {
    let data = selectors;
    data.forEach((selector) => {
      selector.isToggled = false;
      selector.width = selectorItemRef.current[sectorIndex].current?.offsetWidth;
    });
    data[sectorIndex].isToggled = true;

    props.onToggle(data[sectorIndex].optionTitle);

    setCurrentToggled({
      index: sectorIndex,
      ...data[sectorIndex],
      offsetLeft: selectorItemRef.current[sectorIndex].current?.offsetLeft as number,
    });
    setSelectors(data);
  };

  return (
    <div className="relative z-[1] h-8 border border-solid border-tmdbDarkBlue rounded-[30px] font-medium flex items-center">
      {selectors.map((sector, index) => (
        <div
          key={index}
          ref={selectorItemRef.current[index]}
          className={`py-1 px-5 h-8 text-sm font-semibold flex items-center  ${
            sector.isToggled && "switch-active-text"
          }`}
        >
          <span className="cursor-pointer flex items-center" onClick={() => handlerToggleClick(index)}>
            {sector.optionTitle}
          </span>
        </div>
      ))}
      <div
        className={`absolute z-[-1] h-8 w-20 bg-tmdbDarkBlue rounded-[30px] transition-all duration-300 ease-in`}
        style={{
          width: (currentToggled.width as number) + 1,
          left: currentToggled.offsetLeft,
        }}
      ></div>
    </div>
  );
};
export default Switch;
