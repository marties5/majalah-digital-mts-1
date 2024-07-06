import { ContainerCard } from "@/components/Atoms/ContainerCard";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Image from "next/image";
import Link from "next/link";

type MagazineType = {
  magazine_data: {
    id: number;
    images: any;
    title: string;
    date: string;
  };
};
export const MagazineCard = ({ magazine_data }: MagazineType) => {
  return (
    <Link href={`/majalah/` + magazine_data.id}>
      <ContainerCard className="w-fit px-2 ">
        <Image
          src={magazine_data.images}
          height={400}
          width={500}
          alt="gambar"
          className="h-60 w-fit rounded-md md:h-40"
        />
        <Typography variant="subtitle2" className="my-2 mt-4">
          {magazine_data.title}
        </Typography>
        <Flex className="text-info">
          <Typography variant="caption" className="my-2">
            Tanggal terbit :
          </Typography>
          <Typography variant="caption" className="my-2">
            {magazine_data.date}
          </Typography>
        </Flex>
      </ContainerCard>
    </Link>
  );
};
