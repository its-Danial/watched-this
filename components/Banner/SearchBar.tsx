import { FC } from "react";

type SearchBarProps = {};

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <form className="relative">
      <input
        className="w-full h-12 rounded-full outline-none px-5 py-3 placeholder:text-slate-500 text-[1.1rem] text-slate-600"
        placeholder="Search for a movie and tv shows......"
      />
      <button className="absolute top-0 right-0 text-white hover:text-slate-900 font-bold px-7 py-3 rounded-full bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
