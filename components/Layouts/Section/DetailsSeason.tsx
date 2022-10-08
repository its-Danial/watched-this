import Image from "next/image";
import { FC } from "react";
import { TvShowDetails } from "../../../types/TvShowDetails";

type DetailsSeasonProps = {
  details: TvShowDetails;
};

const DetailsSeason: FC<DetailsSeasonProps> = ({ details }) => {
  const currentSeason = details.seasons.find(
    (season) => season.season_number === details.last_episode_to_air.season_number
  );
  return (
    <section className="py-[30px] border-t border-gray-300">
      <h1 className="font-semibold text-[1.4em] mb-5">Current Season</h1>
      <div
        className="border border-gray-100 rounded-lg overflow-hidden flex"
        style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}
      >
        <div className="w-[130px] h-[195px] min-w-[130px]">
          {currentSeason?.poster_path ? (
            <img
              src={`http://image.tmdb.org/t/p/w260_and_h390_bestv2${currentSeason?.poster_path}`}
              alt={`${details.name} season poster`}
            />
          ) : (
            <div
              className="bg-no-img-holder bg-[#dbdbdb] w-full h-full bg-center bg-no-repeat"
              style={{ backgroundSize: "50%" }}
            />
          )}
        </div>

        <div className="w-full p-5 flex flex-col justify-center">
          <div>
            <h2 className="text-2xl font-semibold">{currentSeason?.name}</h2>
            <h4 className="mb-2 font-bold">
              {currentSeason?.air_date.slice(0, 4)} | {currentSeason?.episode_count} Episodes
            </h4>
            <div className="pt-5">
              <p className="font-thin text-gray-600 leading-[1.4]">
                {currentSeason?.overview.length === 0
                  ? `${currentSeason.name} of ${details.name} premiered on ${new Date(currentSeason.air_date)
                      .toDateString()
                      .split(" ")
                      .slice(1)
                      .join(" ")}`
                  : currentSeason?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-5 text-black text-base font-semibold hover:opacity-70">View all season</button>
    </section>
  );
};
export default DetailsSeason;
