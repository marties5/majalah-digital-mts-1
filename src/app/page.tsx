import images from "@/../public/images/Letter.webp";
import { Typography } from "@/components/Atoms/Typography";
import { BreakingNews } from "@/components/page/section/BreakingNews";
import { BookSectionWrapper } from "@/components/page/section/Magazine";

export default function Home() {
  const bookSections = {
    id: 2,
    magazine_name: "Majalah Idea edisi 30",
    data: [
      images,
      images,
      images,
      images,
      images,
      images,
      images,
      images,
      images,
    ],
    mobileHeight: 275,
    mobileWidth: 360,
    desktopHeight: 465,
    desktopWidth: 600,
    page_count: "10",
    tanggal_terbit: "20/05/2024",
  };

  return (
    <main className="h-fit px-4 md:px-0">
      <BreakingNews />
      <Typography
        variant="title"
        className="md:my-4 my-1 text-start w-full text-lg"
      >
        Majalah Digital
      </Typography>
      <BookSectionWrapper magazine_data={bookSections} />
    </main>
  );
}
