import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

export const STLExample = ({ url }: { url: string }) => {
  const geom = useLoader(STLLoader, url);
  return (
    <>
      <mesh geometry={geom}>
        <meshPhongMaterial color="black" />
      </mesh>
    </>
  );
};
