import { FC } from "react";
import Switch from "../../UI/Buttons/Switch";

type SectionProps = {
  sectionTitle: string;
  optionItems: string[];
  onToggleSelect: (pickedOptionTitle: string) => void;
  children: React.ReactNode;
  isToggled: boolean;
};

const Section: FC<SectionProps> = (props) => {
  return (
    <section className="mt-[30px] relative">
      <div className="flex items-center gap-5 px-10">
        <h2 className="text-gray-700 font-semibold text-2xl">{props.sectionTitle}</h2>
        <Switch {...props} />
        {/* <DropDownMenu /> */}
      </div>
      {props.children}
    </section>
  );
};
export default Section;
