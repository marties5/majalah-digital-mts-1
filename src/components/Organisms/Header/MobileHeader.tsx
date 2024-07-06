"use client";
import { ContainerHeader } from "@/components/Atoms/ContainerHeader";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Button from "@/components/Molecules/Button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

import { FaInstagram, FaYoutube } from "react-icons/fa";

import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HeaderLogo } from "./HeaderLogo";

export const MobileHeader = ({ menus }: any) => {
  const [open, setOpen] = React.useState(false);
  const path = usePathname();

  const handleOpen = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 200);
  };

  return (
    <ContainerHeader variant="between">
      <HeaderLogo />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" onClick={() => setOpen(true)}>
            <HiOutlineMenuAlt3 size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mb-6">
              <HeaderLogo />
            </SheetTitle>
            <SheetDescription>
              <Flex variant="col" className="justify-start items-start">
                {menus.map((menu: any, index: number) => (
                  <Flex
                    key={index}
                    className={`px-2 py-2 w-full rounded-md ${
                      path === menu.link ? "bg-gray-100 text-info" : ""
                    }`}
                  >
                    <p className="text-xl">{menu.icon}</p>
                    <Link href={menu.link} onClick={handleOpen}>
                      <Typography>{menu.name}</Typography>
                    </Link>
                  </Flex>
                ))}
              </Flex>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="h-14 absolute bottom-8 w-fit text-info">
            <Flex variant="col" className=" h-fit items-start">
              <Typography variant="subtitle1">Sosial Media</Typography>
              <Flex className="gap-4">
                <Link target="_blank" href="www.youtube.com/@mtsn1tulungagung">
                  <FaYoutube size={34} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/explore_matsaneta/"
                >
                  <FaInstagram size={28} />
                </Link>
              </Flex>
            </Flex>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </ContainerHeader>
  );
};
