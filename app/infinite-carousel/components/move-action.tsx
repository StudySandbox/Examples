import {
  motion,
  useTransform,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

import { useRef } from "react";
import { wrap } from "@motionone/utils";

type DirectionType = "left" | "right" | "up" | "down";

type Props = {
  children?: React.ReactNode;
  direction: DirectionType;
  position?: "vertical" | "horizontal";
};

// 수치로 변환하는 함수
const convertingToFigures = (direction: DirectionType) => {
  if (direction === "up" || direction === "left") {
    return -5;
  }

  if (direction === "down" || direction === "right") {
    return 5;
  }

  return 100;
};

export function MoveActionComponent({
  children,
  direction,
  position = "vertical",
}: Props) {
  const base = useMotionValue(0);

  const moveDirection = convertingToFigures(direction);

  const positionValue = useTransform(base, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * moveDirection * (delta / 2000);

    moveBy += directionFactor.current * moveBy;

    base.set(base.get() + moveBy);
  });

  // 여기서 각각의 children은 순차적으로 생성되는 이미지를 의미합니다.
  return (
    <motion.div
      style={{
        y: position === "vertical" ? positionValue : undefined,
        x: position === "horizontal" ? positionValue : undefined,
      }}
    >
      <span>{children}</span>
      <span>{children}</span>
      <span>{children}</span>
      <span>{children}</span>
    </motion.div>
  );
}
