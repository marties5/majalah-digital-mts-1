import { Typography } from "@/components/Atoms/Typography";
import Link from "next/link";
import { NewsCard } from "../Card/NewsCard";

export const NewsPart = ({ dataNews }: any) => {
  return (
    <div className="w-full max-w-xl lg:max-w-md md:space-y-4 space-y-2 h-full min-h-full flex-wrap   ">
      <Typography variant="title" className="md:my-0 my-4">
        Berita Terkini
      </Typography>
      <div className="overflow-y-auto lg:h-[30rem] space-y-4 lg:pr-4">
        {dataNews.map((content_news: any, index: number) => (
          <NewsCard dataNews={content_news} key={index} />
        ))}
      </div>
      <Link href={"/berita"}>
        <Typography
          variant="caption"
          className="text-center md:mt-4 lg:mt-2 mt-4 py-2 text-info hover:underline  cursor-pointer rounded-md border border-gray-200 w-full"
        >
          Berita Lainya...
        </Typography>
      </Link>
    </div>
  );
};
