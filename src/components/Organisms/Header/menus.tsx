import { HeaderMenu } from "@/lib/interface";
import { CgMenuMotion } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoImageOutline, IoNewspaperOutline } from "react-icons/io5";
import { PiNewspaper } from "react-icons/pi";

export const HeaderMenus: HeaderMenu[] = [
  {
    name: "Dashboard",
    link: "/",
    icon: <CgMenuMotion />,
  },
  {
    name: "Majalah",
    link: "/majalah",
    icon: <PiNewspaper />,
  },
  {
    name: "Berita",
    link: "/berita",
    icon: <IoNewspaperOutline />,
  },
  {
    name: "Anggota",
    link: "/anggota",
    icon: <HiOutlineUsers />,
  },
  {
    name: "Galeri",
    link: "/galeri",
    icon: <IoImageOutline />,
  },
];
