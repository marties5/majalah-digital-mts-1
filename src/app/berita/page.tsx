import images from "@/../public/images/A6.png";
import { Typography } from "@/components/Atoms/Typography";
import { NewsCardBigger } from "@/components/Organisms/Card/NewsCardBigger";


const dataNews = {
  id: 1,
  title: "Data personal rakyat indonesia di HACK",
  image: images,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptate dicta sapiente eaque facilis. Omnis ut et eius, perspiciatis unde totam temporibus quaerat dignissimos dolorum ullam nam impedit est expedita nisi tenetur id vitae iste, doloremque facilis maxime natus. Quaerat voluptatem dicta vitae dolore omnis excepturi. Esse tempora atque, distinctio vel, provident quidem explicabo eos eligendi aut architecto rerum quasi assumenda quis laboriosam nisi harum qui fuga, nulla in! Odio at non facilis quo laudantium reiciendis maxime id, distinctio fuga quasi quae repudiandae voluptatem culpa, nihil vitae quis, temporibus cum corrupti odit eum alias incidunt sed! Ab doloribus tenetur quibusdam.",
  date: "20/05/2024",
};

const dataNewses = [dataNews, dataNews, dataNews, dataNews, dataNews, dataNews];
const berita = () => {

  return (
    <div>
      <Typography variant="title" className="my-4">
        Berita
      </Typography>
      <div className="space-y-8 mb-10">
        {dataNewses.map((news: any, index: number) => (
          <NewsCardBigger dataNews={news} key={index} />
        ))}
      </div>
    </div>
  );
};

export default berita;
