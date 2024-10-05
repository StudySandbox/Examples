// 기가픽셀로 보는 조선시대 지리

"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const digitalImgUrl =
  "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cninusohjlkz/b/science_p_bucket/o/기가픽셀로 보는 조선시대 지리/디지털 사진/디지털 사진.jpg";
const spectralImgUrl =
  "https://objectstorage.ap-seoul-1.oraclecloud.com/n/cninusohjlkz/b/science_p_bucket/o/기가픽셀로 보는 조선시대 지리/분광(625nm) 이미지/625nm.jpg";

export const Geography = () => {
  const [isDigitalLoading, setIsDigitalLoading] = useState(true);
  const [isSpectralLoading, setIsSpectralLoading] = useState(true);

  const isLoading = isDigitalLoading || isSpectralLoading;

  return (
    <TabsContent
      value="geography"
      className="m-0 h-screen bg-slate-200"
      forceMount
    >
      <div className="relative grid h-full w-full grid-cols-2 gap-5">
        {isLoading && (
          <div className="absolute z-[1] flex h-full w-full items-center justify-center bg-gray-800">
            <Loader2 className="size-12 animate-spin text-slate-500" />
          </div>
        )}
        <div className="relative">
          <Image
            src={digitalImgUrl}
            onLoad={() => setIsDigitalLoading(false)}
            alt="digital"
            fill
            priority={false}
            className="cursor-pointer object-contain opacity-50 transition-opacity duration-500 hover:opacity-100"
          />
        </div>
        <div className="relative">
          <Image
            src={spectralImgUrl}
            onLoad={() => setIsSpectralLoading(false)}
            alt="digital"
            fill
            priority={false}
            className="cursor-pointer object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>
    </TabsContent>
  );
};
