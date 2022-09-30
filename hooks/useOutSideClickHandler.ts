import { useEffect } from "react";

const useOutSideClickHandler = (ref: React.RefObject<any>, handlerFunction: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handlerFunction();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
};

export default useOutSideClickHandler;
