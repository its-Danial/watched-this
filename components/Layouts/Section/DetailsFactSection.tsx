import { FC } from "react";
import { MovieDetails, MovieKeywords } from "../../../types/MovieDetails";
import { TvKeywords, TvShowDetails } from "../../../types/TvShowDetails";

type DetailsFactSectionProps = {
  keywords: TvKeywords | MovieKeywords;
  details: TvShowDetails | MovieDetails;
  contentType: "movie" | "tv";
};

const DetailsFactSection: FC<DetailsFactSectionProps> = ({ keywords, details, contentType }) => {
  return (
    <>
      <section className="mb-[30px]">
        <h4 className="text-lg font-bold mb-[10px]">Facts</h4>
        <div className="mb-5">
          <h4 className="text-[1em] font-bold">Status</h4>
          <p className="text-gray-600">{details.status}</p>
        </div>
        {contentType === "tv" && (
          <div className="mb-5">
            <h4 className="text-[1em] font-bold">Status</h4>
            <div className="flex">
              <img
                // @ts-ignore
                src={`http://image.tmdb.org/t/p/h60${details.networks[0].logo_path}`}
                alt="network logo"
                className="max-w-[260px] h-[30px]"
              />
            </div>
          </div>
        )}
        {contentType === "tv" && (
          <div className="mb-5">
            <h5 className="text-[1em] font-semibold">Type</h5>
            {/* @ts-ignore */}
            <p className="text-gray-600">{details.type}</p>
          </div>
        )}
        <div className="mb-5">
          <h5 className="text-[1em] font-semibold">Original Language</h5>
          <p className="text-gray-600">English</p>
        </div>
        {contentType === "movie" && (
          <div className="mb-5">
            <h5 className="text-[1em] font-semibold">Budget</h5>
            {/* @ts-ignore */}
            <p className="text-gray-600">{details.budget === 0 ? "-" : `${details.budget}.00`}</p>
          </div>
        )}
        {contentType === "movie" && (
          <div>
            <h5 className="text-[1em] font-semibold">Revenue</h5>
            {/* @ts-ignore */}
            <p className="text-gray-600">{details.revenue === 0 ? "-" : `${details.revenue}.00`}</p>
          </div>
        )}
      </section>
      <section className="pb-[30px] border-b border-gray-300">
        <h4 className="text-[1.1em] font-semibold text-black mb-[10px]">Keywords</h4>
        <ul className="flex flex-wrap justify-start  list-none list-inside">
          {/* @ts-ignore */}
          {keywords.results?.map((keyword) => (
            <li
              className="mr-[5px] mb-[10px] text-sm text-gray-700 font-[50] px-[10px] py-1 rounded bg-gray-200 border border-gray-300"
              key={keyword.id}
            >
              {keyword.name}
            </li>
          ))}
          {/* @ts-ignore */}
          {keywords.keywords?.map((keyword) => (
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
