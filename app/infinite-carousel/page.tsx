import { CarouselComponent } from "./components";

const InfiniteCarouselPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center">
      <div className="h-[800px] w-full overflow-hidden">
        <div className="flex">
          <CarouselComponent direction="up" />
          <div className="flex flex-1 items-center justify-center bg-blue-200">
            Main
          </div>
          <CarouselComponent direction="down" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarouselPage;
