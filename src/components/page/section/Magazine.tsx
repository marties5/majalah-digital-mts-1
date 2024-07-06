import { BookSection } from "@/components/Organisms/Part/BookSection";

export const BookSectionWrapper = ({ magazine_data }: any) => {
  return (
    <>
      <div className="md:block hidden">
        <BookSection
          magazine_data={magazine_data}
          BookHeight={magazine_data.desktopHeight}
          BookWidth={magazine_data.desktopWidth}
        />
      </div>
      <div className="block md:hidden ">
        <BookSection
          magazine_data={magazine_data}
          BookHeight={magazine_data.mobileHeight}
          BookWidth={magazine_data.mobileWidth}
        />
      </div>
    </>
  );
};
