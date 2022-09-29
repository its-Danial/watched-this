import React, { FC, useRef, useState } from "react";
import { Movie, TV_Show } from "../../types";
import Blur from "../UI/Blur/Blur";
import HomeContentCard from "../UI/Cards/HomeContentCard";

type ContentListProps = {
  listContent: TV_Show[] | Movie[];
};

const ContentList: FC<ContentListProps> = (props) => {
  const fadingElRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState<number>();

  const onScrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = event.currentTarget;
    const scroll = scrollLeft;

    if (scroll === 0) {
      setFade(scroll);
    } else {
      setFade(scroll);
    }
  };

  return (
    <div onScroll={onScrollHandler} className="flex p-5 overflow-x-auto scroll-smooth">
      {props.listContent.map((item, index) => (
        <HomeContentCard key={index} contentItem={item} />
      ))}
      <div
        ref={fadingElRef}
        className={`${!fade ? "opacity-100" : "opacity-0"} absolute right-0 top-0 w-[60px] h-full pointer-events-none`}
        style={{ transition: "linear 0.3s" }}
      >
        <Blur />
      </div>
    </div>
  );
};
export default ContentList;
