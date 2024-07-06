import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import { AiOutlineCopyright } from "react-icons/ai";

export const Footer = () => {
  return (
    <Flex justify="center" variant="col" className="h-fit text-black px-4">
      <Flex justify="center" className=" border-y py-4 w-full">
        <Flex
          justify="between"
          className="max-w-6xl lg:h-96 h-fit w-full  flex-col lg:flex-row"
        >
          <Flex variant="col" className="gap-0 items-start" justify="start">
            <Typography variant="h6">Video Profile</Typography>
            <iframe
              width="440"
              height="200"
              src="https://www.youtube.com/embed/Bbiz_UocU3g?si=56G6KHzl459gfYc-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full max-w-lg aspect-video my-6 block md:hidden"
            ></iframe>
            <iframe
              width="515"
              height="290"
              src="https://www.youtube.com/embed/Bbiz_UocU3g?si=56G6KHzl459gfYc-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full max-w-lg aspect-video my-6 hidden md:block"
            ></iframe>
          </Flex>
          <Flex
            justify="start"
            variant="col"
            className="lg:w-96 items-start w-full max-w-lg"
          >
            <Typography variant="title">Hubungi Kami</Typography>
            <Flex
              justify="start"
              className="items-start gap-0 w-full"
              variant="col"
            >
              <Typography variant="subtitle1">Alamat</Typography>
              <Typography variant="caption" className="line-clamp-2 h-">
                Jl. Ki Hajar Dewantara, Boyolangu
              </Typography>
            </Flex>
            <Flex
              justify="start"
              className="items-start gap-0 w-full"
              variant="col"
            >
              <Typography variant="subtitle1">Telepon</Typography>
              <Typography variant="caption">(0355) 321914</Typography>
            </Flex>{" "}
            <Flex
              justify="start"
              className="items-start gap-0 w-full"
              variant="col"
            >
              <Typography variant="subtitle1">Email</Typography>
              <Typography variant="caption">
                mtsn1beji.tulungagung@gmail.com
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex className="items-start  my-10 gap-1 ">
        <AiOutlineCopyright size={12} />
        <Typography className="pb-2 text-gray-200" variant="caption">
          Copyright Flexino Indonesia 2024
        </Typography>
      </Flex>
    </Flex>
  );
};
