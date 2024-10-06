"use client";

import Image from "next/image";
import { MoveActionComponent } from "./move-action";

type Props = {
  direction: "left" | "right" | "up" | "down";
  position?: "horizontal" | "vertical";
};

const imageArray1 = [
  "/images/move/img1.jpg",
  "/images/move/img2.jpg",
  "/images/move/img3.jpg",
];

const imageArray2 = [
  "/images/move/img4.jpg",
  "/images/move/img5.jpg",
  "/images/move/img6.jpg",
];

export const CarouselComponent = ({
  direction,
  position = "vertical",
}: Props) => {
  const imageArrayCheck = direction === "up" || direction === "left";

  return (
    <>
      <MoveActionComponent direction={direction} position={position}>
        <div className="space-y-4 pb-4">
          {imageArrayCheck
            ? imageArray1.map((image) => (
                <Image
                  src={image}
                  key={image}
                  alt="image"
                  width={400}
                  height={400}
                />
              ))
            : imageArray2.map((image) => (
                <Image
                  src={image}
                  key={image}
                  alt="image"
                  width={400}
                  height={400}
                />
              ))}
        </div>
      </MoveActionComponent>
    </>
  );
};
