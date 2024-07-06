import { ContainerCard } from '@/components/Atoms/ContainerCard'
import { Typography } from '@/components/Atoms/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NewsCardBigger = ({dataNews}:any) => {
  return (
    <ContainerCard className="p-8 w-fit space-y-4 max-w-2xl group">
    <div className="lg:h-[24rem] md:h-[20rem] object-cover rounded-md overflow-hidden">
      <Image
        alt=""
        src={dataNews.image}
        width={1000}
        height={800}
        className="group-hover:opacity-90 group-hover:scale-105 duration-300 ease-in "
      />
    </div>
    <Typography variant="subtitle1" className="group-hover:underline">
      {dataNews.title}
    </Typography>
    <Typography
      variant="caption"
      className="tracking-wider text-gray-400 hover:text-black line-clamp-3  leading-6 "
    >
      {dataNews.description}
    </Typography>
    <Link href={`/berita/` + dataNews.id}>
      <Typography
        variant="button"
        className="border w-fit p-2 rounded-md text-info mt-10 group-hover:bg-info group-hover:text-white duration-300 ease-out"
      >
        Baca Selengkapnya
      </Typography>
    </Link>
  </ContainerCard>
  )
}
