import React, { FC, useEffect, useRef, useState } from "react";
import HomeContentCard from "../UI/Cards/HomeContentCard";

type ContentListProps = {};

const dummydata = [
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
  {
    title: "the boys",
    imageUrl: "https://www.themoviedb.org/t/p/w440_and_h660_face/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
    date: "03 Oct 2020",
  },
];

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
        {dummydata.map((item, index) => (
          <HomeContentCard key={index} {...item} />
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
