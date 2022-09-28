import { FC } from "react";
import Switch from "../../UI/Buttons/Switch";

type SectionProps = {
  sectionTitle: string;
  optionTitles: string[];
  onToggleSelect: (pickedOptionTitle: string) => void;
  children: React.ReactNode;
};

const Section: FC<SectionProps> = (props) => {
  const onToggleSelectorHandler = (pickedOptionTitle: string) => {
    props.onToggleSelect(pickedOptionTitle);
  };
  return (
    <section className="mt-[30px]">
      <div className="flex items-center gap-5 px-10">
        <h2 className="text-gray-700 font-semibold text-2xl">{props.sectionTitle}</h2>
        <Switch optionTitles={props.optionTitles} onToggle={onToggleSelectorHandler} />
        {/* <DropDownMenu /> */}
      </div>
      {props.children}
    </section>
  );
};
export default Section;
