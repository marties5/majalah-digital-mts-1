"use client";
import { cn } from "@/lib/utils";
import React from "react";

import { FaChalkboardTeacher } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineEmojiEvents, MdSpaceDashboard } from "react-icons/md";
import { PiNotebook } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
const data = [
  {
    id: "1",
    menu: [
      {
        id: "1",
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        role: ["developer", "admin", "student", "teacher", "superadmin"],
        location: "/",
      },
    ],
  },
  {
    id: "2",
    title: "Siswa",
    menu: [
      {
        id: "1",
        name: "Daftar Kelas",
        icon: <SiGoogleclassroom />,
        role: ["developer", "admin", "student", "superadmin"],
        location: "/",
      },
      {
        id: "2",
        name: "Kegiatan Siswa",
        icon: <MdOutlineEmojiEvents />,
        role: ["developer", "admin", "student", "teacher", "superadmin"],
        children: [
          {
            id: "1",
            name: "Piket Kelas",
            icon: "material-symbols:camera-video-outline-rounded",
            role: ["developer", "admin", "student", "superadmin"],
            location: "/manajemen/cctv",
          },
          {
            id: "2",
            name: "Prestasi Siswa",
            icon: "material-symbols:camera-video-outline-rounded",
            role: ["developer", "admin", "student", "teacher", "superadmin"],
            location: "/manajemen/cctv",
          },
        ],
      },
      {
        id: "3",
        name: "Catatan",
        icon: <PiNotebook />,
        role: ["developer", "student", "bk", "teacher", "superadmin"],
        children: [
          {
            id: "1",
            name: "Catatan Keaktifan",
            icon: "material-symbols:camera-video-outline-rounded",
            role: ["developer", "teacher", "superadmin"],
            location: "/manajemen/cctv",
          },
          {
            id: "2",
            name: "Catatan BK",
            icon: "material-symbols:camera-video-outline-rounded",
            role: ["developer", "bk", "student", "teacher", "superadmin"],
            location: "/manajemen/cctv",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Guru",
    menu: [
      {
        id: "1",
        name: "Daftar Guru",
        icon: <SiGoogleclassroom />,
        role: ["developer", "admin", "teacher", "superadmin"],
        location: "/",
      },
      {
        id: "2",
        name: "Kegiatan Sekolah",
        icon: <FaChalkboardTeacher />,
        role: ["developer", "admin", "teacher", "superadmin"],
        location: "/",
      },
    ],
  },
];

const Sidebar = ({ className }: any) => {
  const [isMatch, setIsMatch] = React.useState<string>("");
  const role = "developer";

  return (
    <div className={cn("border-r p-4", className)}>
      {data.map((side: any, index: number) => (
        <div key={side.id}>
          <div
            className={`text-xs font-bold text-slate-800 uppercase ${
              index !== 0 && "mt-3"
            }`}
          >
            {side?.title}
          </div>
          {side?.menu?.map(
            (menu: any) =>
              menu.role.includes(role) && (
                <div key={menu.id} className="mt-2">
                  <a
                    href={menu.children?.lenght == 0 ? "" : menu.location}
                    onClick={() =>
                      setIsMatch((prevMatch) =>
                        prevMatch === menu.name ? "" : menu.name
                      )
                    }
                    className="cursor-pointer text-slate-400 font-medium hover:text-slate-700"
                  >
                    <div className="pt-1.5 pb-2  px-2 flex gap-1 border-l-2 justify-between tracking-wider hover:bg-slate-100 text-left items-center">
                      <p className="flex items-center gap-2">
                        {menu.icon}
                        {menu.name}
                      </p>
                      {menu?.children ? (
                        <span
                          className={`${
                            isMatch == menu.name && "rotate-180"
                          } rotate-0 duration-200 delay-200`}
                        >
                          <IoChevronDown />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </a>
                  <div className="flex flex-col">
                    {isMatch == menu.name &&
                      menu.children &&
                      menu.children.map(
                        (child: any) =>
                          child.role.includes(role) && (
                            <a
                              className="ml-4 pt-1.5 pb-2 border-l-2 mb-1 text-slate-400 font-medium hover:text-slate-700  px-2 flex gap-1 justify-between tracking-wider hover:bg-slate-100 text-left items-center"
                              key={child.id}
                              href={child.location}
                            >
                              {child.name}
                            </a>
                          )
                      )}
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
