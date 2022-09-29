import { FC, memo } from "react";

const Blur: FC = memo(() => {
  return <div className="h-full w-full bg-gradient-to-r from-white/0 to-white/100" />;
});

Blur.displayName = "Blur";

export default Blur;
