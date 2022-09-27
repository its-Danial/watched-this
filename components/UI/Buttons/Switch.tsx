import { FC, useLayoutEffect, useState, createRef, useEffect, useRef, RefObject } from "react";

type SwitchProps = {
  optionTitles: string[];
};

type Selector = {
  isToggled: boolean;
  optionTitle: string;
  width: number | undefined;
};

const Switch: FC<SwitchProps> = (props) => {
  const [selectors, setSelectors] = useState<Selector[]>([]);
  const [currentToggled, setCurrentToggled] = useState<Selector & { index: number }>({
    index: 0,
    isToggled: true,
    optionTitle: props.optionTitles[0],
    width: 110,
  });
  const elementsRef = useRef<RefObject<HTMLDivElement>[]>(props.optionTitles.map(() => createRef()));

  useLayoutEffect(() => {
    if (selectors.length >= props.optionTitles.length) {
      console.log("layout got called again");
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

  const handlerToggleClick = (sectorIndex: number, toggleState: boolean) => {
    console.log(elementsRef.current[sectorIndex]);

    let data = selectors;
    data.forEach((selector, index) => {
      selector.isToggled = false;
      selector.width = elementsRef.current[sectorIndex].current?.offsetWidth;
    });
    data[sectorIndex].isToggled = true;
    setCurrentToggled({ index: sectorIndex, ...data[sectorIndex] });

    setSelectors(data);

    const check = selectors.find((el, index) => el.isToggled);

    console.log("check", check);
  };

  return (
    <div className="relative z-[1] h-8 border border-solid border-tmdbDarkBlue rounded-[30px] font-medium flex items-center">
      {selectors.map((sector, index) => (
        <div
          key={index}
          ref={elementsRef.current[index]}
          className={`py-1 px-5 h-8 text-sm font-semibold flex items-center  ${
            sector.isToggled && "switch-active-text"
          }`}
        >
          <span
            className="cursor-pointer flex items-center"
            onClick={() => handlerToggleClick(index, !sector.isToggled)}
          >
            {sector.optionTitle}
          </span>
        </div>
      ))}
      <div
        className={`absolute z-[-1] h-8 w-20 bg-tmdbDarkBlue rounded-[30px] transition-all duration-150 ease-in`}
        style={{ width: currentToggled.width, left: 80 }}
      ></div>
    </div>
  );
};
export default Switch;
