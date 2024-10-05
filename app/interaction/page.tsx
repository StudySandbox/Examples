import { Tabs } from "@/components/ui/tabs";
import { MainComponent } from "./components";
import { InteractionSidebar } from "./components/side";
import { ScrollArea } from "@/components/ui/scroll-area";

const SpectrumPage = () => {
  return (
    <Tabs className="flex h-screen bg-slate-100">
      <ScrollArea className="over flex h-full max-w-[428px] flex-1 bg-blue-200">
        <InteractionSidebar />
      </ScrollArea>
      <ScrollArea className="flex h-full flex-1 bg-yellow-100">
        <MainComponent />
      </ScrollArea>
    </Tabs>
  );
};

export default SpectrumPage;
