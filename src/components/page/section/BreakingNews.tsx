"use client";

import images from "@/../public/images/A6.png";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import { CarouselPart } from "@/components/Organisms/Part/CarouselPart";
import { NewsPart } from "@/components/Organisms/Part/NewsPart";
export const BreakingNews = () => {
  const dataNews = {
    title: "Data personal rakyat indonesia di HACK",
    image: images,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sint reiciendis nulla vero quo, quidem ipsum dolor. Nobis, placeat omnis?",
    date: "20/05/2024",
  };

  const dataNewses = [
    dataNews,
    dataNews,
    dataNews,
    dataNews,
    dataNews,
    dataNews,
  ];

  const imagess = [images, images, images, images, images, images, images];

  return (
    <div className="pb-12">
      <Typography variant="title" className="my-4">
        Higlights
      </Typography>
      <Flex variant="col" className="lg:flex-row h-full items-start gap-8">
        <CarouselPart carousel_data={imagess} />
        <NewsPart dataNews={dataNewses} />
      </Flex>
    </div>
  );
};
