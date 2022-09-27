import { FC } from "react";
import Switch from "../../UI/Buttons/Switch";

type SectionProps = {
  title: string;
  optionTitles: string[];
};

const Section: FC<SectionProps> = (props) => {
  return (
    <section className="mt-[30px] px-10">
      <div className="flex items-center gap-5">
        <h2 className="font-medium text-2xl">{props.title}</h2>
        <Switch optionTitles={props.optionTitles} />
      </div>
    </section>
  );
};
export default Section;
