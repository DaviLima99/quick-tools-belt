import { useState } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import AdBanner from '../components/AdBanner';
import { qrCodeTypes } from '../data/QrCodeTyoes';
import { QrCode, Calculator, SquareAsteriskIcon } from "lucide-react";

const Products = () => {

    const tools = [
        { id: "qrcode", name: "QR Code Generator", description: "Gere QR Codes personalizados facilmente.", icon: <QrCode size={20} />, link: "/qrcode" },
        { id: "calculator", name: "Calculadora Financeira", description: "Uma calculadora simples e eficiente.", icon: <Calculator size={20} />, link: "/calculator" },
        { id: "password", name: "Gerador de senha segura", description: "Encurte links longos para facilitar o compartilhamento.", icon: <SquareAsteriskIcon size={20} />, link: "/shortener" },
      ];
   const [selectedTool, setSelectedTool] = useState(tools[0]);

  return (
    <div className="flex h-screen bg-blue-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-violet-700 text-white p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-4">Ferramentas</h2>
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool)}
            className={`flex items-center gap-2 p-3 rounded-lg transition-all 
              ${selectedTool.id === tool.id ? "bg-violet-500" : "hover:bg-violet-600"}`}
          >
            {tool.icon}
            <span>{tool.name}</span>
          </button>
        ))}
      </div>

      {/* Conteúdo à direita */}
      <div className="w-3/4 p-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-violet-700">{selectedTool.name}</h1>
        <p className="text-gray-600 mt-2">{selectedTool.description}</p>
        <a href={selectedTool.link} className="mt-6 px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-500 transition">
          Acessar
        </a>
      </div>
    </div>
  );
};

export default Products;