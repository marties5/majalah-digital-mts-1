import * as React from "react";
export const AnimateRendering = ({ isOpen, data }: any) => {
  const [nextIndex, setNextIndex] = React.useState(0);
  const [result, setResult] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (!isOpen) {
      setResult([]);
      setNextIndex(0);
      return;
    }

    if (nextIndex < data.length) {
      const timer = setTimeout(() => {
        setResult((prevData) => {
          const newOption = data[nextIndex];
          setNextIndex(nextIndex + 1);
          return [...prevData, newOption];
        });
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [isOpen, data, nextIndex]);

  return result;
};
