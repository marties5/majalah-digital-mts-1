import Member from "@/../public/images/member.png";
import { Typography } from "@/components/Atoms/Typography";
import { CardMember } from "@/components/Organisms/Card/CardMember";

const dataJson = [
  {
    name: "Wahnu",
    class: "XII-9",
    image: Member,
    position: "Leader",
  },
  {
    name: "Ancika",
    class: "XII-9",
    image: Member,
    position: "Co-Leader",
  },
  {
    name: "Nuhuni",
    class: "XII-9",
    image: Member,
    position: "Content Researcher",
  },
  {
    name: "Wadahu",
    class: "XII-9",
    image: Member,
    position: "Content Desainer",
  },
  {
    name: "Muslihin",
    class: "XII-9",
    image: Member,
    position: "Content Desainer",
  },
  {
    name: "terserah",
    class: "XII-9",
    image: Member,
    position: "Content Idea",
  },
  {
    name: "Rangga",
    class: "XII-9",
    image: Member,
    position: "Content Idea",
  },
];
const Anggota = () => {
  return (
    <div className="px-4 my-4">
      <Typography variant="h4" className="my-4">
        Anggota Majalah Idea MtsN 1 Tulungagung
      </Typography>
      <div className="grid lg:grid-cols-4 place-items-center md:grid-cols-3 grid-cols-2 ">
        {dataJson.map((member: any, index: number) => (
          <CardMember data={member} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Anggota;
