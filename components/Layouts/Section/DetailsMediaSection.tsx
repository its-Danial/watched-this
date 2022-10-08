import { FC, useRef, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { TvDetailsImages, TvDetailsVideo } from "../../../types/TvShowDetails";
import Blur from "../../UI/Blur/Blur";
import { MovieDetailsImages, MovieDetailsVideos } from "../../../types/MovieDetails";

type DetailsMediaSectionProps = {
  videos: TvDetailsVideo | MovieDetailsVideos;
  images: TvDetailsImages | MovieDetailsImages;
};

const DetailsMediaSection: FC<DetailsMediaSectionProps> = ({ videos, images }) => {
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

  const mediaToggleClickHandler = (type: string) => {
    let prevToggled = toggled;
    // @ts-ignore
    Object.keys(prevToggled).forEach((v) => (prevToggled[v] = false));
    const newValues = { ...prevToggled, [type]: true };

    setToggled(newValues);
  };

  const activeStyle = "border-b-4 border-black";

  return (
    <section className="py-[30px] border-t border-gray-300 relative">
      <div className="flex items-baseline">
        <h1 className="font-semibold text-[1.4em] mb-5 mr-[50px]">Media</h1>
        <span
          onClick={mediaToggleClickHandler.bind(null, "videos")}
          className={`text-[1.1em] font-semibold mr-6 pb-[5px]  cursor-pointer hover:opacity-70 ${
            toggled.videos && activeStyle
          }`}
        >
          Videos <span className="text-gray-500">{videos.results.length}</span>
        </span>
        <span
          onClick={mediaToggleClickHandler.bind(null, "backdrops")}
          className={`text-[1.1em] font-semibold mr-6 pb-[5px] cursor-pointer hover:opacity-70 ${
            toggled.backdrops && activeStyle
          }`}
        >
          Backdrops <span className="text-gray-500">{images.backdrops.length}</span>
        </span>
        <span
          onClick={mediaToggleClickHandler.bind(null, "posters")}
          className={`text-[1.1em] font-semibold pb-[5px] cursor-pointer hover:opacity-70 ${
            toggled.posters && activeStyle
          }`}
        >
          Posters <span className="text-gray-500">{images.posters.length}</span>
        </span>
      </div>

      <ol
        onScroll={onScrollHandler}
        className="rounded-lg overflow-x-scroll overflow-y-hidden flex list-none list-inside"
      >
        {toggled.videos &&
          videos.results.map((video) => (
            <li key={video.id}>
              {/* @ts-ignore */}
              <ReactPlayer controls url={`'https://www.youtube.com/watch?v=${video.key}`} width={533} height={300} />
            </li>
          ))}
        {toggled.backdrops &&
          images.backdrops.map((backdrop) => (
            <li key={backdrop.file_path} className="w-[533px] h-[300px] min-w-[533px] min-h-[300px]">
              <Image
                width={533}
                height={300}
                src={`http://image.tmdb.org/t/p/w1066_and_h600_bestv2${backdrop.file_path}`}
                alt=""
              />
            </li>
          ))}
        {toggled.posters &&
          images.posters.map((poster) => (
            <li key={poster.file_path} className="w-[200px] min-w-[200px] h-[300px] min-h-[300px]">
              <Image
                width={200}
                height={300}
                src={`http://image.tmdb.org/t/p/w440_and_h660_face${poster.file_path}`}
                alt=""
              />
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
export default DetailsMediaSection;
