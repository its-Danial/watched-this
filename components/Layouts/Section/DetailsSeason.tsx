import { FC } from "react";
import Image from "next/image";
import { TvShowDetails } from "../../../types/TvShowDetails";
import { MovieDetails } from "../../../types/MovieDetails";

type DetailsSeasonProps = {
  details: TvShowDetails;
};

const DetailsSeason: FC<DetailsSeasonProps> = ({ details }) => {
  return (
    <section className="py-[30px] border-t border-gray-300">
      <h1 className="font-semibold text-[1.4em] mb-5">Current Season</h1>
      <div
        className="border border-gray-100 rounded-lg overflow-hidden flex"
        style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}
      >
        <div className="w-[130px] h-[195px] min-w-[130px]">
          <Image
            width={130}
            height={195}
            src={`http://image.tmdb.org/t/p/w260_and_h390_bestv2${details.seasons.at(-1)?.poster_path}`}
            alt={`${details.name} poster`}
          />
        </div>

        <div className="w-full p-5 flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-semibold">{details.seasons.at(-1)?.name}</h2>
            <h4 className="mb-2 font-bold">
              {details.seasons.at(-1)?.air_date.slice(0, 4)} | {details.seasons.at(-1)?.episode_count} Episodes
            </h4>
            <div className="pt-5">
              <p className="font-thin text-gray-600 leading-[1.4]">{details.seasons.at(-1)?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-5 text-black text-base font-semibold hover:opacity-70">View all season</button>
    </section>
  );
};
export default DetailsSeason;
