import { ChangeEvent, FC, useState } from "react";

type SectionSelectProps = {
  onTimeWindowSelect: (timeWindow: string) => void;
};

const SectionSelect: FC<SectionSelectProps> = (props) => {
  const onSelectValueHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onTimeWindowSelect(event.target.value);
  };

  return (
    <select
      onChange={onSelectValueHandler}
      className="h-8 py-1 px-3 text-sm text-center font-semibold rounded-[30px] bg-tmdbDarkBlue text-tmdbLightGreen border-r-8 border-solid border-transparent cursor-pointer"
      defaultValue="all"
    >
      <option value="all">All Media</option>
      <option value="tv">TV Shows</option>
      <option value="movie">Movies</option>
    </select>
  );
};
export default SectionSelect;
