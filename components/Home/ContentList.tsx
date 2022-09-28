import React, { FC, useEffect, useRef, useState } from "react";
import { TV_Show } from "../../types";
import HomeContentCard from "../UI/Cards/HomeContentCard";

type ContentListProps = {
  contentList: TV_Show[];
};

const ContentList: FC<ContentListProps> = (props) => {
  const fadingEleRef = useRef<HTMLDivElement>(null);
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
    <div className="relative">
      <div onScroll={onScrollHandler} className="flex pb-14 p-5 overflow-x-auto scroll-smooth">
        {props.contentList?.map((item, index) => (
          <HomeContentCard
            key={index}
            first_air_date={item.first_air_date}
            poster_path={item.poster_path}
            name={item.name}
          />
        ))}
      </div>
      <div
        ref={fadingEleRef}
        className={`${!fade ? "opacity-100" : "opacity-0"} should_fade`}
        style={{ transition: "linear 0.3s" }}
      ></div>
    </div>
  );
};
export default ContentList;
