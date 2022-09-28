import { FC, useEffect, useRef, useState } from "react";

type SwitchProps = {
  optionItems: string[];
  onToggleSelect: (pickedOptionTitle: string) => void;
  isToggled: boolean;
};

const Switch: FC<SwitchProps> = (props) => {
  const [item1Width, setItem1Width] = useState<number>();
  const [item2Width, setItem2Width] = useState<number>();
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setItem1Width(item1Ref.current?.offsetWidth);
    setItem2Width(item2Ref.current?.offsetWidth);
  }, []);

  const handlerToggleClick = (toggledItem: string) => {
    props.onToggleSelect(toggledItem);
  };

  return (
    <>
      <div className="relative z-[1] h-8 border border-solid border-tmdbDarkBlue rounded-[30px] font-medium flex items-center">
        <div
          ref={item1Ref}
          className={`py-1 px-5 h-8 text-sm font-semibold flex items-center  ${
            !props.isToggled && "switch-active-text"
          }`}
        >
          <span className="cursor-pointer" onClick={handlerToggleClick.bind(null, props.optionItems[0])}>
            {props.optionItems[0]}
          </span>
        </div>
        <div
          ref={item2Ref}
          className={`py-1 px-5 h-8 text-sm font-semibold flex items-center  ${
            props.isToggled && "switch-active-text"
          }`}
        >
          <span className="cursor-pointer" onClick={() => handlerToggleClick(props.optionItems[1])}>
            {props.optionItems[1]}
          </span>
        </div>

        <div
          className={`absolute z-[-1] h-8 bg-tmdbDarkBlue rounded-[30px] transition-all duration-200 ease-in`}
          style={
            props.isToggled
              ? { left: `${Number(item1Width)}px`, width: `${Number(item2Width) + 2}px` }
              : { left: 0, width: `${Number(item1Width) + 2}px` }
          }
        ></div>
      </div>
    </>
  );
};
export default Switch;
