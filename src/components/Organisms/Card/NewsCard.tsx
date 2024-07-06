import { ContainerCard } from "@/components/Atoms/ContainerCard";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";

export const NewsCard = ({ dataNews }: any) => {
  return (
    <ContainerCard className="p-2 h-fit">
      <Flex className="w-full">
        <Image
          alt="gambar"
          src={dataNews.image}
          height={400}
          width={700}
          className="object-cover md:h-28 lg:w-[40%] md:w-44 h-24 w-36 rounded-md"
        />
        <Flex
          variant="col"
          className="items-start h-full w-4/6"
          justify="start"
        >
          <Typography className="line-clamp-1">{dataNews.title}</Typography>
          <Typography
            variant="body2"
            className="md:line-clamp-3 pr-6 line-clamp-2 leading-4 md:tracking-wider font-normal text-gray-400"
          >
            {dataNews.description}
          </Typography>
          <Typography
            variant="overline"
            className="text-end w-full font-normal"
          >
            {dataNews.date}
          </Typography>
        </Flex>
      </Flex>
    </ContainerCard>
  );
};
