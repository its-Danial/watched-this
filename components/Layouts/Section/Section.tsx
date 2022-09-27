import { FC, useState } from "react";
import Switch from "../../UI/Buttons/Switch";

type SectionProps = {
  sectionTitle: string;
  optionTitles: string[];
  onToggleSelect: (pickedOptionTitle: string) => void;
};

const Section: FC<SectionProps> = (props) => {
  const onToggleSelectorHandler = (pickedOptionTitle: string) => {
    props.onToggleSelect(pickedOptionTitle);
  };
  return (
    <section className="mt-[30px] px-10">
      <div className="flex items-center gap-5">
        <h2 className="font-medium text-2xl">{props.sectionTitle}</h2>
        <Switch optionTitles={props.optionTitles} onToggle={onToggleSelectorHandler} />
      </div>
    </section>
  );
};
export default Section;
