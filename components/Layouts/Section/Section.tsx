import { FC, useState } from "react";
import Switch from "../../UI/Buttons/Switch";
import HomeContentCard from "../../UI/Cards/HomeContentCard";

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
        <h2 className="font-medium text-2xl">{props.sectionTitle}</h2>
        <Switch optionTitles={props.optionTitles} onToggle={onToggleSelectorHandler} />
      </div>
      {props.children}
    </section>
  );
};
export default Section;
