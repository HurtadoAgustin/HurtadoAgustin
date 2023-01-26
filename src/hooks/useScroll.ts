import { useEffect, useState } from "react";

function useScroll(): boolean {
  const [ scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      (window.screenY > 50)
        ? setScrolled(true)
        : setScrolled(false)
      ;
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, []);

  return scrolled;
}

export default useScroll;
