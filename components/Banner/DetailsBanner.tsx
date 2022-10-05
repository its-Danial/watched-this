import { FC, useState } from "react";
// @ts-ignore
import { ColorExtractor } from "react-color-extractor";

type DetailsBannerProps = {
  children: React.ReactNode;
  backdropUrl: string;
};

const DetailsBanner: FC<DetailsBannerProps> = (props) => {
  const [backdropColors, setBackdropColors] = useState<string[]>();

  return (
    <>
      <ColorExtractor
        rgb
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.backdropUrl}`}
        getColors={(colors: string[]) => setBackdropColors(colors)}
      />
      <div
        className={`w-full h-[510px] bg-cover bg-no-repeat bg-detail-banner`}
        style={
          backdropColors && {
            //   @ts-ignore
            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.backdropUrl})`,
          }
        }
      >
        <div
          className="w-full h-full flex justify-center"
          style={
            backdropColors && {
              backgroundImage: `linear-gradient(to right, rgba(${backdropColors[2][0]}, ${backdropColors[2][1]}, ${backdropColors[2][2]},1) 150px, rgba(${backdropColors[2][0]}, ${backdropColors[2][1]}, ${backdropColors[2][2]}, 0.85) 100%)`,
            }
          }
        >
          {props.children}
        </div>
      </div>
      {/* {backdropColors && (
        <div className="w-full mt-12 flex justify-center gap-5">
          {backdropColors.map((color) => (
            <div
              key={color}
              className={`h-20 w-20`}
              style={{ backgroundColor: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)` }}
            ></div>
          ))}
        </div>
      )} */}
    </>
  );
};
export default DetailsBanner;
