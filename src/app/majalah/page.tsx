import images from "@/../public/images/Letter.webp";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import { MagazineCard } from "@/components/Organisms/Card/MagazineCard";
import { NewsPart } from "@/components/Organisms/Part/NewsPart";
const majalah = () => {
  const data = {
    id: 1,
    title: "Majalh Edisi 24",
    images: images,
    date: "20/06/2023",
  };
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
  const datas = [data, data, data, data, data, data, data, data, data];

  return (
    <div className="max-md:px-8 mb-10">
      <Typography variant="title" className="my-4">
        Majalah Digital
      </Typography>
      <Flex variant="col" className="lg:flex-row h-full items-start gap-8">
        <div className="grid  md:grid-cols-3 grid-cols-1 gap-8 justify-items-center align  w-full">
          {datas.map((magazine: any, index: number) => (
            <MagazineCard magazine_data={magazine} key={index} />
          ))}
        </div>
        <div className=" w-full max-w-md">
          <NewsPart dataNews={dataNewses} />
        </div>
      </Flex>
    </div>
  );
};

export default majalah;
