import React from "react";
import Image from "next/image";
import getBanner from "@/app/lib/getBanner";

export default async function Products() {
  const banner = await getBanner();

  return (
    <>
      {banner.map((item) => (
        <>
          <h1>{item.name}</h1>
          <div key={item._id}>
            <img src={item.photos} alt="" />
            <Image
              src={`${item.photos}`}
              width={600}
              height={600}
              alt={item?.name || "health cat"}
            />
          </div>
        </>
      ))}
    </>
  );
}
