import { InteractionSidebar } from "./components/side";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  children: React.ReactNode;
};

const InteractionLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-slate-100" defaultValue="rti-content">
      <ScrollArea className="over flex h-full max-w-[428px] flex-1 bg-blue-200">
        <InteractionSidebar />
      </ScrollArea>
      <ScrollArea className="flex h-full flex-1 bg-yellow-100">
        {children}
      </ScrollArea>
    </div>
  );
};

export default InteractionLayout;
