import { FC } from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: FC<MainContainerProps> = (props) => {
  return <div className="max-w-[1300px] mx-auto">{props.children}</div>;
};
export default MainContainer;
