import { useState } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import AdBanner from '../components/AdBanner';
import { qrCodeTypes } from '../data/qrCodeOpt';
import { QrCode, Calculator, SquareAsteriskIcon } from "lucide-react";
import QrCodeSvg from '../assets/qr-code.svg';
import Image from 'next/image';

const Products = () => {

    const tools = [
        { 
            id: "qrcode", 
            name: "QR Code Generator", 
            description: "Gere QR Codes personalizados facilmente.", 
            icon: <QrCode size={20} />, 
            link: "/qrcode", 
            details: {
                title: "Gerador de QR Code - 100% Grátis",
                description: "Nosso Gerador de QR Code é uma ferramenta totalmente gratuita, simples e eficiente para criar códigos QR personalizados a partir de e-mails, links do WhatsApp e URLs. Com uma interface intuitiva, basta inserir o conteúdo desejado e gerar seu QR Code em segundos.",
                features: [
                    "Gratuito e ilimitado – gere quantos QR Codes quiser, sem restrições.",
                    "Criação rápida e fácil de QR Codes para e-mails, links e sites.",
                    "Formato especial para e-mails, permitindo adicionar assunto e mensagem personalizada.",
                    "Validação automática para garantir que o conteúdo inserido seja válido.",
                    "Interface responsiva e amigável, com feedback visual imediato.",
                ],
                idealFor: "Ideal para compartilhamento rápido de informações, automação de contatos e integração com diferentes plataformas digitais.",
            }
        },
        { id: "calculator", name: "Calculadora", description: "Uma calculadora simples e eficiente.", icon: <Calculator size={20} />, link: "/calculator" },
        { id: "password", name: "Gerador de senha segura", description: "Encurte links longos para facilitar o compartilhamento.", icon: <SquareAsteriskIcon size={20} />, link: "/password" },
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
      <div className="w-3/4 p-10 flex flex-col items-start justify-center text-left">
        <h1 className="text-3xl font-bold text-violet-700">{selectedTool.name}</h1>
        <p className="text-gray-600 mt-2">{selectedTool.description}</p>
        {selectedTool.details && (
          <div className="mt-6 flex flex-row gap-4">
            <Image src={QrCodeSvg} alt="QR Code" className="w-80 h-80" />
            <div>
              <h2 className="text-2xl font-bold text-violet-700">{selectedTool.details.title}</h2>
              <p className="text-gray-600 mt-2">{selectedTool.details.description}</p>
              <h3 className="text-xl font-bold text-violet-700 mt-4">Funcionalidades:</h3>
              <ul className="list-disc pl-4">
                {selectedTool.details.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-4">{selectedTool.details.idealFor}</p>
            </div>
          </div>
        )}
        <a href={selectedTool.link} className="mt-6 px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-500 transition">
          Acessar
        </a>
      </div>
    </div>
  );
};

export default Products;