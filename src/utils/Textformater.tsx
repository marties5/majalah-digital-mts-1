import React from "react";
import { TextFormaterProps } from "../lib/interface";

const tagMap: { [key: string]: keyof JSX.IntrinsicElements } = {
  b: "strong",
  i: "i",
  u: "u",
  small: "small",
  strong: "strong",
  sub: "sub",
  sup: "sup",
  ins: "ins",
  del: "del",
  mark: "mark",
  em: "em",
};

const TextFormater: React.FC<TextFormaterProps> = ({
  text,
}: {
  text?: string;
}) => {
  if (!text) return null;
  const formatWord = (word: string, index: number) => {
    if (word.startsWith("link[")) {
      const endOfUrlIndex = word.indexOf("]");
      const url = word.substring(5, endOfUrlIndex);
      const linkText = word.substring(endOfUrlIndex + 2).replace(/:/g, " ");
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          className="text-slate-400 text-base font-semibold hover:text-purple-300"
        >
          {linkText}
        </a>
      );
    }

    const [prefix, ...rest] = word.split("/");
    const content = rest.join("/");

    const Tag = tagMap[prefix];
    return Tag ? React.createElement(Tag, { key: index }, content) : word;
  };

  return (
    <>
      {text.split(" ").map((word: string, index: number) => (
        <React.Fragment key={index}>{formatWord(word, index)} </React.Fragment>
      ))}
    </>
  );
};

export default TextFormater;
