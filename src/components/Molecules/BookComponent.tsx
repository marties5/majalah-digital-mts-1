import images from "@/../public/images/Letter.webp";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import { Typography } from "../Atoms/Typography";

export const BookComponent = ({
  data,
  width,
  height,
}: {
  data: any[];
  width: number;
  height: number;
}) => {
  const LetterPages = [
    images,
    images,
    images,
    images,
    images,
    images,
    images,
    images,
  ];
  let heights = height;
  let widths = width;
  return (
    <>
      <HTMLFlipBook
        size="fixed"
        minWidth={widths}
        maxWidth={widths}
        className="overflow-hidden my-0 py-0"
        startPage={1}
        minHeight={heights}
        maxHeight={heights}
        width={widths}
        height={heights}
        drawShadow={false}
        autoSize={true}
        style={{}}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={0}
        showCover={true}
        mobileScrollSupport={true}
        maxShadowOpacity={0.5}
        showPageCorners={false}
        disableFlipByClick={false}
      >
        {LetterPages.map((d, index) => (
          <div key={index} className="my-0 py-0 absolute top-0">
            <Image
              className="absolute top-0"
              src={d}
              alt="gambar"
              width={1200}
              height={1300}
            />
            <Typography
              variant="overline"
              className={`absolute ${
                (index + 2) / 2 == 0 ? "left-2" : "right-2"
              } bottom-1 text-disabled max-md:font-medium`}
            >
              {index !== 0 && String("page" + "  " + index)}
            </Typography>
          </div>
        ))}
      </HTMLFlipBook>
    </>
  );
};
