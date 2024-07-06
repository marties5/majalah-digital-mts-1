import image from "@/../public/images/logo-mts-1.png";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Flex className="items-start">
        <Image
          alt="logo mtsn 1 tulungagung"
          src={image}
          width={100}
          height={100}
          className="h-10 w-10"
        />
        <Flex variant="col" justify="start" className=" gap-0 items-start">
          <Typography variant="body2" className="font-bold">
            MtsN 1 Tulungagung
          </Typography>
          <Typography variant="caption">Majalah Digital</Typography>
        </Flex>
      </Flex>
    </Link>
  );
};
