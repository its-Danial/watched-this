import { FC } from "react";
import { TvKeywords, TvShowDetails } from "../../../types/TvShowDetails";

type DetailsFactSectionProps = {
  keywords: TvKeywords;
  details: TvShowDetails;
};

const DetailsFactSection: FC<DetailsFactSectionProps> = ({ keywords, details }) => {
  return (
    <>
      <section className="mb-[30px]">
        <h4 className="text-lg font-bold mb-[10px]">Facts</h4>
        <div className="mb-5">
          <h4 className="text-[1em] font-bold">Status</h4>
          <p className="text-gray-600">{details.status}</p>
        </div>
        <div className="mb-5">
          <h4 className="text-[1em] font-bold">Status</h4>
          <div className="flex">
            <img
              src={`http://image.tmdb.org/t/p/h60${details.networks[0].logo_path}`}
              alt="network logo"
              className="max-w-[260px] h-[30px]"
            />
          </div>
        </div>
        <div className="mb-5">
          <h5 className="text-[1em] font-semibold">Type</h5>
          <p className="text-gray-600">{details.type}</p>
        </div>
        <div className="mb-5">
          <h5 className="text-[1em] font-semibold">Original Language</h5>
          <p className="text-gray-600">English</p>
        </div>
      </section>
      <section className="pb-[30px] border-b border-gray-300">
        <h4 className="text-[1.1em] font-semibold text-black mb-[10px]">Keywords</h4>
        <ul className="flex flex-wrap justify-start  list-none list-inside">
          {keywords.results.map((keyword) => (
            <li
              className="mr-[5px] mb-[10px] text-sm text-gray-700 font-[50] px-[10px] py-1 rounded bg-gray-200 border border-gray-300"
              key={keyword.id}
            >
              {keyword.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default DetailsFactSection;
