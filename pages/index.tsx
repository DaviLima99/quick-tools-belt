import { JSX, useState } from "react";
import { QrCode, Calculator } from "lucide-react";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";

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

const tools = [
  {
    id: "qrcode",
    enable: true,
    name: "QR Code Generator",
    description: "Gere QR Codes personalizados facilmente.",
    icon: <QrCode size={40} />,
    link: "/qrcode",
    iconClass: 'icon-bg text-white',
    details: {
      title: "Gerador de QR Code - 100% Grátis",
      description: "Nosso Gerador de QR Code é uma ferramenta totalmente gratuita, simples e eficiente para criar códigos QR personalizados a partir de e-mails, links do WhatsApp e URLs.",
      features: [
        "Gratuito e ilimitado – gere quantos QR Codes quiser, sem restrições.",
        "Criação rápida e fácil de QR Codes para e-mails, links e sites.",
        "Formato especial para e-mails, permitindo adicionar assunto e mensagem personalizada.",
        "Validação automática para garantir que o conteúdo inserido seja válido.",
        "Interface responsiva e amigável, com feedback visual imediato.",
      ],
      idealFor: "Ideal para compartilhamento rápido de informações e automação de contatos.",
    },
  },
  {
    id: "calculator",
    enable: true,
    name: "Calculadora",
    description: "Uma calculadora simples e eficiente para realizar cálculos básicos e avançados.",
    icon: <Calculator size={40} />,
    link: "/calculator",
    iconClass: 'icon-bg-second text-violet-700',
    details: {
      title: "Calculadora - Faça cálculos com facilidade",
      description: "Nossa calculadora é uma ferramenta prática e fácil de usar para realizar cálculos básicos e avançados.",
      features: [
        "Cálculos básicos: soma, subtração, multiplicação e divisão",
        "Cálculos avançados: potência, raiz quadrada e logaritmo",
        "Memória para armazenar resultados e realizar cálculos subsequentes",
        "Interface intuitiva e fácil de usar",
        "Suporte a cálculos em diferentes unidades de medida",
      ],
      idealFor: "Ideal para estudantes, profissionais e qualquer pessoa que precise realizar cálculos frequentemente.",
    },
  },
];

export default function HomePage() {
  // const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [selectedTool, setSelectedTool] = useState<Tool | undefined>(undefined);
  
  return (
    <div className="">
      <div className="container mx-auto p-6 flex flex-col items-center text-center">
        <h1 className="text-3xl text-violet-700 font-bold mb-4">Ferramentas</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Explore nossas ferramentas online gratuitas para facilitar o seu dia a dia.
          Desde geração de QR Codes até cálculos matemáticos, temos tudo o que você precisa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {tools.map((tool) => (
            <div key={tool.id} className="border bg-white p-6 rounded-lg shadow-md w-80 h-90 flex flex-col items-center text-center">
              <div className={`text-violet-700 mb-4 text-center ${tool.iconClass}`}>{tool.icon}</div>
              <h2 className="text-xl text-violet-700 font-semibold mb-2">{tool.name}</h2>
              <p className="mb-4 text-sm text-gray-600">{tool.description}</p>
              <div className="flex gap-2 mt-auto">
                <Button variant="default" onClick={() => setSelectedTool(tool)}>Ver detalhes</Button>
                <Button variant="outline"><a href={tool.link}>Acessar</a></Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedTool} onClose={() => setSelectedTool(undefined)} tool={selectedTool ?? undefined} />
      </div>
    </div>
  );
}
