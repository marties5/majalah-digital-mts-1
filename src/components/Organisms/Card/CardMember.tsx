import LogoMtsN from "@/../public/images/logo-mts-1.png";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";

export const CardMember = ({ data }: any) => {
  return (
    <Flex
      variant="col"
      className="md:w-64 w-52 group  md:h-96 h-80 border gap-0 scale-75 md:scale-90 rounded-tl-3xl overflow-hidden"
    >
      <Flex justify="center" className="items-center gap-0 h-full w-full ">
        <Flex className="h-full bg-gray-200" variant="col">
          <Flex
            className="rounded-lg md:h-16 h-12"
            justify="center"
            variant="col"
          >
            <Image
              alt="gambar"
              src={LogoMtsN}
              width={400}
              height={600}
              className="h-10 w-10 md:h-14 md:w-14 mt-2 "
            />
          </Flex>
          <Flex className=" md:w-20 w-14 h-full" justify="end" variant="col">
            <Typography
              variant="h4"
              className="-rotate-90 text-nowrap tracking-widest uppercase text-white mb-14 md:mb-20 group-hover:-rotate-[85deg] duration-150"
            >
              {data.name}
            </Typography>
          </Flex>
        </Flex>
        <Flex
          variant="col"
          justify="end"
          className="h-full w-full items-start relative"
        >
          <Image
            alt="gambar"
            src={data.image}
            width={400}
            height={600}
            className="absolute h-60 md:h-72 object-cover w-fit mt-2 mr-4 bottom-0 right-0 z-10 group-hover:scale-110 group-hover:-translate-y-3 group-hover:-translate-x-3 duration-200 ease-in-out group-hover:drop-shadow-2xl "
          />
          <Image
            alt="gambar"
            src={data.image}
            width={400}
            height={600}
            className="absolute object-cover saturate-0 fill-secondary blur-[1px] opacity-30 h-full w-fit mt-2  z-0 group-hover:brightness-90 duration-150"
          />
        </Flex>
      </Flex>
      <Flex
        className="w-full px-2 py-2 gap-0 bg-info text-gray-100"
        variant="col"
      >
        <Flex justify="start" className="w-full pb-0 mb-0">
          <Typography variant="button" className="font-normal md:font-semibold">
            {data.position}
          </Typography>
        </Flex>
        <Flex className="w-full justify-end">
          <Typography variant="title" className="">
            {data.class}
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};
