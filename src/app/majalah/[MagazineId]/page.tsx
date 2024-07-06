"use client";
import images from "@/../public/images/Letter.webp";
import { BookSectionWrapper } from "@/components/page/section/Magazine";
import { useParams } from "next/navigation";

const MagazineDetails = () => {
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

  const { MagazineId } = useParams();
  return (
    <div className="max-md:px-8 py-8">
      <BookSectionWrapper magazine_data={bookSections} />
    </div>
  );
};

export default MagazineDetails;
