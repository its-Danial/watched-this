import { createRef, FC, RefObject, useEffect, useState } from "react";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

type SwitchProps = {
  optionTitles: string[];
  onToggle: (pickedOptionTitle: string) => void;
};

type Selector = {
  isToggled: boolean;
  optionTitle: string;
  width: number | undefined;
  offsetLeft: number | undefined;
};

const Switch: FC<SwitchProps> = (props) => {
  const [selectors, setSelectors] = useState<Selector[]>([]);
  const [refHaveRendered, setRefHaveRendered] = useState(false);
  const [renderSelectedBackground, setRenderSelectedBackground] = useState(false);
  const selectorItemRef: RefObject<HTMLDivElement>[] = props.optionTitles.map(() => createRef());

  useIsomorphicLayoutEffect(() => {
    // Note: this will fix the extra options showing on the switch
    if (selectors.length >= props.optionTitles.length) {
      return;
    }
    props.optionTitles.map((optionName, index) => {
      setSelectors((prevState) => [
        ...prevState,
        {
          isToggled: index === 0 ? true : false,
          optionTitle: optionName,
          width: selectorItemRef[index].current?.offsetWidth,
          offsetLeft: selectorItemRef[index].current?.offsetLeft,
        },
      ]);
    });
  }, [selectorItemRef]);

  useEffect(() => {
    let data = selectors;
    data.forEach((selector, index) => {
      selector.width = selectorItemRef[index].current?.offsetWidth;
      selector.offsetLeft = selectorItemRef[index].current?.offsetLeft;
    });
    setSelectors(data);

    if (selectors.length > 0) {
      setRenderSelectedBackground(true);
    }
  }, [refHaveRendered, selectors]);

  const handlerToggleClick = (sectorIndex: number) => {
    let data = selectors;
    data.forEach((selector) => {
      selector.isToggled = false;
    });

    data[sectorIndex].isToggled = true;

    props.onToggle(data[sectorIndex].optionTitle);

    setSelectors(data);
  };

  return (
    <>
      <div className="relative z-[1] h-8 border border-solid border-tmdbDarkBlue rounded-[30px] font-medium flex items-center">
        {selectors.map((sector, index) => (
          <div
            key={index}
            ref={selectorItemRef[index]}
            className={`py-1 px-5 h-8 text-sm font-semibold flex items-center  ${
              sector.isToggled && "switch-active-text"
            }`}
          >
            <span className="cursor-pointer" onClick={() => handlerToggleClick(index)}>
              {sector.optionTitle}
            </span>
          </div>
        ))}

        {renderSelectedBackground && (
          <div
            className={`absolute z-[-1] h-8 bg-tmdbDarkBlue rounded-[30px] transition-all duration-200 ease-in`}
            style={{
              width: selectors.find((sector) => sector.isToggled)?.width,
              left: selectors.find((sector) => sector.isToggled)?.offsetLeft,
            }}
          ></div>
        )}
      </div>

      {!refHaveRendered && setRefHaveRendered(true)}
    </>
  );
};
export default Switch;
