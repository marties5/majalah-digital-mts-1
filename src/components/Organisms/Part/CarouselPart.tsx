import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const CarouselPart = ({ carousel_data }: any) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        active: true,
      }}
      className="md:w-full lg:max-w-4xl"
    >
      <CarouselContent>
        {carousel_data.map((content: any, index: number) => (
          <CarouselItem key={index}>
            <Image
              alt="gambar"
              src={content}
              height={800}
              width={1000}
              className="w-full object-contain bg-error h-fit rounded-lg "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
