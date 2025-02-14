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

                  <div key={tool.id} className={`border bg-white p-6 rounded-lg shadow-md w-80 h-90 flex flex-col items-center text-center ${!tool.enable ? 'opacity-50' : ''}`}>
                    <div className={`text-violet-700 mb-4 text-center ${tool.iconClass}`}>{tool.icon}</div>
                    <h2 className="text-xl text-violet-700 font-semibold mb-2">{tool.name}</h2>
                    <p className="mb-4 text-sm text-gray-600">{tool.description}</p>
                    <div className="flex gap-2 mt-auto">
                      <Button variant="default" disable={!tool.enable}><a href={tool.enable ? tool.link : "#"}>Acessar</a></Button>
                      <Button variant="outline" onClick={() => setSelectedTool(tool)}>Ver detalhes</Button>
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
            <div className="bg-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Categories</h3>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Food
                  </a>
                </li>
              </ul>
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
      </main>
    </>
  );
}
