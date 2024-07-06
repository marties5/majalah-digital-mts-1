"use client";
import { ContainerHeader } from "@/components/Atoms/ContainerHeader";
import { Flex } from "@/components/Atoms/Flex";
import { Typography } from "@/components/Atoms/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLogo } from "./HeaderLogo";

export const DesktopHeader = ({ menus }: any) => {
  const path = usePathname();
  return (
    <ContainerHeader variant="between">
      <HeaderLogo />
      <Flex>
        {menus.map((menu: any, index: number) => (
          <Flex
            key={index}
            className={`px-2 py-1 w-full rounded-md ${
              path === menu.link ? "border-2 border-info text-info" : ""
            }`}
          >
            {menu.icon}
            <Link href={menu.link}>
              <Typography variant="overline">{menu.name}</Typography>
            </Link>
          </Flex>
        ))}
      </Flex>
    </ContainerHeader>
  );
};
