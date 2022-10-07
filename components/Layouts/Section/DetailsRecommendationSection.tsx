import { FC, useRef, useState } from "react";
import Image from "next/image";
import { TvRecommendations } from "../../../types/TvShowDetails";
import Blur from "../../UI/Blur/Blur";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

type DetailsRecommendationSectionProps = {
  recommendations: TvRecommendations;
};

const DetailsRecommendationSection: FC<DetailsRecommendationSectionProps> = ({ recommendations }) => {
  const [toggled, setToggled] = useState({ videos: true, backdrops: false, posters: false });

  const fadingElRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState<number>();

  const onScrollHandler = (event: React.UIEvent<HTMLOListElement>) => {
    const { scrollLeft } = event.currentTarget;
    const scroll = scrollLeft;

    if (scroll === 0) {
      setFade(scroll);
    } else {
      setFade(scroll);
    }
  };

  const activeStyle = "border-b-4 border-black";

  return (
    <section className="py-[30px] border-t border-gray-300 relative">
      <h1 className="font-semibold text-[1.4em] mb-5">Recommendations</h1>

      <ol
        onScroll={onScrollHandler}
        className="rounded-lg overflow-x-scroll overflow-y-hidden flex list-none list-inside pb-[10px]"
      >
        {recommendations.results.map((tvShow) => (
          <li key={tvShow.id} className="w-[250px] mr-[15px]">
            <Link href={`${tvShow.id}`}>
              <a>
                <div className="h-[141px] w-[250px] rounded-lg overflow-hidden relative group">
                  <Image
                    width={250}
                    height={141}
                    src={`http://image.tmdb.org/t/p/w500_and_h282_face${tvShow.backdrop_path}`}
                    alt={tvShow.name}
                  />
                  <div className="hidden group-hover:flex transition-all duration-300 ease-in absolute h-[40px] w-full z-1 px-[10px] items-center bg-gray-100 opacity-90 bottom-0 gap-2 text-gray-600">
                    <BsCalendar3 /> <span>{tvShow.first_air_date}</span>
                  </div>
                </div>
                <p className="flex justify-between mt-1 text-[1em]">
                  <span className="pr-5 truncate ...">{tvShow.name}</span>
                  <span>{Math.round(tvShow.vote_average * 10)}%</span>
                </p>
              </a>
            </Link>
          </li>
        ))}
        <div
          ref={fadingElRef}
          className={`${
            !fade ? "opacity-100" : "opacity-0"
          } absolute right-0 top-0 w-[60px] h-full pointer-events-none`}
          style={{ transition: "linear 0.3s" }}
        >
          <Blur />
        </div>
      </ol>
    </section>
  );
};
export default DetailsRecommendationSection;
