import { FC, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { TvDetailsVideo } from "../../../types/TvShowDetails";
import Blur from "../../UI/Blur/Blur";

type DetailsMediaSectionProps = {
  videos: TvDetailsVideo;
};

const DetailsMediaSection: FC<DetailsMediaSectionProps> = ({ videos }) => {
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
    <section className="py-[30px] border-t border-gray-300 relative">
      <div className="flex items-baseline">
        <h1 className="font-semibold text-[1.4em] mb-5 mr-[50px]">Media</h1>
        <span className="text-[1.1em] font-semibold mr-6 pb-[5px] border-b-4 border-black cursor-pointer hover:opacity-70">
          Videos <span className="text-gray-500">3</span>
        </span>
        <span className="text-[1.1em] font-semibold mr-6 pb-[5px] cursor-pointer hover:opacity-70">
          Backdrops <span className="text-gray-500">116</span>
        </span>
        <span className="text-[1.1em] font-semibold pb-[5px] cursor-pointer hover:opacity-70">
          Posters <span className="text-gray-500">149</span>
        </span>
      </div>
      <div>
        <ol onScroll={onScrollHandler} className="ml-[-10px] overflow-x-scroll flex list-none list-inside">
          {videos.results.map((video) => (
            <li key={video.id}>
              <ReactPlayer controls url={`'https://www.youtube.com/watch?v=${video.key}`} width={533} height={300} />
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
      </div>
    </section>
  );
};
export default DetailsMediaSection;
