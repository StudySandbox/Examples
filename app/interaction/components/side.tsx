"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const InteractionSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-col gap-5 bg-[#1F2329] p-0">
      <Button
        asChild
        value="rti-content"
        className={cn(
          "flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-5",
          pathname === "/interaction/rti" && "bg-[#46515C] text-white",
        )}
      >
        <div className="flex min-h-32 items-center justify-start gap-6 rounded-lg">
          <Image
            src="/images/interactive/egg.svg"
            alt="빛으로 보는 백악기 초식 공룡알"
            width={75}
            height={63}
            className="h-auto w-[74px]"
          />
          <div>
            <p className="text-lg font-semibold text-white">
              빛으로 보는
              <br />
              백악기 초식 공룡알
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="2"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-5 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-4 rounded-lg">
          <Image
            src="/images/interactive/rain-drop.svg"
            alt="공주측우기와 통영측우대가 만나다"
            width={75}
            height={63}
            className="h-auto w-[74px]"
          />
          <div>
            <p className="text-lg font-semibold text-white">
              공주측우기와
              <br />
              통영측우대가 만나다
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="geography"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-5 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-6 rounded-lg">
          <Image
            src="/images/interactive/geography.svg"
            alt="기가픽셀로 보는 조선시대 지리"
            width={75}
            height={75}
            className="h-[75px] w-[75px]"
          />
          <div>
            <p className="text-lg font-semibold text-white">
              기가픽셀로 보는
              <br />
              조선시대 지리
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="maps"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-5 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-3 rounded-lg">
          <Image
            src="/images/interactive/map.svg"
            alt="빛과 파장으로 관찰하는 동국팔도지도"
            width={75}
            height={63}
            className="h-auto w-[70px]"
          />
          <div>
            <p className="text-lg font-semibold text-white">
              빛과 파장으로
              <br />
              관찰하는 동국팔도지도
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="5"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-6 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-6 rounded-lg">
          <Image
            src="/images/interactive/uv-ray.svg"
            alt="자외선으로 감별하는 제작기법"
            width={75}
            height={63}
            style={{ width: "75px", height: "63px" }}
          />
          <div>
            <p className="text-lg font-semibold text-white">
              자외선으로
              <br />
              감별하는 제작기법
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="6"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-6 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-6 rounded-lg">
          <Image
            src="/images/interactive/geological-map.svg"
            alt="대한 지질도, 진짜 색을 기록하다"
            width={75}
            height={63}
            style={{ width: "75px", height: "63px" }}
          />
          <div>
            <p className="text-lg font-semibold text-white">
              대한 지질도,
              <br />
              진짜 색을 기록하다
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="7"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-5 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-5 rounded-lg">
          <Image
            src="/images/interactive/gun.svg"
            alt="대한민국이 독자 개발한 소총을 들여다보다"
            width={64}
            height={64}
            style={{ width: "60px", height: "63px" }}
          />
          <div>
            <p className="text-lg font-semibold text-white">
              대한민국이 독자 개발한
              <br />
              소총을 들여다보다
            </p>
          </div>
        </div>
      </Button>
      <Button
        asChild
        value="8"
        className="flex w-full cursor-pointer justify-start bg-[#363F48]/40 px-6 data-[state=active]:bg-[#46515C] data-[state=active]:text-white"
      >
        <div className="flex min-h-32 items-center justify-start gap-6 rounded-lg">
          <Image
            src="/images/interactive/fabric.svg"
            alt="불에도 타지 않는 섬유가 있다"
            width={75}
            height={63}
            style={{ width: "75px", height: "63px" }}
          />
          <div>
            <p className="text-lg font-semibold text-white">
              불에도 타지 않는
              <br />
              섬유가 있다
            </p>
          </div>
        </div>
      </Button>
    </div>
  );
};
