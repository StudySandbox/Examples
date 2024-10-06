import { CarouselComponent } from "./components";

const InfiniteCarouselPage = () => {
  return (
    <div className="relative max-h-screen w-full overflow-hidden bg-black">
      <div className="flex min-h-screen w-full items-center justify-center space-y-4">
        <CarouselComponent direction="up" />
        <div className="h-full w-full" />
        <CarouselComponent direction="down" />
      </div>
    </div>
  );
};

export default InfiniteCarouselPage;
