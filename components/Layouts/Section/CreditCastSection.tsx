import { FC, useRef, useState } from "react";
import { TvCastCredit } from "../../../types/TvShowDetails";
import Blur from "../../UI/Blur/Blur";

type CreditCastSectionProps = {
  title: string;
  creditsCast: TvCastCredit;
};

const CreditCastSection: FC<CreditCastSectionProps> = ({ creditsCast, title }) => {
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

  return (
    <section className="relative">
      <h2 className="text-gray-700 font-semibold text-[1.4em] mb-[10px]">{title}</h2>
      <ol
        onScroll={onScrollHandler}
        className="ml-[-10px]  pb-[10px] pr-[30px] w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] overflow-x-scroll flex list-none list-inside"
      >
        {creditsCast.cast.map((cast) => (
          <li
            key={cast.id}
            className="min-w-[140px] w-[140px] my-[10px] ml-[10px] mr-[4px] border border-gray-100 pb-[10px] rounded-lg overflow-hidden shadow"
          >
            <img
              className="min-w-[140px] w-[140px] h-[175px]"
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path}`}
              alt="cast image"
            />
            <div className="pt-[10px] px-[10px] flex flex-col min-w-[138px] w-[138px]">
              <p className="font-semibold text-base">{cast.name}</p>
              <p className="font-light text-gray-700 text-sm">{cast.character}</p>
            </div>
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
export default CreditCastSection;
