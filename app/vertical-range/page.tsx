import { VerticalSlider } from "./components/vertical-slider";

const VerticalRangePage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-200">
      <div className="flex h-[400px]">
        <VerticalSlider />
      </div>
    </div>
  );
};

export default VerticalRangePage;
