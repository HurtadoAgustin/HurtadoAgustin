import { useEffect, useState } from "react";

const useRotateText = (toRotate: Array<string>): string => {
  const [text, setText] = useState<string>("");
  const [period, setPeriod] = useState<number>(300 - Math.random() * 100);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const AWAIT_PERIOD = 2000;
  const CREATING_PERIOD = 150;
  
  const tick = () => {
    const index = loopNum % toRotate.length;
    const fullText = toRotate[index];
    const updatedText = (isDeleting)
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    ;

    setText(updatedText);

    if (isDeleting) setPeriod(prevPeriod => prevPeriod / 2);

    if (!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setPeriod(AWAIT_PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setPeriod(CREATING_PERIOD);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, period);

    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return text;
}

export default useRotateText;
