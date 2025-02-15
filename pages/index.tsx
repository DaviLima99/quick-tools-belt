import { JSX, useState } from "react";
import { QrCode, Calculator, Clock, Lock, DollarSign, FileText } from "lucide-react";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import tools from "@/data/tools";
import AdsBanner from "@/components/AdsBanner";

export interface Tool {
  id: string;
  enable: boolean;
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
  iconClass: string;
  details: {
    title: string;
    description: string;
    features: string[];
    idealFor: string;
  };
}

export default function HomePage() {
  const [selectedTool, setSelectedTool] = useState<Tool | undefined>(undefined);

  return (
    <>
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <div className="bg-black mb-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
              {
                tools.map((tool, index) => (

                  <div key={tool.id} className={`bg-slate-800 p-6 rounded-lg shadow-md w-80 h-90 flex flex-col items-center text-center ${!tool.enable ? 'opacity-50' : ''}`}>
                    <div className={`text-violet-700 mb-4 text-center ${tool.iconClass}`}>{tool.icon}</div>
                    <h2 className="text-xl text-white font-semibold mb-2">{tool.name}</h2>
                    <p className="mb-4 text-sm text-gray-100">{tool.description}</p>
                    <div className="flex gap-2 mt-auto">
                      <a href={tool.enable ? tool.link : "#"}>
                        <Button variant="default" disable={!tool.enable}>Acessar</Button>
                      </a>
                      <Button variant="outline" disable={!tool.enable} onClick={() => setSelectedTool(tool)}>Ver detalhes</Button>
                    </div>
                  </div>

                ))
              }
            </div>


          </div>
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-black mb-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
            <div className="bg-black mt-5">
              <AdsBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="8455833841"
              />
            </div>
          </div>
        </div>
        <Dialog open={!!selectedTool} onClose={() => setSelectedTool(undefined)} tool={selectedTool ?? undefined} />
      </main>
    </>
  );
}
