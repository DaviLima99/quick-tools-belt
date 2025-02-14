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
    <div className="">
      <AdsBanner
                adClient="ca-pub-9676944737838425"
                adSlot="5945483902"
              />
              
      <div className="container mx-auto p-6 flex flex-col items-center text-center">
        <h1 className="text-3xl text-violet-700 font-bold mb-4">Ferramentas</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Explore nossas ferramentas online gratuitas para facilitar o seu dia a dia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {tools.map((tool) => (
            <div key={tool.id} className={`border bg-white p-6 rounded-lg shadow-md w-80 h-90 flex flex-col items-center text-center ${!tool.enable ? 'opacity-50' : ''}`}>
              <div className={`text-violet-700 mb-4 text-center ${tool.iconClass}`}>{tool.icon}</div>
              <h2 className="text-xl text-violet-700 font-semibold mb-2">{tool.name}</h2>
              <p className="mb-4 text-sm text-gray-600">{tool.description}</p>
              <div className="flex gap-2 mt-auto">
                <Button variant="default" disable={!tool.enable}><a href={tool.enable ? tool.link : "#"}>Acessar</a></Button>
                <Button variant="outline" onClick={() => setSelectedTool(tool)}>Ver detalhes</Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedTool} onClose={() => setSelectedTool(undefined)} tool={selectedTool ?? undefined} />
      </div>
    </div>
  );
}
