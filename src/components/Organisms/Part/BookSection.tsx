"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useFullscreenStore from "@/lib/useStore/StateFullScreen";
import React from "react";
import { RxExitFullScreen } from "react-icons/rx";
import { Flex } from "../../Atoms/Flex";
import { Typography } from "../../Atoms/Typography";
import { BookComponent } from "../../Molecules/BookComponent";
import Button from "../../Molecules/Button";

export const BookSection = ({
  magazine_data,
  BookHeight,
  BookWidth,
}: {
  magazine_data: any;
  BookHeight: number;
  BookWidth: number;
}) => {
  const { setIsFullScreen } = useFullscreenStore();
  const [isOpen, setIsOpen] = React.useState<Boolean | any>(false);

  const { magazine_name, page_count, tanggal_terbit, data } = magazine_data;

  const BookComponents = () => {
    return <BookComponent data={data} height={BookHeight} width={BookWidth} />;
  };

  return (
    <div className="flex flex-col justify-center items-center h-fit w-full">
      <Flex className="w-full" justify="start">
        <Flex justify="start" className="w-full">
          <Typography variant="subtitle1" className="my-4 text-start text-sm">
            {magazine_name}
          </Typography>
          -
          <Typography
            variant="subtitle2"
            className="text-nowrap text-info text-xs"
          >
            {tanggal_terbit}
          </Typography>
        </Flex>
        <Button
          className="hidden md:block text-gray-400 mb-4"
          variant="outline"
          onClick={() => {
            setIsFullScreen(), setIsOpen(!isOpen);
          }}
        >
          <Flex justify="center" className="group">
            <Typography className="text-nowrap" variant="caption">
              Full Screen
            </Typography>
            <RxExitFullScreen className="group-hover:text-[20px] w-6 duration-150 ease-in-out"/>
          </Flex>
        </Button>
      </Flex>
      <BookComponents />
      <Flex justify="center" className="w-full">
        <Typography variant="button" className="my-4 text-start">
          {page_count}
        </Typography>
        <Typography variant="overline" className="text-nowrap">
          Halaman
        </Typography>
      </Flex>
      <Dialog
        open={isOpen}
        onOpenChange={() => {
          setIsFullScreen(), setIsOpen(!isOpen);
        }}
      >
        <DialogContent className="w-full h-screen px-10">
          <Flex justify="center" className="h-fit min-h-screen pt-0 w-full">
            <BookComponents />
          </Flex>
        </DialogContent>
      </Dialog>
    </div>
  );
};
